---
path: "/redesigning-in-the-open"
date: "2017-09-06"
title: "Redesigning in the Open"
subtitle: "This site is in flux! Learn more about the state of disarray"
---

If you're viewing this, there's a good chance most of the site looks broken. Like many before, I've decided to perform much of this site's redesign in the open!

## Static Site Generation

The previous version of the site ran on [Jekyll](http://jekyllrb.com). While Jekyll has a great community and ecosystem these days, running the site on a Ruby based framework didn't feel right. Instead, I'm overengineering the whole situation with [GatsbyJS](https://www.gatsbyjs.org/). Gatsby uses React to build static-ish pages, makes use of graphql, and a whole bunch of other tech that I use in various side projects. It's young, but the community is really great. More to come on Gatsby as the site progresses.

## Hosting

For now, the initial hosting will be handled by [Netlify](https://www.netlify.com/). I love the type of product they are building, and the recent change to the free tier is really appealing. Source can be found on [Github](https://github.com/markmichon/markmichon.com).

## More to Come

With many drastic changes to the core of the site, and an overhaul of content, expect new articles and projects based around the technology that goes into the site. So far, here's a light todo list of items to come:

- Serviceworker integration with more PWA and offline features
- Design finalization
- Details on deployment workflow
- Possible integration with micro.blog
- Further perf optimizations