---
title: Be careful mixing ch units with webfonts
description: The ch unit is an easy way to restrict an element's measure in CSS, but it can have unintended layout shift problems when combined with webfonts.
permalink: /ch-unit-webfont-layout-shift/
date: "2024-06-16"
---
In a recent refactor of this site, I changed the main article wrapper from a *rem-based* max-width to a *ch-based* max-width. As webfonts loaded, the page shifted—dramatically. Not the usual *flicker* you might expect, but a pronounced shift. Roll the tape:

<figure>
  <video loop muted controls playsinline autoplay>
    <source src="/assets/videos/01-pre-changes.mp4" type="video/mp4" />
    <source src="/assets/videos/01-pre-changes.webm" type="video/webm" />
  </video>
  <figcaption>Loading layout shift caused by setting the content wrapper to ch instead of rem otherwise.
  </figcaption>
</figure>

*Disgusting*. Users on fast connections won't see this, but that doesn't mean it isn't a problem.

## The promise of `ch` for paragraph widths

I first came across the `ch` unit in an old [Piccalilli](https://piccalil.li/blog) article about [CUBE CSS](https://cube.fyi/)[^1]. I suspect the collection of people excited by the idea of defining content width by character count is pretty small, but for a person like me that regularly used a text expansion snippet to output *lorem ipsum* with indicators for 60 and 75 characters, it was an amazing discovery. Former students of my design courses may recognize this concept of restricting measure, or line length, from [The Elements of Typographic Style](https://archive.org/details/elementsoftypogr0000brin).

## Fallback font layout shift, and why `ch` makes it worse

For brevity, I'll skip over the historical context for how we got to the current state of loading webfonts. [web.dev](https://web.dev/articles/optimize-webfont-loading?hl=en) has a good overview on font loading strategies.

I'm choosing the default "swap" behavior that prioritizes loading content with a fallback system font instead of waiting for the webfont to load. *This will always cause some layout shift*, and that's okay.

The width, as measured by the browser, of a font's zero character (0) [determines the `ch` unit](https://drafts.csswg.org/css-values/#ch). This means it differs between fonts, but that's kind of the point. If you're aiming somewhere between a range of characters, you can be confident that the resulting width will be close.

It's not perfect, but it's pretty good as long as you don't expect the font to swap. Unfortunately, I do, so it won't work for the main article width.

Here's what the swap looks like with the width set to a `rem` unit instead.

<figure>
  <video loop muted controls playsinline autoplay>
    <source src="/assets/videos/02-change-ch-values-to-px-optimized.mp4" type="video/mp4" />
    <source src="/assets/videos/02-change-ch-values-to-px-optimized.webm" type="video/webm" />
  </video>
  <figcaption>Layout shift with rem width units.
  </figcaption>
</figure>

That's much better. I'd classify this as "good enough" for any resource-constrained case.

## Keep `ch` out of your base styles

Unless you only intend to use system fonts[^2] on all projects, I'd advise against including `ch` units in your baseline styles. It's an incredible feature, and can make *designing in the browser* much easier, but isn't ideal for cases where you need consistent widths.


Further reading on usage and dangers of `ch`:
- [Use of ch unit considered inappropriate (in certain circumstances)](https://clagnut.com/blog/2432)
- [What is the CSS ‘ch’ Unit?](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/)

## Bonus: Additional strategies to minimize font-face fallback shift

To further reduce how webfonts shift as they load in, create an altered "copy" of the user's local fallback font. In my case, I use *Georgia* as a fallback and modify its sizing with the [`size-adjust` property](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust).

```css
@font-face {
	font-family: "Fallback";
	size-adjust: 105.5;
	src: local("Georgia");
}
```

This code defines a *Fallback* family, based on Georgia, and scales it to be 105.5% of the standard Georgia sizing. The sizing comes from some trial and error[^3].

I can then include the *Fallback* family name immediately after my webfont. I include my full serif family value in a custom property for ease of use. For example:

```css
--font-serif: "Webfont name", "Fallback", serif;
```

Be cautious with varied weights and styles. A bold weight will cause different `size-adjust` values than a normal weight. In practice, you may end up with multiple fallbacks with different `size-adjust` values to compensate, for example:

```css
@font-face {
	font-family: "Fallback";
	size-adjust: 105.5%;
	src: local("Georgia");

}

@font-face {
	font-family: "Fallback-Bold";
	size-adjust: 97.5%;
	src: local("Georgia");
}
```

Here is the outcome of fallbacks combined with the earlier changes from `ch` to `rem`.

<figure>
  <video loop muted controls playsinline autoplay>
    <source src="/assets/videos/03-add-fallbacks-optimized.mp4" type="video/mp4" />
    <source src="/assets/videos/03-add-fallbacks-optimized.webm" type="video/webm" />
  </video>
  <figcaption>Loading layout shift with rem width units and custom fallback fonts.
  </figcaption>
</figure>

I wouldn't classify this as better or worse than the previous change, but I'm including it for reference. It may work out better for some font combinations than others.

[^1]: This has since changed and modern versions use dynamic values through [clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).
[^2]: In truth, most sites should avoid custom fonts to reduce total bandwidth. This may end up being the direction this site takes, as aggressive subsetting and other techniques aren't cutting the size down enough for my liking.
[^3]: You can build a quick test app by overlaying the fallback over the webfont, with absolute positioning, then adjusting the size incrementally.