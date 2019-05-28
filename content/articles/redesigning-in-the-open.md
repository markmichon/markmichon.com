---
path: /tech-stack
date: '2019-05-28'
title: 'Redesigning in the Open(ish)'
---

It has been roughly 6 years since this site last underwent a redesign. Long before that it acted as a place to experiment with everything great about the web. It's time to bring that spirit back, and it all begins with a more open iteration process.

There's a good chance if you're viewing this now, something is broken. Feel free to [leave an issue on GitHub](https://github.com/markmichon/markmichon.com) if you spot a bug.

## Static Site Generation

The previous version of the site ran on [Jekyll](http://jekyllrb.com). While Jekyll has a great community and ecosystem these days (my old Jekyll article still receives traffic), running the site on a Ruby based framework didn't feel right. Instead, I'm over-engineering the whole thing with [GatsbyJS](https://www.gatsbyjs.org/). Gatsby uses React to build static-ish pages, makes use of graphql, and a whole bunch of other tech that I use in various side projects. When this revamp started Gatsby was a young tool, but it has since grown and the the community is great, welcoming place.

## Hosting

For the better part of 15 years, some form of my personal site has been hosted on [A Small Orange](https://asmallorange.com). It has been so long that I'm on a special legacy plan that by today's standards would be laughable. For now, the initial hosting will be handled by [Netlify](https://www.netlify.com/). I love the type of product they are building, and the keep hiring amazing people to further improve the developer experience.

## More to Come

With many drastic changes to the core of the site, and an overhaul of content, expect new articles and projects based around the technology that goes into the site. So far, here's a light todo list of items to come:

- Serviceworker integration with more PWA and offline features
- Design finalization
- Details on deployment workflow
- Possible integration with micro.blog
- Further perf optimizations
- Design System
