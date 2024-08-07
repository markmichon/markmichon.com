---
permalink: "/advanced-custom-mdx-components/"
date: "2019-05-15"
title: "Custom Footnotes with MDX in Gatsby"
description: "Using the MDX wrapper key to customize your MDX output"
---

> This article was first published in 2019 and this site no longer runs on Gatsby.

MDX offers a pretty straightforward way to handle replacing the default HTML elements via the `MDXProvider` component in `@mdx-js/react`, but what happens when you need to replace an element that isn't in the default component list or one that is unique in some way?

This scenario may come up when using a remark plugin or supported features, such as footnotes[^1]. See the final example implementation [on codesandbox](https://codesandbox.io/s/custommdxfootnotes-83mqi), or follow along below.

## Using the wrapper component

MDXProvider offers a special [wrapper key](https://mdxjs.com/getting-started#using-the-wrapper) that is primarily used to modify the wrapper around the markdown content. If you dive into the [wrapper customization guide](https://mdxjs.com/guides/wrapper-customization), you'll find that it also provides access to the MDX children components.

We'll use this functionality to iterate over the children, find the `div` with a class of `footnotes` (the default from gatsby-mdx), and replace it with a custom component. The component object to be passed to the provider ends up looking like the following:

```js
//
const components = {
  wrapper: ({ children, ...props }) => {
    // updatedChildren becomes our new list of children, including any modifications
    const updatedChildren = children.map((child) => {
      if (child.props.className === "footnotes") {
        // Since we only have one element that will ever match this
        // the key doesn't matter, but react will yell without a key.
        return <Footnotes key={1} {...child.props} />
      }
      return child
    })
    return <>{updatedChildren}</>
  },
}
```

We can then customize the `Footnotes` however we like to style and interact with the footnotes that mdx is bringing in.

---

Since this is Gatsby we can put the provider into our layout component that handles mdx-specific content, or it can be added to `gatsby-ssr` and `gatsby-browser` to wrap every page using the `wrapRootElement` or `wrapPageElement` hooks.

```js
// gatsby-browser.js

export const wrapPageElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
```

Here's our final, working example on [codesandbox](https://codesandbox.io/s/custommdxfootnotes-83mqi).

## Additional Reading

- [mdxjs](http://mdxjs.com/)
- [gatsby-mdx](http://gatsby-mdx.netlify.com/)

[^1]: remark wraps footnotes in an outer `div` with a class of `footnotes`.
