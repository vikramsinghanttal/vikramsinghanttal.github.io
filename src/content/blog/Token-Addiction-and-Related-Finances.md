---
date: 2026-01-01 10:20:15
title: Token Addiction, AI Coding Productivity and Enterprize Finances 
author: Vikram Singh
category: AI
description: I've been surprised by how difficult minimalism becomes the moment something has tiny ears and a smiling face.
---

AI coding began with a wonderfully simple proposition: **let the machine do some of the typing.**

Writing boilerplate? Let AI do it. Need a unit test? Ask AI. Forgotten the arguments to some obscure API? Ask again. There is something rather liberating about having a reasonably competent programmer sitting beside you who doesn't get tired, doesn't mind being interrupted, and will cheerfully produce another version when you say, "No, not quite. Try again."

And so we did.

Then we discovered agents.

Now the AI doesn't merely finish the function. It reads the repository, searches through twenty files, proposes a change, writes the code, compiles it, discovers an error, reads the logs, changes six more files, runs the tests, discovers that three tests fail, reasons about why, changes the code again, and perhaps asks another model to review what the first model wrote.

Wonderful.

But somebody is paying for all those words.

## The Token Addiction

I call this **token addiction**, though not because tokens themselves are bad. Tokens are simply the little units in which these systems consume and produce language. The addiction is to something much more attractive: *another attempt.*

The old economics of programming imposed friction. If I wanted to rewrite a complicated module three different ways, *I had to rewrite it three different ways*. That fact alone encouraged a certain amount of thinking before typing.

With AI, the temptation is different.

> "Try a cleaner implementation."
>
> "Now optimize it."
>
> "Think harder."
>
> "Run through the repository and see what else needs changing."
>
> "Actually, reconsider the architecture."

Each request feels almost free.

It isn't.

As AI coding moves from fixed-price assistants toward agentic, consumption-based workloads, token use becomes an increasingly variable enterprise cost. In June 2026, Gartner warned that organizations moving from AI coding experiments to scaled deployment were underestimating the financial effects of token consumption, particularly when developers naturally optimize for speed and convenience rather than token efficiency. Gartner went considerably further, predicting that by 2028 AI coding costs could exceed the salary of the average developer if present consumption and pricing trends continue.

That is a rather astonishing inversion.

We began with AI because developer time is expensive. We may discover that making developer time cheaper encourages us to consume an extraordinary amount of machine time.

## But Productivity Is Real

It would be easy, and I think mistaken, to turn this into another argument that AI coding is overhyped.

The interesting problem is precisely the opposite: **AI coding can be useful enough that we stop noticing how much of it we are consuming.**

A programmer who would once spend an afternoon writing tests might generate them in minutes. An unfamiliar codebase becomes less forbidding when an agent can explain it. Refactoring becomes easier to attempt because the mechanical labor is cheaper. Documentation gets written that otherwise might never have existed.

And perhaps most importantly, the engineer stays in motion.

That matters.

But productivity and activity aren't the same thing. Nor are tokens and productivity.

Suppose Engineer A consumes ten million tokens and delivers a feature in three days. Engineer B consumes one hundred million and delivers it in two. Who was more productive?

Well, it depends.

What did those tokens cost? How valuable was the day saved? How maintainable is the resulting code? Did either implementation introduce defects? Did Engineer B's agent create 8,000 lines where Engineer A needed 2,000? And, six months from now, who is going to maintain all this wonderfully effortless code?

Once you ask those questions, **tokens per developer** begins to look like the wrong measurement.

The useful quantity is something more like:

> **Business value delivered / Total engineering cost**

AI belongs in the denominator.

## The Enterprise Discovers the Meter

Here is where a small change in software engineering becomes a large change in enterprise finance.

Companies know reasonably well how to budget people. We hire 100 engineers. They cost approximately this much. Their IDE licenses cost this much. Source control costs this much. Cloud infrastructure fluctuates, certainly, but at least FinOps has spent years learning how to deal with that.

What happens when every engineer acquires a little invisible cloud workforce whose consumption depends on what that engineer happens to be doing that afternoon?

Perhaps very little on Monday.

Then somebody starts a large repository migration on Tuesday.

An agent reads millions of tokens of context, repeatedly. Another agent reviews the output. CI invokes another AI service. Ten developers discover that running three agents in parallel gets better results than running one.

Nobody has hired anybody.

The payroll hasn't changed.

But the engineering organization has quietly acquired a new variable cost.

Gartner identifies exactly this problem: consumption-based AI coding changes software-development costs from predictable seat licenses toward variable workloads, while enterprises often lack sufficient visibility to forecast token expenditure or connect that expenditure with business outcomes. It also points to oversized context windows and poorly governed autonomous workflows as sources of unnecessary consumption.

And that, I think, is where **AI coding starts becoming a FinOps problem.**

## Don't Solve It by Giving Everyone Fewer Tokens

The obvious corporate response is to establish limits.

It may also be the wrong first response.

If an engineer consumes $1,000 of AI compute and saves $10,000 worth of engineering effort or gets a commercially important product out two weeks earlier, celebrating a reduction in the $1,000 bill would be peculiar accounting.

Equally, spending $1,000 so that an agent can endlessly rewrite a low-value internal script isn't innovation merely because an LLM was involved.

So the question shouldn't be:

> **How do we minimize token consumption?**

It should be:

> **How do we minimize useless token consumption while making valuable token consumption economically unconstrained?**

Those are very different objectives.

We already understand this principle elsewhere. Nobody congratulates a factory merely for consuming less electricity if production falls by half. Nobody judges a cloud platform entirely by how few CPU-hours it consumes. Efficiency means understanding the relationship between the resource consumed and the useful work produced.

Tokens ought to be treated the same way.

## From Token Addiction to Token Economics

Maybe what enterprises need, then, isn't token rationing but **token economics**.

Use the cheapest capable model for the job. Don't send an entire repository when four files provide sufficient context. Cache what doesn't need to be reasoned through again. Don't use an expensive reasoning model to rename variables. Let agents work autonomously where autonomy actually creates leverage, and introduce checkpoints where they have a tendency to wander.

But above all, measure the outcome.

Did cycle time fall?

Did releases become faster?

Did engineers resolve defects sooner?

Did quality improve?

Did one engineer accomplish work that previously required three?

Did we produce noticeably more code but approximately the same amount of useful software?

That last question may be the uncomfortable one.

Enterprise research already frames AI investment increasingly in terms of total cost of ownership rather than the sticker price of individual AI tools, because production economics include infrastructure, lifecycle, maintenance, organizational, and engineering costs that aren't apparent during experimentation.

## The Real Productivity Revolution

I suspect we are still thinking about AI coding too much as a faster keyboard.

The deeper change may be that the scarce resource in software engineering is shifting.

When producing code was expensive, we optimized programmer time.

When producing code becomes extraordinarily cheap, **deciding what code ought to exist** becomes more important. Architecture matters more. Verification matters more. Judgment matters more. Knowing when the agent is going down a rabbit hole matters more.

And restraint may become an engineering skill.

The great AI programmer may not be the person who knows how to make an agent generate the most code. It may be the person who knows when another 500,000 tokens will genuinely move the problem forward, and when to tell the machine, rather sensibly:

> *That's enough. I understand the problem now.*

There is a charming irony in all this.

For decades we have tried to make computers cheaper so programmers could accomplish more. Now we have built machines capable of producing astonishing amounts of programming work, and enterprises may have to teach programmers to think about the cost of computation again.

Not because tokens are precious.

Because **attention, judgment, money, and useful software still are.**
