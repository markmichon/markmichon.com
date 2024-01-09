---
title: 'How to publish code in blog posts with Webflow'
permalink: /code-webflow/
description: 'The tedius process of adding code to blog posts in Webflow'
canonical: "https://www.bearer.com/blog/webflow-blog-code-blocks"
date: '2022-04-26'
---

*This article originally appeared on the [Bearer Blog](https://www.bearer.com/blog/webflow-blog-code-blocks) in April of 2022. Details may be out of date.*

Marketing teams and designers have gathered around Webflow in recent years, as it allows teams to collaborate without the need to pull development resources away from your core product. Its CMS features took a while to mature, but when we started our redesign last fall, they were at a level where we decided to roll our blog into our Webflow site.

For most users, the CMS is great. There’s a WYSIWIG rich text editor and some surprisingly cool tricks you can do to link collection items together. I’ll admit it, you can accomplish much more than I expected once you wrap your head around the “Webflow way.”

One area where it really fails is with code block support. *There isn’t any.* I don’t mean it lacks syntax highlighting or customization, I mean they don’t allow you to drop code blocks—like the kind for engineering articles—into the rich text field. So what happens if you want to include code in a blog post? That’s where things get complicated.

## Option 1: Third party embeds

When you can’t do it in-house, you turn to third parties. Fortunately, the embed-a-snippet-of-code landscape is vast. You can use [GitHub Gists](https://gist.github.com/), [CodePen](https://codepen.io/), or the handful of niche-specific services.

The workflow looks like this: Authors need to create individual snippets in the service, then backfill the embed code into the article. This is then dropped into Webflow’s rich text editor the same way you would include a YouTube video: using the editor’s embed block.

![](/assets/img/webflow-embed-editor.gif)

It’s not flawless, but there are some benefits to embedding code snippets with a third party service.

- Fairly customizable, depending on the service.
- You can edit the code without editing the blog post, if needed.
- Code blocks have all the benefits of the third party tool, like revisions and commenting.
- More full-featured than static code snippets. You can embed full apps with some services.

Bearer’s journey from API monitoring tool to [data security product](https://www.bearer.com/why-bearer) means I’ve used the phrase “third party” in the last few years more than I dare count. It also means I know the drawbacks of bringing in an external dependency. Some pitfalls include:

- Your code is now dependent on the uptime of others.
- Trackers aplenty! Many embeds contain tracking cookies, and if you care about user privacy, this is a big roadblock. This also means that ad and tracking blocking tools may block your code snippets.
- It’s time-consuming to maintain and keep organized. Your source of truth is now in Webflow, while the code is in the external provider.
- Extra page weight from loading in the frame’s HTML, CSS, and JavaScript that comes with the embed.

## Option 2: Death by a thousand copy/pastes

The next option is the one we currently use. It involves leveraging the embed WYSIWIG option, just like the previous method, but instead of dropping in the embedded code from a third party we wrap our code in `<pre>` and `<code>` tags.

Pasting code into an embed wrapped in the above tags won’t handle it all. You also need to use a syntax highlighting tool to make the code look nice. We use [highlight.js](https://highlightjs.org/). Our code-oriented pages include highlight’s JavaScript library and the necessary CSS for theme colors. You can include these resources in the template itself to make things easier. Highlight.js attempts to detect the code type, but in many circumstances you’ll need to manually define it as a class on the `<pre>` tag.

![](/assets/img/webflow-embed-editor-2.png)

To make this easier on the admin side, I use a MacOS shortcut that takes in clipboard data and handles the wrapping and manipulation. This is ever evolving, as edge cases arise. You could also write a script to handle this, and if all of your content lives in a repo or text files it might be best to process it all at once.

![](/assets/img/shortcuts-code-wrap.png)

This approach avoids many of the downfalls of option 1, but still isn’t ideal. You have more control over the visual look, and can avoid any external tracking. You still have the added page-bloat from an external highlighting library, but that can’t be avoided without pre-processing each code block further, the way some statically generated sites do. You’ll also need to manage any other quirks, like converting HTML entities, that the code embed services handle for you. I may end up wrapping all the functionality, and highlighting, into a pre-processing script, but that opens up new problems if the code needs to be edited later due to a bug or typo.

We chose this approach primarily from a privacy and control perspective. We’d rather take a slight hit to workflow and features, but avoid the downsides of relying on a third party.

## The big failure of both approaches: preview

Both approaches work in different ways, but they share the same foundation: the “custom embed” element. Webflow handles this element poorly. It feels like it is intended for running code more than embedding external content, and what we’re doing is clearly a hack.

This is most evident by Webflow’s preview. If you’ve used their in-app preview before, you may know that it doesn’t support JavaScript very well. Animations not firing is a pretty common example that designers may run into. For content teams, this also manifests in pages that look like this:

![](/assets/img/webflow-embed-editor-3.png)

Webflow won’t display embeds in previews. Whether for security reasons, or simply compatibility ones, there is no way to view your code-filled blog post without publishing it. We often do this by pushing to our test domain, but this too has a problem. Once you publish a blog post, it can no longer be scheduled for future publication. You can unpublish it to draft form, but the scheduling option goes away. This leaves you with two choices: accept not having a true preview, or accept the inability to schedule posts.

## Where we go from here

There is one potential path forward, and that’s through Webflow’s API. The documentation for which is limited, especially when it comes to uploading images with a collection item. That said, since many of our code-heavy blog posts start out as markdown, it seems feasible that with a little work we could POST the bulk of an article to their API and handle images manually if need be.

Waiting on Webflow feels like a lost cause. They’ve scaled incredibly in recent years, and given that it [sounds like they are happy with the feature as-is](https://webflow.com/feature/custom-code-in-rich-text-elements), I don’t see much improvement in the near future. I didn’t even mention inline code support, which is a problem we’ve still yet to comfortably solve in our blog posts. While the CMS may work well for most teams, it’s hard to recommend Webflow for engineering or developer blogs.
