---
date: 2026-04-08 10:35:00
description: "Creating a category and banking it are different verbs. A look, from business fundamentals, at consumer mindshare versus enterprise margin, and why winning attention is not the same as winning a profit-and-loss statement."
title: "OpenAI Built the Market. Anthropic Built the Business."
author: "Vikram Singh"
category: "AI"
---

## The company that names a thing rarely owns it

There is a difference between the company that names a market and the company that banks it, and it is one of the most dependable patterns in the history of technology. Netscape named the browser. Microsoft banked it, and then Google banked it again. Friendster and MySpace named social networking. Facebook banked it. Xerox PARC drew the graphical desktop on a screen in Palo Alto and then handed the checkbook to Apple and Microsoft. The inventor and the earner are usually not the same firm, and the distance between them is where most of the money, and most of the heartbreak, tends to live.

I have been watching the present moment through that old lens. OpenAI named the market. In late 2022 it put a text box on the internet, called it ChatGPT, and within two months had the fastest consumer adoption anyone had bothered to measure. The name became a verb, which is the most valuable thing that can happen to a brand and also the hardest to manufacture on purpose. Anthropic did something quieter. It pointed Claude at developers and enterprises, at the unglamorous surfaces where software is actually written and sold, and went hunting not for mindshare but for margin.

Neither of these is obviously the smarter move. I want to reason about why, from business fundamentals, and I will not pretend I have anyone's internal accounts in front of me, because I do not, and neither do the people who quote revenue numbers at you with such confidence.

## A market is not a business

The words get used loosely, so let me separate them. A market is demand made legible. It is the moment a diffuse human want (I wish I could just ask a machine in plain language and get a real answer) becomes a visible, countable, addressable thing that capital can aim at. Creating a market is an act of revelation. You show people a door they did not know they wanted, and suddenly everyone is walking through it.

A business is a different animal. A business is durable margin: the gap between what a thing costs you to deliver and what someone will reliably pay for it, sustained long enough to compound. Markets can exist for years with no good business inside them. Ask the airlines. Ask anyone who sold groceries on the internet in 1999. The demand was real and the unit economics were a bonfire.

So the honest question is not who is winning attention. We can all see who is winning attention. The question is who is building the thing that survives after the subsidies stop and the novelty wears thin.

## Two different bets

### Distribution is a real asset, not a vanity metric

Let me give OpenAI its due, because it is fashionable in engineering circles to sniff at consumer traction as if it were empty calories. It is not. Distribution is one of the few genuinely durable moats in software, and OpenAI has more of it than anyone.

When a product becomes the default verb for a whole category, three things happen. Habit forms, and habit is stickier than any feature. A data flywheel starts turning, because hundreds of millions of conversations are a corpus you cannot buy at any price. And a brand premium appears, where the median person will pay for the name they trust over the alternative they have never heard of, even when a blind test would not separate the two. Coca-Cola has run on that last effect for a century.

That is a real asset. If you own the place where a billion people form the habit of asking, you own a piece of the future that is very hard to dislodge, almost regardless of who has the best model this particular quarter.

### But consumer is an expensive throne

Here is the other side of the ledger, and it is the side people skip. Consumer scale is costly in ways that do not show up in a headline user count.

You carry a free tier, which is pure cost of customer acquisition paid in GPU time, and most of those users will never convert. You carry churn, because a consumer subscription is a monthly decision to keep paying, and there is always a cheaper or free substitute one tab away. You carry support, trust and safety, content moderation, and the reputational tail risk of a product that a hundred million strangers will use to do things you did not imagine. Every embarrassing screenshot is your brand's problem now.

None of this is fatal. But it means the consumer flywheel spins on a large and permanent cost base. Attention is a flow. You have to keep paying to keep it. Margin is a stock. Once you have it, it compounds. Winning attention and winning a profit-and-loss statement are different verbs, and the whole history I opened with is a history of firms that confused the two.

## Where the margin actually lives

Now let me put on the hat I actually wear, because I have spent years writing GPU kernels and building large simulation platforms, and inference economics is a subject I can reason about from the metal up rather than from a pitch deck.

The unit cost of serving a model is not mysterious. It is set by how many parameters you activate per token, the arithmetic intensity of the attention and the matrix multiplies, the memory bandwidth of the accelerator, the batch size you can sustain, and above all the utilization you achieve on very expensive silicon that is depreciating whether it is busy or idle. A GPU sitting at forty percent utilization is a landlord paying full rent on a half-empty building.

That structure decides who earns a margin.

The consumer product hides the cost inside a flat subscription and a free tier. You cannot see the unit economics, and neither can the user, which is rather the point.

The enterprise API exposes it in daylight. You are quoting a price per million tokens against a known cost per million tokens, and the difference is your gross margin, negotiated by procurement teams who do this for a living. That is a harder business and a cleaner one. It rewards operational excellence: better batching, smarter routing between model sizes, aggressive caching, cheaper serving of the same quality. It is the sort of unglamorous engineering that never trends and quietly decides who stays solvent.

Anthropic chose to compete on that surface first. Whether or not it wins, it chose the surface where a business, in the strict sense of durable margin, is actually visible and actually defensible.

### Reliability is a moat, and I learned that in telecom

There is a habit of mind in enterprise buying that consumer people consistently underestimate, and I understood it long before I touched a language model, because I grew up professionally in telecom.

An operator does not buy the flashiest radio. An operator buys the radio that will not page an engineer at three in the morning. Predictability beats peak performance, because the cost of a failure in production dwarfs the benefit of a marginal gain on a benchmark. The whole procurement psychology is organized around not getting fired for a bad night.

Enterprises buy models the same way. They will trade a few points on a leaderboard for a model that behaves the same on Tuesday as it did on Monday, that refuses the things it should refuse, that does not surprise them in front of a customer, and that comes with an answer to the question every serious buyer asks: when this goes wrong, who is accountable, and how do we reason about the failure? Anthropic leaned hard into that psychology. The emphasis on safety, on steerability, on consistent behavior, reads in consumer land as a little joyless. In enterprise land it reads as exactly the risk profile a buyer wants to sign off on. Reliability is not a feature. In a business built on trust, it is the moat.

### But the developer moat is thinner than SaaS people think

Now let me argue against my own side, because a good argument earns its conclusion by trying to break it.

People assume an API relationship is as sticky as a SaaS relationship. It is not, or not yet. When you build your company on a big enterprise suite, ripping it out means retraining every human and rebuilding every workflow. When you build on a model API, the surface you depend on is narrow: a prompt format, a function-calling schema, a few behavioral quirks you have tuned around. Swapping one frontier model for another is closer to a configuration change than a migration, and the teams that take this seriously keep an evaluation harness precisely so they can swap on a bad week.

That thin switching cost is a permanent gravitational force on API prices. It pulls gross margins toward the marginal cost of compute, because your customer can defect the moment a competitor is cheaper at the same quality. So the enterprise business is cleaner and more honest than the consumer business, but it is not a fortress. It is a good position on an exposed hill, and holding it means being genuinely better or genuinely cheaper, over and over, which is exhausting and also the entire point of competition.

## The hyperscaler shadow over both

Here is the fact that complicates every neat story, including mine. Neither company fully controls its own distribution to the enterprise, because the enterprise buys through Amazon, Microsoft, and Google. The models are increasingly sold from inside the hyperscalers' marketplaces, on the hyperscalers' bills, next to the hyperscalers' own competing models. Whoever owns the cloud owns the shelf, and the shelf owner sets the terms.

That is a structural risk to the enterprise-first strategy specifically. You can build the most trusted model in the category and still watch a large slice of the value get captured by the layer that controls procurement and billing. Distribution reasserts itself even here. It always does. The consumer app, for all its costs, is at least a direct relationship with the end user that no cloud provider mediates, which is one more reason not to wave away what OpenAI built.

## What I actually think

I promised balance, so let me be precise rather than diplomatic.

OpenAI created the category and owns the strongest direct-to-human distribution in computing, which is a real and compounding asset, sitting on top of a large and permanent cost base that consumer scale demands.

Anthropic chose the surface where margin is visible and where reliability functions as a moat, which is the more legible business, sitting on top of a thinner switching cost and a dependence on cloud shelves it does not own.

Both are, at the frontier, still funded by investors rather than by operations, because training the next model is a capital furnace and neither has yet proven a self-sustaining P&L at that frontier. Anyone who tells you otherwise with a specific number is guessing with confidence.

So I will not crown a winner, because the interesting truth is that they are playing two different games that only look like one. One is trying to convert the largest pile of attention in the history of computing into durable margin before the cost base eats it. The other is trying to convert the cleanest margin structure in the category into enough scale and distribution to matter before the clouds and the price war close in.

The history I opened with suggests the sobering part. The firm that names a market and the firm that banks it are usually not the same firm, and naming is the more glamorous act while banking is the more durable one. Netscape got the verb. Microsoft, and then Google, got the decade.

Attention is loud and margin is quiet, and the market mistakes the first for the second right up until the accounting arrives. Watch the accounting.
