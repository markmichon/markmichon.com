---
permalink: /variable-fonts-gatsby/
date: "2019-08-29"
title: "Adding Variable Fonts to a Gatsby Site"
description: "Using CSS-in-JS to manage variable fonts in a Gatsby site"
templateEngineOverride: "md"
og: "variable-fonts-in-gatsby.jpg"
---

> This article was first published in 2019 and this site no longer runs on Gatsby.

Variable fonts are a great way to add flexibility to a design, while *potentially* also reducing the overhead of loading multiple variations of a typeface. If you're new to Gatsby, or haven't spent much time dealing with assets in webpack, it can be quite difficult to know where to begin. In this article we will go over the key techniques to get started.

For an overview on variable font usage in general, take a look at [MDN's guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide). This site is using the increasingly popular [Inter](https://rsms.me/inter/) and [Source Serif Pro](https://github.com/adobe-fonts/source-serif-pro)'s variable version.

In the examples below I'm using [Emotion's](https://emotion.sh) global syntax, but you can define the `@fontface` declaration wherever best suits your project. On this site, all global styles are applied in the core layout wrapper component.

Do keep in mind that if you're using a CSS-in-JS library that makes use of the object syntax rather than the template literal syntax, you may run into problems when using multiple `@fontface` rules. See the section at the end of this article for ways to deal with this problem.

---

Gatsby has two approaches to dealing with static files. You can store the file in the `static` folder which will end up copied to `public` after build, or you can use the [preferred import method](https://www.gatsbyjs.org/docs/importing-assets-into-files/).

Let's look at both scenarios, as depending on your needs you may find one more approachable than the other.

## Approach 1: Importing with Webpack

To import with webpack, we can treat the font file as we would any other import. Here it is given a name, any will work, and then included in the fontface declaration.

```js
import sourceSerif from "./SourceSerifVariable-Roman.ttf.woff2"

const globals = css`
  @font-face {
    font-family: "source-serif-var";
    src: url(${sourceSerif}) format("truetype");
    font-weight: 100 800;
  }

  html {
    font-family: "source-serif-var", serif;
  }
`
```

Notice that we use the named import as the URL for the font-face source. The `font-family` name you define in the `@font-face` rule will be the name you use to reference the family throughout your CSS.

## Approach 2: Using the static folder

The [static folder](https://www.gatsbyjs.org/docs/static-folder) method may be useful if you prefer a more traditional asset setup. In this scenario, your variable font is placed in the `static` folder at the root. Gatsby copies it over to the public folder, which makes the final path relative to the root of your main index file.

```js
const globals = css`
  @font-face {
    font-family: "source-serif-var";
    src: url("./SourceSerifVariable-Roman.ttf.woff2") format("truetype");
    font-weight: 100 800;
  }

  html {
    font-family: "source-serif-var", serif;
  }
`
```

The key different here is the `src` location. While the file may be in the `static` folder, we are referencing its final location in the `@font-face` `src` declaration.

## Multiple @font-face declarations and object styles

If you're using object styles, perhaps with something like [Theme UI](https://theme-ui.com/), you will quickly find that trying to include multiple `@font-face` declarations causes problems, as the keys override one another. One solution is to use two `<Global>` components.

```jsx
<Layout>
  <Global
    styles={{
      "@font-face": {
        fontFamily: "Inter",
        src: `url(${inter}) format('woff2')`,
        fontWeight: "100 900",
      },
    }}
  />
  <Global
    styles={{
      "@font-face": {
        fontFamily: "source-serif-var",
        src: `url(${sourceSerif}) format('truetype')`,
        fontWeight: "100 800",
      },
    }}
  />

  {children}
</Layout>
```

This method prevents any rule conflicts, and still gives you access to both families.

While variable fonts still require a some extra work and occasionally extra overhead, if your site is making use of multiple weights or styles you may find that including them saves resources. To explore variable fonts further, have a look at the following resources:

<!-- vale mm.spelling = NO -->

- [Getting started with variable fonts - Richard Rutter](https://medium.com/@clagnut/get-started-with-variable-fonts-c055fd73ecd7)
<!-- vale mm.spelling = YES -->
- [v-fonts](https://v-fonts.com/)
- [Variable Fonts: The Future of (Web) Type](https://typographica.org/on-typography/variable-fonts/)
