---
date: 2026-07-12 23:20:00
description: "The real fight between OpenAI and Apple is not about a chatbot, it is about the choke point: the device, the store, and the default assistant. Structural and legal reasoning from someone raised in telecom's own long history of gatekeeping."
title: "OpenAI vs Apple: Antitrust, Innovation, and Collateral Damage"
author: "Vikram Singh"
category: "AI"
---

## The fight is about the gate, not the chatbot

When people describe the tension between OpenAI and Apple as a battle of products, a chatbot against a phone, they are looking at the wrong layer. The fight is about a choke point. Apple controls the device in your hand, the operating system that runs on it, the store that decides what software reaches it, the default slots that decide what launches when you press a button or speak a wake word, and the payment rails that tax what happens inside. Any company that wants to put an intelligent assistant into a billion pockets has to pass through that gate, or through Google's version of the same gate. This is a distribution war wearing the costume of a product war, and distribution wars are decided by structure, not by who has the cleverest model this quarter.

I find this fight clarifying rather than surprising, because I have spent my career one industry over, in telecom, which invented most of the gatekeeping moves that the tech platforms later refined. So let me reason about it structurally, the way I would reason about any bottleneck, and leave the personalities out of it.

## What platform power actually is

Platform power is control over a bottleneck that everyone else must traverse. It is not the same as being large, and it is not the same as being good. It is owning a narrow passage between a big supply of something and a big demand for it, and charging rent on the passage.

Apple owns several such passages at once, which is what makes the position so strong. Hardware, which is the device itself. Distribution, because the App Store is the only sanctioned way to install software on that device. Defaults, meaning the assistant that answers the wake word, the browser that opens a link, the search that runs in the bar. Payments, the tax on transactions that happen inside apps. And access, the private hooks and background privileges that Apple's own software enjoys and third parties often may not.

The passage that matters most in the AI era is the default assistant slot, because the assistant is quietly becoming the new home screen. For a decade the scarce real estate was the icon on the grid. In an assistant-mediated world the scarce real estate is the invocation itself: who answers when you say the wake word. Whoever owns that owns the funnel through which demand flows, and can decide whether your model is the answer, a buried option three settings deep, or absent entirely. Own the invocation and you do not have to have the best model. You only have to be the one that speaks first.

## The antitrust logic, stated plainly

There are two classic theories worth knowing, because the current fight is a new instance of very old law.

The first is monopoly maintenance, or leverage: using dominance in one market to advantage yourself in an adjacent one. The second is self-preferencing, the idea that an essential gateway must not tilt the field toward its own products. Both point at the same conduct, and both have a canonical case behind them.

### The Microsoft precedent

United States v. Microsoft, argued roughly across 1998–2001, is the case every AI executive should be able to recite. Microsoft had a dominant position in PC operating systems. It bundled Internet Explorer into Windows at no separate charge and used the operating system's distribution to displace Netscape, which had created the browser market in the first place. The government's theory was not that bundling is inherently illegal. It was that a dominant firm using control of one layer, the OS, to foreclose competition in an adjacent layer, browsers, is unlawful monopoly maintenance.

The case ended not in a breakup but in conduct remedies, constraints on how Microsoft was allowed to behave. And here is the part that gets forgotten: it arguably worked, not because the remedy was surgical, but because it held the field open long enough for the next platform shift, search and then mobile, to route around the incumbent. Intervention plus a platform shift reopened competition that leverage had very nearly closed for good.

Now map it forward. Replace the operating system with phone-plus-OS. Replace the browser with the AI assistant. The structural question rhymes exactly. Is a dominant device platform using its control of defaults and its store to advantage its own assistant against independent ones? That, and not the quality of any particular chatbot, is the legal ballgame. The modern instrument is different, and in Europe it is the Digital Markets Act, which designates gatekeepers, restricts self-preferencing, and mandates interoperability and choice screens. The browser choice screen is the template, and it extends to assistants with almost no imagination required.

## History rhymes: the browser wars

Let me stay with Netscape a moment longer, because the lesson is painfully clean. Netscape named and created the browser market and had an enormous head start. Microsoft did not out-invent it. Microsoft out-distributed it, by placing a free browser in front of every Windows user by default. Distribution beat product because the distributor controlled the layer beneath the product.

That is the permanent lesson, and it is precisely why an AI company with a superb model can still lose the consumer battle to a mediocre assistant that happens to own the wake word. Being better is not sufficient when someone else owns the gate. But the browser story has a hopeful second half that people skip. The gate did not hold forever. Antitrust pressure, plus the arrival of new platforms, the web as an application layer and then mobile, let Firefox and then Chrome reopen the browser market entirely. Structure is powerful. It is not eternal, especially across a platform shift, which is the one force that reliably resets the board.

## Telecom did all of this first, and I watched it

Now to my home turf, because I think telecom offers the sharpest analogy of all, and it is one that the software world rarely reaches for.

Before anyone worried about app stores, the gatekeepers of mobile were the carriers. The carrier controlled the spectrum, the SIM that decided which network you could use, the approved-handset list that decided which phones were even allowed onto the network, and, in the feature-phone era, the operator deck, a walled menu of ringtones and applications the carrier curated and taxed. If you were a developer then, you did not reach the user. You reached the carrier, who might, for a cut and a long delay, reach the user on your behalf. It was gatekeeping in its purest, most undisguised form.

The iPhone's quiet revolution, the part that mattered every bit as much as the touchscreen, was that Apple wrested control away from the carriers. Apple dictated terms to the operator instead of the other way around, and freed the device from the carrier deck. For one bright moment the gate swung open.

And then, one layer up, Apple rebuilt the very wall it had just torn down. The carrier deck became the App Store. The carrier's cut became the platform's cut. The approved-handset list became app review. This is the pattern I most want you to carry away: gatekeeping does not disappear when you defeat a gatekeeper. It migrates to whoever controls the next scarce layer. The abundant layer is always taxed by whoever owns the scarce one beneath it. Spectrum gave way to the operating system, and the operating system may in turn give way to the model, which is exactly what this present fight is about.

## Who takes the arrows

When two giants fight, the arrows land on the small. That is not a metaphor, it is the reliable outcome, and it has two victims.

Small developers first. They live inside terms they cannot negotiate. A platform's rules are not a contract between equals, they are weather. The API you built two years of work on can change in a single keynote. The feature you spent those two years perfecting can be absorbed into the operating system for free, a fate old enough to have its own verb: being sherlocked. The platform's cut is a fact of your profit-and-loss statement that you had no vote in. I have been the small company whose fortunes hung on a giant's roadmap, and I can tell you it is a particular kind of powerlessness, planning your entire year around a platform that does not know your name.

Users second, and less visibly. The cost to a user is not a line on a receipt, it is the choice they never got offered. The default that is not the best product, only the pre-installed one. The superior assistant they never tried because it sat three settings deep instead of behind the wake word. Bundling is comfortable, and comfort is exactly how a worse default beats a better challenger. The real harm is the counterfactual, the products that were never built because their builders could not reach anyone, and you cannot photograph a thing that does not exist. That is what makes this kind of harm so easy for a platform to deny.

## What healthy competition would actually look like

Let me be constructive, because complaint without a remedy is just noise, and I want to be clear about something first. I do not want Apple punished, and a lot of antitrust talk is really only resentment of success dressed up as principle. Vertical integration is not a crime. Apple's integration delivers real goods: privacy, security, a coherence the alternative ecosystems often lack. The problem is never that a company built a good gate. The problem is a good gate being used to foreclose the field beyond it. So the remedy should be structural and frankly boring, aimed at keeping the adjacent market contestable, not at vengeance.

Here is what that looks like, concretely.

- Choice at the defaults. Let users pick the default assistant the way Europe now lets them pick a browser, with a neutral screen and no dark patterns. If Apple's own assistant is best, it wins the screen. Let it earn the slot rather than inherit it.
- Neutral access to the hooks. The OS-level privileges Apple's assistant enjoys, background access, the wake word, deep integration, should be available to third parties on equal terms. No self-preferencing through private APIs that only the house team may call.
- Portability of context. Your assistant's memory of you, your history and your preferences, should be exportable, so that switching costs come from quality and not from lock-in. Data portability turns a moat back into a race.
- Separation of the layers. Keep the store, the operating system, and the model as distinct layers that cannot be silently leveraged into one another. Unbundling is the oldest structural remedy there is, and often the cleanest.

None of that kills the platform. All of it keeps the adjacent market, the one where the next decade of innovation will actually happen, open to challenge. Antitrust at its best is maintenance, not punishment. You are not smashing the machine. You are keeping a second door from being quietly welded shut.

And do not mistake OpenAI for a plucky underdog in any of this. It is not. It has its own platform ambitions, its own alliance with a hyperscaler, its own evident desire to become the gate rather than to abolish gates. The correct frame is not root for the challenger. The correct frame is structural and indifferent to the names on the buildings: keep choke points from calcifying, no matter who holds them, because today's challenger is next decade's incumbent, and it will want the exact same wall the moment it can afford to build one.

There is always a gate. That is not the scandal, and it is not fixable, because scarcity concentrates and whoever owns the scarce layer will tax the abundant one above it. Telecom taught me that gatekeeping does not die. It moves. So the question worth asking is never whether a gate exists. It is whether anyone is still allowed to build a second door. Keep that door legal, and most of the rest takes care of itself.
