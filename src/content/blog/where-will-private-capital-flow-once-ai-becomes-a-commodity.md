---
date: 2026-02-16 22:10:00
description: "When raw model access turns into a commodity, the profit does not disappear, it migrates. A field guide to where private capital should flow next, and what will look, in hindsight, like this cycle's dark fiber."
title: "Where Will Private Capital Flow Once AI Becomes a Commodity?"
author: "Vikram Singh"
category: "Startups"
---

A few weeks ago I was cleaning out old cloud invoices and found one from early 2022, from the Gigayasa days. We rented A100s by the hour to run our system simulator, and I still remember the small daily arithmetic of it, the way a running meter quietly shaped every design decision we made. Last week I ran a batch job against a frontier model and paid less for a million tokens of output than that old invoice charged me for twenty minutes of a single GPU.

That gap is the whole essay. Hold onto it.

## A commodity is not a bad product

We tend to use the word commodity as an insult, which is a mistake. A commodity is a good product that has become interchangeable. Wheat is a commodity. My family in Haryana grows it. It is essential, it feeds people, and yet the farmer captures almost none of the value sitting inside a loaf of bread on a shelf in Bengaluru. The money lives with the miller, the brand, the packaging, the distribution, the shelf, and the quiet trust that the loaf is safe to eat.

Raw model access is becoming wheat. Not because the models are unimpressive (they are astonishing) but because three or four labs now sell roughly interchangeable frontier capability, open-weight models trail by a few months, and the price per token is in free fall. When several vendors sell the same capability and one of them gives it away, you have a commodity. The magic of the artifact does not exempt it from the economics.

This is not really a prediction. It is mostly already visible on the invoices. The only open question is what it does to the flow of money.

## Profit does not vanish, it migrates

There is an idea from Clayton Christensen I keep coming back to, the conservation of attractive profits. When one layer of a stack modularizes and turns cheap and interchangeable, the scarcity, and therefore the profit, moves to the layers next to it that are still hard. Value is conserved. It relocates.

So when someone tells me AI will destroy value, or that there is no money in it, I think they have misread the map. The money does not evaporate. It leaves the layer that just commoditized and goes looking for the nearest scarce thing. Our job, as builders and as the people who allocate capital, is to work out where it is headed. Let me walk the layers.

### Proprietary data

The model is the commodity, the fuel is not, or so the pitch goes. It is half true. Most so-called proprietary data is close to worthless: a static dump that depreciates the moment it is collected and that your competitor can buy the same afternoon. The valuable kind has three properties. It is regenerated continuously as the exhaust of an operating business, it is expensive or impossible to reconstruct from the outside, and it is tied to real outcomes rather than to raw text.

In my own field, channel measurements and ray-traced propagation data for specific physical deployments are genuinely scarce, because gathering them costs real money and they are bound to actual sites and hardware. A scraped corpus is not scarce in that way. The moat is not the file, it is the flywheel that keeps refilling the file. Margins are excellent when the data falls out of a business you already run, and thin when you had to go buy it.

### Distribution

The oldest moat there is. When anyone can bolt a competent model-powered feature onto their product in a weekend, the scarce thing is no longer capability, it is the user's attention and the default. Whoever already sits inside the workflow wins the feature war almost by inertia. The incumbent adds an AI button to a product forty million people already open every morning. The wrapper startup has to buy each of those users from zero, at a customer-acquisition cost that only rises as the field fills up.

This is the uncomfortable truth for a lot of AI-native apps: many of them are a feature, and the incumbent's distribution eats features for breakfast. Some of the largest winners of this cycle will be boring companies with existing distribution who did nothing more clever than wire a commodity model into a place users were already standing.

### Deep workflow integration

There is a canyon between a chatbot and a system that is actually wired into the messy state of a real business: its permissions, its data, its side effects, its audit trail, its need to undo a mistake cleanly. Crossing that canyon is slow and unglamorous, which is exactly why it defends. Integration depth becomes a switching cost. You are no longer selling intelligence by the pound, you are selling an outcome that is expensive to rip out.

I learned this from the inside. Our simulator's value was never a single clever algorithm, it was that the thing was woven into how a team actually iterated day to day. When that works, it is sticky. (When the surrounding business fails, the integration dies with it, but that is a different lesson.) The margin here is healthy, because you are paid for the result and not for the compute.

### Energy and compute infrastructure

The picks and shovels. Right now this is where the scarcity screams loudest: GPUs, power, interconnect, cooling, grid capacity. It is real. It is also capital-intensive, cyclical, and dangerously prone to overbuild, and I will come back to that. The subtlety most people miss is which part is durably scarce. The specific GPU generation is a melting ice cube, it depreciates fast and the next generation makes it look expensive. Power and grid interconnection are the durable constraint, because you cannot conjure two hundred megawatts and a substation with a fresh funding round. Bet on the permit and the transformer, not on the silicon.

### Robotics and physical AI

This is the frontier the token collapse quietly unlocks. When intelligence gets cheap, a whole class of physical automation that used to be uneconomic suddenly pencils out. But atoms are humbling in a way bits are not: unit costs, supply chains, safety, and iteration loops measured in months rather than minutes. The moat is the hard-won marriage of perception, actuation, and the real world, plus the data flywheel from a deployed fleet. Margins start thin, at hardware margins, and only improve once the fleet, the data, and the service layer compound on each other. It is a long game that rewards patience and domain depth, which makes it a poor fit for tourist capital and a good fit for people who actually enjoy the physical world.

### Vertical applications

If I were allocating disciplined money, I would spend a lot of it here. A vertical application that owns one specific workflow, in one specific industry, with proprietary data exhaust and real regulatory context, can dig a moat the horizontal labs cannot be bothered to attack. The model is a commodity input. The product is the domain knowledge, the integrations, the trust, and the last mile that turns a general capability into something a hospital billing office or a network operations team will actually pay for. The margin is good because you are selling measurable outcomes, not intelligence by the token.

### Trust and regulation-heavy domains

Regulation is a moat that arrives disguised as a cost. In telecom, finance, healthcare, and defense, the barrier was never can you build it. It is can you be trusted, certified, and held liable for running it. Certification, provenance, auditability, and accountability are slow and expensive to earn, which is precisely what makes them durable. And here is the twist AI adds: as generating plausible content becomes free, verifying that content becomes the scarce and valuable act. Trust appreciates in a world drowning in cheap plausibility. This is badly underrated by momentum investors, mostly because it does not demo well on a Tuesday afternoon.

## The dark fiber of this cycle

Now the warning, and it is an old one. In the late 1990s, telecom companies laid staggering amounts of fiber optic cable, betting on infinite internet demand. WorldCom, Global Crossing, and their peers borrowed enormous sums to bury glass in the ground. Most of it went dark, unlit for years. The companies that built it went bankrupt and their investors were wiped out.

And yet the fiber was real. A decade later, the next generation of companies, streaming video and the modern web, ran on that cheap, overbuilt infrastructure, bought for cents on the dollar. The infrastructure thesis was correct. The timing and the capital structure killed the people who acted on it first.

What rhymes today? Undifferentiated datacenter capacity built at peak prices on debt, underwritten by a demand curve that quietly assumes today's inefficiency is permanent. It is not. Useful work per unit of compute keeps improving, which means some of the capacity being financed at the top will be worth far less by the time it switches on. The thin wrapper apps with no data, no distribution, and no integration, just a system prompt and a payment button, are the retail version of the same mistake. So is the Nth me-too foundation model with a brilliant team and no way to reach anyone.

Some of that overbuilt capacity will be genuinely useful later, to companies that did not pay to build it. That is cold comfort to whoever financed it at the peak. The distinction the disciplined will make, and the tourists will not, is between infrastructure that is scarce because of physics and permits and infrastructure that is scarce only because of a temporary supply crunch. One is a moat. The other is an ice cube you bought at noon.

## Where this leaves the money

Strip it down to a rule of thumb. When a layer commoditizes, look one layer up, toward the human outcome, and one layer down, toward the physical scarcity, and refuse to fall in love with the exact layer that just got cheap. The token is going to zero. The things a token cannot make interchangeable are where the returns will pool: distribution, a proprietary flywheel, trust you are certified to charge for, the permit to draw serious power, and the unglamorous last mile into a real business.

My father never got rich growing wheat. But across every price cycle, boom and bust, the people who controlled the mill and the market did fine. The crop was commoditized centuries ago, and the value simply moved to the layers around it and stayed there. AI is the most extraordinary crop we have ever grown. Do not fall in love with the crop. Study who owns the mill.
