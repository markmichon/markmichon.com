---
title: "Custom horizontal rules with markdown-it and Eleventy"
description: "By overriding markdown-it's default rendering, we can replace the horizontal rule with any element"
permalink: /custom-hr-markdown/
tags: ["11ty"]
date: "2023-11-28"
---

When I migrated this site over from Gatsby, MDX, and React to [Eleventy](https://11ty.dev) and markdown I needed solutions for my [custom MDX components](/advanced-custom-mdx-components/). One that I wasn't expecting to pose a problem was my `.fancy` horizontal rule.

## Horizontal rules in markdown

I'm a heavy *emdash* user, so it's no surprise that I styled its content-wide cousin, the horizontal rule. Look, they aren't related in any way other than appearance, but humor me. Throughout this site—at the time of this writing—you'll encounter the pulsing *wa*[^1] blob in a few places. Here's a static screenshot in case the theme has changed.

![Screenshot of HR graphic](/assets/img/wa-screenshot.jpg "Screenshot of horizontal rule on this site")

As much as I love the effect as a hero image on the homepage, it brings me much more joy as an `<hr />` replacement. In the previous build of the site, MDX would interpret the `---` markdown syntax and render out a `<canvas>` element for the animation instead.

Eleventy documents [how to substitute your own library](https://www.11ty.dev/docs/languages/markdown/#optional-set-your-own-library-instance) to process markdown. I'm using `markdown-it`, as it is well supported and commonly referenced in the 11ty community.

## Overriding the renderer

It isn't clear from the readme, but the [architecture](https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md) documentation on GitHub helps explain how the `renderer` method works. If you're using Eleventy, your markdown setup in `.eleventy.js` may look similar to the following:

```js
// ...
// Import markdown-it
const markdownIt = require("markdown-it")

const mdSetup = markdownIt()
// any additional plugins here

module.exports = function (eleventyConfig) {
  // set the markdown renderer to markdown-it
  eleventyConfig.setLibrary("md", mdSetup)
}
```

The library's `renderer` method lets you target each individual element type. For `hr`, you don't need knowledge of the inner workings of `markdown-it`, so it acts as a nice gateway into the process. Here's what the next step looks like:

```js
//..
const mdSetup = markdownIt()

mdSetup.renderer.rules.hr = (tokens, idx, options, env, self) => {
  // return new HTML
}

// ...
```

We're overriding the library's rendering function for all `hr` tags. We don't need any of the arguments, as we aren't using any data beyond the existence of horizontal rule in the markdown. Let's return a new string of HTML.

```js
mdSetup.renderer.rules.hr = (tokens, idx, options, env, self) => {
  return `
  <hr class="sr-only" />
  <canvas class="wa hr" aria-hidden="true"></canvas>
  `
}
```

Here I'm returning an `<hr />` with my screen-reader-only CSS class, along with a `<canvas>` element with the classes I use to target and style the element. `aria-hidden=true` ensures that screen readers don't try to interpret the element.

Eleventy will now render this new HTML instead of `<hr />`. This only applies to markdown passed through the renderer itself. As an example, the `markdown-it-footnote` plugin creates a horizontal rule before the footnotes with its own custom HTML rather than ours.

Here is the full code:

```js
const markdownIt = require("markdown-it")

const mdSetup = markdownIt()

mdSetup.renderer.rules.hr = (tokens, idx, options, env, self) => {
  return `
  <hr class="sr-only" />
  <canvas class="wa hr" aria-hidden="true"></canvas>
  `
}

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", mdSetup)
}
```

## Further explorations

Overriding markdown rendering is the entrypoint for responsive images, custom code blocks, and endless customization. You may ask: *Why not use a shortcode instead?* The answer is future-proofing. By keeping the content as markdown, we prevent any lock-in to Eleventy or the renderer. Worst case scenario, we lose our nice horizontal rule visual, but semantically the element remains.

<!-- vale off -->

[^1]: The theme of the site was heavily inspired by [Julia Hasting's beautiful cover design](https://juliahasting.com/WA-The-Essence-of-Japanese-Design) for "Wa: The Essence of Japanese Design".
