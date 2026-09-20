---
date: 2026-05-09 07:55:00
description: "A structural comparison of the two Western RAN giants, how AI is quietly rewriting the network roadmap, and my reasoned, uncertain view on which of them is better placed to win the next decade."
title: "Nokia vs Ericsson in the AI Era"
author: "Vikram Singh"
category: "Telecom"
---

Every few years someone asks me, usually over coffee at a standards meeting, whether I would rather bet on Nokia or Ericsson. It is a fun question because it sounds like a horse race and is actually a question about two very different theories of what a telecom vendor should be. The two companies grew up as rivals in the same Nordic corner of the world, they both survived the near-death experience of the smartphone era, and they now stand as the West's two remaining full-line radio vendors. And yet they are not the same kind of animal at all.

I want to compare them the way I would compare two designs in a review: by structure, not by slogans. What is each company actually made of, where does its money really come from, and how does the arrival of AI in the network change the shape of the bet? I have opinions, and I will give them, but I will also be honest about the parts I cannot know.

## Two different theories of the firm

Start with the simplest structural fact, because it explains almost everything downstream. Ericsson is close to a pure play in mobile networks. The radio access network is its heart, its history, and the largest share of its revenue. Nokia is a portfolio company. It runs mobile networks too, but alongside a large network infrastructure business (fixed access, optical transport, IP routing, submarine cables), a cloud and network services arm, and a licensing operation that quietly earns some of the best margins in the entire industry.

That single difference cascades. Ericsson's focus makes it sharper and more exposed. When RAN capital spending is strong, Ericsson rides it hard. When operators pause, as they do in long and painful cycles, Ericsson feels the cold more directly because it has fewer other rooms to sit in. Nokia's diversification does the opposite. It softens the peaks and cushions the troughs, but it also spreads attention and capital across many fronts, and a company fighting on five fronts rarely dominates any single one.

Neither theory is wrong. They are bets on different risks. Ericsson is betting that focus wins. Nokia is betting that optionality wins. The AI era, as I will argue, does something interesting: it rewards a little of both, which is why this comparison is harder in 2026 than it would have been in 2019.

## The patent engines nobody talks about at parties

Before the roadmaps, a word about the least glamorous and most important asset each company owns: intellectual property. Both Nokia and Ericsson hold enormous portfolios of standard-essential patents in 4G and 5G. Every handset maker, every device that connects to a cellular network, pays into these portfolios. This licensing revenue is not large in the way network equipment revenue is large, but it is extraordinarily high margin, because the research was done years ago and the marginal cost of licensing is close to nothing.

For Nokia this is a named, distinct business with its own strategy. For Ericsson it is a smaller but still meaningful engine. In both cases it is a stabilizer: cash that keeps flowing while the hardware cycles heave up and down. When I evaluate either company's ability to survive a bad few years and keep funding research, this patent income is the shock absorber I look at first. It is unglamorous. It is also why both companies can afford to keep a lab running through winters that would kill a pure equipment vendor.

## Cloud RAN, virtualization, and the slow unbundling of the radio

For most of telecom history, a base station was a sealed, purpose-built appliance. The last several years have been about pulling that appliance apart: separating the software from the hardware, running the network functions on more general-purpose compute, and, in the O-RAN vision, opening the interfaces between the pieces so different vendors can interoperate.

Both companies have had to respond to this, and their responses reveal their instincts. Ericsson approached virtualization and Cloud RAN with the care of a company that guards its performance reputation. Its skepticism about early Open RAN was partly self-interest, since open interfaces invite competitors into its stronghold, and partly a genuine engineering worry that disaggregated systems would not match the efficiency of an integrated design. Then, notably, Ericsson made a large and public commitment to open and cloud-based RAN with a major North American operator, which was a real strategic turn: embrace the thing that threatens you, and try to lead it rather than resist it.

Nokia, coming from a more diversified base and having stumbled in the early 5G radio generation before recovering, has leaned into openness partly as a challenger's move. When you are not the clear leader in a segment, open interfaces are a lever, not a threat. Both are now firmly inside the Open RAN and cloud-RAN conversation. The honest truth from where I sit is that neither has fully resolved the tension between the efficiency of integration and the flexibility of disaggregation. Nobody has. That tension is the defining engineering argument of this decade, and it is not settled.

## Why AI genuinely reshapes the RAN, not just the pitch deck

It is easy to be cynical about AI in telecom, because the industry says "AI" the way a nervous student says a keyword hoping it will be on the exam. But underneath the noise, there are a few places where AI changes the actual economics of a network, and those are the places that will reshape both vendors' roadmaps.

### Energy is the killer application

A base station is, among other things, an electricity bill. Radios burn power whether or not there is traffic to carry, and for most operators the energy cost of the radio network is one of the largest lines in the operating budget. AI that predicts load and intelligently sleeps radios, cells, and components during quiet hours does something rare in this industry: it saves real money that an operator's finance team can see on a statement. This is the AI use case that sells itself, and both companies know it. If I were prioritizing AI features as either vendor, energy would be line one, two, and three.

### Scheduling and the radio's inner loop

The scheduler that decides, thousands of times a second, which user gets which slice of spectrum is one of the most performance-critical loops in the whole system. It has traditionally been hand-tuned heuristics refined over decades. Machine learning that can adapt these decisions to real, messy conditions is a genuine frontier, and it is exactly the kind of place where a vendor's deep radio expertise, the thing Ericsson and Nokia both have and startups mostly do not, becomes a durable advantage. AI here is not a bolt-on. It reaches into the crown jewels.

### Digital twins and automation

Running a national network is a nightmare of scale and change. Digital twins (high-fidelity simulations of the live network) let operators test changes before they touch reality, and AI-driven automation lets the network heal and optimize itself with less human hand-holding. This is close to my own work, so I will restrain my enthusiasm, but I genuinely believe the operational software layer is where a large amount of the next decade's value migrates. Selling a box is a one-time event. Selling the intelligence that runs the box is a relationship.

### AI-RAN as a shared platform

The newest idea, pushed hard by the AI-RAN movement and by the arrival of serious accelerated computing into the base station, is that the same infrastructure could serve both the radio network and general AI workloads at the edge. Run the network when it needs the compute, run AI inference for other customers when it does not, and stop paying for two separate sets of expensive hardware. Whether this becomes a large real business or a beautiful architecture diagram is one of the genuine open questions of the moment. Both vendors are participating. Neither can afford to sit it out, and neither can prove yet that it pays.

## The map matters: geopolitics is now part of the product

You cannot compare these two companies without the map, because in this industry the map is part of the product.

The restrictions placed on Huawei across much of the Western world reshaped the board. With the largest and cheapest competitor pushed out of many markets, Nokia and Ericsson became, in effect, the default Western choice, especially where a government wants a "trusted vendor" that is neither Chinese nor dependent on Chinese supply. This is a tailwind, and both have ridden it. It is also a reminder that a large share of their fortune is decided in capitals, not in labs.

North America is Ericsson's fortress. Its position with the large US operators is strong, it has invested in US manufacturing, and it anchored a major open-RAN commitment there. That concentration is a strength and a risk in the same breath: wonderful when those operators are spending, exposed when they pause or when a single relationship sours.

China, meanwhile, is largely closed to both of them now, a market of enormous scale where domestic vendors dominate and foreign share has dwindled. Europe is home turf for both but is not spending like it once did. Open RAN, backed by policy pressure in the US, Europe, and Japan, adds a structural wildcard: governments actively want more vendor diversity, which cuts against the incumbents even as those same incumbents try to lead the open transition. Both companies are, in a sense, being asked to help build the tools that let smaller rivals into their own house.

## So who is better positioned?

Here is where I stop describing and start committing, with the caveat that anyone who claims certainty about a ten-year technology race is selling something.

If the question is narrowly "who is stronger in the radio access network, today, in the markets that pay the most," I lean Ericsson. Its focus, its North American position, and its willingness to lead the open and cloud transition rather than merely survive it give it a sharpness that a diversified competitor struggles to match. Focus is underrated in this industry. The company that does one hard thing supremely well often beats the company that does five things adequately.

But the AI era widens the question, and the wider question flatters Nokia. The AI buildout is, at its core, a story about moving colossal amounts of data between colossal amounts of compute. That is optical transport, IP routing, and data-center connectivity, and Nokia's network infrastructure business (strengthened by its move deeper into optical) sits directly in that current. Nokia's appointment of leadership drawn from the data-center and semiconductor world was a clear signal of where it intends to point. If the next decade's growth is as much about connecting AI factories as it is about connecting phones, Nokia has doors into rooms that a RAN-focused Ericsson does not.

So my honest, hedged view is this. Ericsson is the better bet on the radio access network as a standalone contest, and the radio is still where the largest telecom capital lives. Nokia is the better bet on optionality, on being positioned across the widest set of surfaces that AI will touch, from the radio to the router to the fiber feeding a data center. Which theory wins depends on a question none of us can answer yet: does the value of the next decade stay concentrated in the radio, or does it migrate outward into the connective tissue of an AI-saturated world?

I will not pretend to know. What I will say, from years of watching both companies up close in the rooms where the standards get written, is that this is the healthiest tension in Western telecom. Two serious engineering companies, two coherent and opposite theories, both with the patent cash to survive their mistakes and keep their labs alight. The industry needs both of them to be good, because the alternative to a real Nokia-versus-Ericsson contest is a world with one Western radio vendor and no argument left to have. And an industry with no argument left is an industry that has stopped thinking. On the evidence, neither of these two has stopped thinking yet.
