---
date: 2026-03-30 13:20:00
description: "Scaling a GPU workload is a numbers game, not a vibe. A first-principles tour of Amdahl and Gustafson, strong versus weak scaling, the roofline, Little's law for latency hiding, and the alpha-beta model that explains why the interconnect, not the compute, sets the ceiling."
title: "The Mathematics of GPU Scaling"
author: "Vikram Singh"
category: "GPU"
hasMath: true
---

People talk about GPU scaling as though it were a matter of willpower. Add more cards, get more speed, and if it refuses to go faster you simply did not push hard enough. I spent three years at Gigayasa building a GPU-scalable 5G/6G system simulator, and the machine never once cared how hard I pushed. Scaling is arithmetic. Every ceiling has an equation behind it, and once you can see the equation you stop being surprised by the wall.

This is the set of equations I wish someone had handed me on the first day.

## Two laws that describe the same machine and disagree

The oldest argument in parallel computing is between two ways of asking "what does another processor buy me."

Amdahl's law fixes the problem. Suppose a fraction $p$ of the work parallelizes cleanly and the remaining $(1-p)$ is stubbornly serial. With $N$ processors the runtime is $(1-p) + p/N$ relative to one, so the speedup is

$$ S(N) = \frac{1}{(1-p) + \dfrac{p}{N}}. $$

Push $N$ to infinity and the parallel term vanishes, leaving $S_\infty = 1/(1-p)$. If ninety-five percent of your code parallelizes, your ceiling is twenty. Not twenty per card. Twenty, forever, across every GPU you will ever buy. That is strong scaling: the same fixed problem, solved faster, until the serial remainder swallows the win.

Gustafson's law asks the opposite question. Do not hold the problem fixed, hold the time fixed and grow the work. If each processor keeps a constant slice of parallel work and only the serial part stays constant, the scaled speedup becomes

$$ S(N) = (1-p) + pN, $$

which is linear in $N$ and never saturates. This is weak scaling: a bigger problem in the same wall-clock time.

Both laws are correct. They answer different questions, and confusing them is the most common mistake I see. A concrete pair from the simulator. A strong-scaling task was "take this fixed 19-cell hexagonal layout with ten users per cell and make one Monte Carlo drop finish faster." The serial remainder was real: seeding the RNG, building the geometry, generating spatially correlated shadow fading, the final reductions that collapse per-user metrics into a CDF. No number of GPUs drives those to zero, so Amdahl capped me. A weak-scaling task was "simulate a 500-cell metro network with a hundred thousand users." There each GPU owned a patch of the map, the per-GPU work stayed roughly constant as I added cards, and Gustafson let me grow the city. Same code. Two completely different scaling stories, because the question was different.

The practical lesson: decide which law you are living under before you buy hardware. If you are strong-scaling, hunt the serial fraction. If you are weak-scaling, protect the per-GPU work from shrinking into launch overhead.

## Where the serial fraction actually hides

Amdahl's $(1-p)$ is never labeled in the code. On a GPU it hides in specific, findable places: host-to-device and device-to-host copies over PCIe, kernel launch latency (a few microseconds each, which is enormous when a kernel runs for ten), global reductions and prefix sums, and any RNG or bookkeeping still running on a single host thread. I have watched a "parallel" simulator spend forty percent of its time in `cudaMemcpy` and serial setup. That forty percent is your $(1-p)$, and it sets a ceiling of $2.5\times$ no matter how many H100s you rent.

## Efficiency is the metric that does not flatter

Speedup flatters. The number that keeps you honest is parallel efficiency, the speedup per processor:

$$ E(N) = \frac{S(N)}{N}. $$

Substitute Amdahl and you get $E(N) = 1 / \bigl((1-p)N + p\bigr)$, which sags toward zero as $N$ grows no matter how good $p$ is. That is the mathematical shape of every scaling-efficiency chart that droops as you add nodes. The useful question is not "did it get faster" (it did, a little) but "at what efficiency," because efficiency is what your electricity bill and your GPU-hour budget actually pay for. A run at twenty percent efficiency is you renting five GPUs to get the work of one. Weak scaling exists precisely to keep efficiency near one: grow the problem with the machine so each processor stays busy, and the sag never happens. Strong versus weak is, at bottom, a choice about which you can afford to waste: time or efficiency.

## The roofline: the ceiling above a single kernel

Before scaling out, understand the ceiling on one device. Take any kernel and measure two quantities: the floating-point work $W$ it does and the bytes $Q$ it moves through memory. Their ratio is the arithmetic intensity,

$$ I = \frac{W}{Q}, $$

in FLOPs per byte. The attainable performance is the smaller of two ceilings, raw compute and what memory can feed:

$$ P = \min\bigl(P_{\text{peak}},\; I \cdot B\bigr), $$

where $B$ is memory bandwidth. The crossover, the ridge point, sits at $I^{*} = P_{\text{peak}} / B$. To the left of the ridge you are memory-bound and the compute units starve. To the right you are compute-bound. Most real kernels live to the left, in the hungry country.

| Device (representative, rounded) | FP32 peak | Tensor FP16/BF16 peak | Memory BW | Ridge (FP32) |
|---|---|---|---|---|
| Server CPU, dual socket | ~3 TFLOP/s | n/a | ~0.35 TB/s (DDR5) | ~9 FLOP/byte |
| RTX 4090 (GDDR6X) | ~82 TFLOP/s | ~330 TFLOP/s | ~1.0 TB/s | ~82 FLOP/byte |
| A100 SXM (HBM2e) | ~19.5 TFLOP/s | ~312 TFLOP/s | ~2.0 TB/s | ~10 FLOP/byte |
| H100 SXM (HBM3) | ~67 TFLOP/s | ~990 TFLOP/s | ~3.3 TB/s | ~20 FLOP/byte |

Read that table sideways and the memory wall jumps out: tensor throughput has raced ahead of bandwidth, which pushes the ridge point up and to the right, which means more and more kernels fall into the memory-bound region every hardware generation. The chips got hungrier faster than the pipes got wider.

Here is a kernel that lives deep in that hungry country, the humble SAXPY:

```cuda
__global__ void saxpy(int n, float a, const float* x, float* y) {
    // grid-stride loop: keep many memory requests in flight
    for (int i = blockIdx.x * blockDim.x + threadIdx.x;
         i < n;
         i += blockDim.x * gridDim.x) {
        y[i] = a * x[i] + y[i];   // 2 FLOPs, 12 bytes moved
    }
}
```

Each element does one multiply and one add, two FLOPs, while reading `x[i]` and `y[i]` and writing `y[i]`, twelve bytes. So $I = 2/12 = 1/6$ FLOP per byte. On an A100 the best this can ever do is $I \cdot B = \tfrac{1}{6} \times 2.0 \approx 0.33$ TFLOP/s, roughly one and a half percent of the FP32 peak. Nothing you write inside that kernel changes the answer. The only lever is arithmetic intensity, and SAXPY has almost none. When people ask why their elementwise kernel "wastes the GPU," this is the reason: it was never a compute problem.

## Little's law: an idle GPU is usually a starved GPU

A GPU hides memory latency by keeping many operations in flight at once. How many? Little's law, straight from queueing theory, gives the answer. The concurrency needed to sustain a throughput $T$ at a latency $L$ is

$$ N_{\text{inflight}} = L \times T. $$

Global memory latency is on the order of a few hundred cycles. To saturate a bandwidth of hundreds of bytes per cycle you therefore need thousands of bytes in flight, meaning thousands of independent requests resident and waiting at all times. That is what occupancy buys you: enough resident warps that while some stall on memory, others issue. An "idle" GPU with low utilization is almost never out of work in the human sense. It is out of *independent* work, unable to cover its own latency.

The grid-stride loop above exists precisely to feed Little's law: launch enough threads that the scheduler always has another warp ready when the current one stalls. This is where occupancy fights register pressure. More registers per thread means faster inner loops but fewer resident warps, because the register file is finite. Fewer warps means less latency hiding. The sweet spot is rarely maximum occupancy and rarely maximum registers. It is the point where you have just enough warps to hide the latency and not one register more spilled to local memory. You find it by measuring, not by guessing.

## The alpha-beta model: why the wire sets the ceiling

Now scale out, and meet the equation that ended more of my optimistic afternoons than any other. The time to move a message of $n$ bytes between two GPUs is well modeled by

$$ T(n) = \alpha + \beta n, $$

where $\alpha$ is the fixed latency (link setup, in microseconds) and $\beta$ is the per-byte cost (the inverse of bandwidth). Small messages are dominated by $\alpha$, large ones by $\beta n$. This is the whole story of collective communication.

Data-parallel training and many parallel simulations perform an all-reduce every step: every GPU must sum its contribution into a shared result. A ring all-reduce of $M$ bytes across $N$ GPUs costs about

$$ T_{\text{comm}}(N) = 2(N-1)\,\alpha + 2\,\frac{N-1}{N}\,\beta M. $$

Watch the two terms as $N$ grows. The bandwidth term saturates: $2\frac{N-1}{N}\beta M \to 2\beta M$. But the latency term grows without bound, like $2N\alpha$. Add enough GPUs and you are paying for nothing but handshakes.

Now put compute and communication together for a strong-scaling step. Fixed total compute work $W$ spread over $N$ GPUs at per-GPU rate $r$ takes $W/(Nr)$, and each step also pays the all-reduce:

$$ T(N) = \frac{W}{N r} + 2(N-1)\alpha + 2\frac{N-1}{N}\beta M. $$

The compute term falls like $1/N$. The latency term rises like $N$. A function that falls then rises has a minimum, and differentiating,

$$ \frac{dT}{dN} = -\frac{W}{N^2 r} + 2\alpha + \frac{2\beta M}{N^2} = 0 \;\Longrightarrow\; N^{*} = \sqrt{\frac{\,W/r - 2\beta M\,}{2\alpha}}. $$

When compute dominates the numerator this is roughly $N^{*} \approx \sqrt{W / (2 r \alpha)}$. Read what it says: the best number of GPUs scales with the square root of the work and shrinks as interconnect latency $\alpha$ grows. Beyond $N^{*}$, adding GPUs makes the job slower. Not flat. Slower. The ceiling on strong scaling is set by $\alpha$, a property of the wire, not by any FLOP number on the box.

This is why interconnect is where the money and the cleverness go: NVLink, fat-tree fabrics, topology-aware collectives, gradient compression, overlapping communication with computation so the all-reduce hides behind the backward pass. Every one of those tricks is an attack on $\alpha$ or $\beta$, an attempt to push $N^{*}$ to the right.

## The roofline is fractal

Here is the unifying idea. Inside one chip the honest quantity was $I = W/Q$, work done per byte moved, and it decided whether you were compute-bound or memory-bound. Across a cluster the honest quantity is the ratio of compute time to communication time, which is again work done per byte moved, one level up the hierarchy. The picture repeats at every scale: register file to shared memory, shared memory to HBM, HBM to a neighbor GPU, GPU to a GPU across the room. Same shape, same minimum, same lesson. The bottleneck is almost never the arithmetic. It is feeding the arithmetic.

When someone promises linear speedup, ask them for three numbers: their serial fraction, their arithmetic intensity, and their $\alpha$. Those three, from Amdahl, from the roofline, and from the alpha-beta model, bound everything the marketing slide will not. Scaling is not something you achieve by wanting it. It is something you compute, and then engineer up to.
