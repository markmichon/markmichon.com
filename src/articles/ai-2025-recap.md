---
title: "How AI helped me write docs in 2025"
tags: ["article"]
permalink: /2025-ai-recap/
description: "Some of the tasks AI helped with in 2025, and my hopes for 2026"
date: "2026-01-09"
---

Tech is filled with justifiable fear, grandious claims, and outright mischaracterizations about what AI can and cannot do. This article is about how I used AI in 2025 to work on documentation. Writing, project management, editing, building features. The whole deal.

## Tasks where AI was a valuable partner

### Writing example code faster

As a technical writer, I write a lot of code, but my job isn't to write "app" code. I build test cases, scripts, migrations, small one-off tools, and experiments.

Sometimes these end up as highly simplified examples, sometimes they never leave my machine. AI tools have been great for this. Not because they do anything I couldn't, but because they've made me faster.

### Understanding code

There's something really special about pointing Claude at a cloned repo and asking it to confirm which fields are required by an API. I've come to use this as a substitute for pinging an engineer.

If there's any ambiguity, I'll still do so, but in most cases it finds the right parts of the code for me to confirm assertions.

### Building new features

I mentioned earlier that I *technically* don't write code as part of my job, but sometimes resources are tight.

This year Claude, Cursor, and OpenAI made it easier to build our custom OpenAPI renderer, new deeplinking functionality, and a handful of small fixes that would have taken too long to be worth my focus. I consider these as "better than the alternative" solutions.

They add 5x or higher value to customers, but something that should eventually be replaced or refactored.

### Organizing and prioritizing feedback

I inherited a large backlog of issues when I joined my team. That backlog has reached a manageable state in large part thanks to Claude and Linear's MCP server. I've done things like:

- Group untagged issues by what product area they affect.
- Analyze issues by effort and value to prioritize low-effort, high value items to tackle first.
- Identify duplicates.

### Audit articles for style guide violations and automatically fix them

At Sanity our docs are Sanity documents. I also keep our style guides, templates, and branding guide in our dataset. This lets me prompt statements like: "Evaluate article X according to our documentation style guide and provide feedback."

Claude w/ our Sanity MCP server, or our upcoming Content Agent, will read the document, read the style guide(s), and provide feedback. If it all looks good, I tell it to implement the changes—in a content release, our system's editorial equivalent of a pull request.

I then compare the patched version with the existing version to make sure everything looks good. Keeping the style guide adjacent to our docs articles means anyone in the org can do the same thing—regardless of their tool choice, favorite AI model that week, or technical skill level.

With a finely tuned style guide, which now includes a bit of prompting, I've been able to narrow the edits so that it never tries to write entirely new thoughts.

This frees up my time to do bigger, more valuable content audits that focus on educational clarity rather than syntactical consistency and grammar.

## Tasks where AI hasn't helped

### Drafting brand new documentation content

I know creative fields worry about this, but in my experience LLMs still do a poor job writing content whole-cloth. Documentation might amplify this problem further, as most "new" content needs to be written with little or no pre-existing knowledge.

The closest it comes is preparing drafts of our "Introduction"-style pages, where I can feed it the core articles and it will summarize them based on a pre-defined template. This is okay at best, and can help speed up the process.

Hallucinations still offset most savings as every sentence turns into something that needs fact checking.

### Writing emails, internal docs, etc.

I think we're pretty close to full-on internal comms slop. I'll take mispelled, grammatically flawed messages any day over the businessified documents I've seen generated. Summaries? Have at it. But "write a proposal about X with the following key points." No thanks. Too fake, didn't read. I guess I'll have AI un-sloppify it?

## Tasks I think will happen more in 2026

### Updating articles to accomodate dependency changes

It's common to have how-to guides and tutorials that integrate your product with some third-party tool or library. Those libraries have breaking changes, and unless they're popular enough that you use them often, the likelihood of anyone internally having knowledge of the migration path is slim.

I've done some early testing with updating these types of articles, and the results are mixed.

Here's an example prompt: "This article, X, recieved feedback indicating that the Y library code no longer works. Update the article to take into the latest version"

Then I prompt the AI to follow the updated article's directions to complete the task, using only the information provided and a starter project.

The hit-rate on this is still a bit low, but I think we'll be there this year.

### Agents as test

I think we'll see more "test" frameworks that rely on spending a bunch of tokens rather than writing strict tests. There's one big reason: **we need to track how well these tools understand our content**, because our users are going to them first.

Tools like Kapa already surface this kind of information, but I fully expect the providers themselves (OpenAI, Anthropic) to start selling analytics to organizations. Keyword data meets answer confidence answer scores.

## The industry impact problem

While I'm more bullish than I was this time last year, I'm still left feeling like we're at net-negative as an industry. Let's set aside the mass layoffs, over-ai-ification of product pages, and circular economic fears.

I certainly feel more capable with these tools, but there's obvious skill atrophy happening. It feels bigger than spell-check or the calculator.

I can't help but wonder if we're racing toward a bridge that hasn't been built yet, hoping that someone figures that part out in time.