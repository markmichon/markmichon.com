---
date: "2013-03-29T00:00:00Z"
subtitle: A handful of problems & a few solid upsides to the static site generator.
title: Initial impressions of Jekyll
path: /initial-impressions-of-jekyll/
categories: ['development']
---

This site is powered, in part, by [Jekyll](http://jekyllrb.com). The semi-static, blog-aware, site-building platform that works similarly to many blogging systems except everything happens locally before being pushed to the server as static files. It is intended as a blogging platform for hackers and in may way this is true; it feels like it was made by a developer for developers. 

I chose Jekyll for a handful of reasons (more on those later), but the primary one was that many people in the community such as [Harry Roberts](http://csswizardry.com), [Dave Gamache](http://davegamache.com), and [Paul Stamatiou](http://paulstamatiou.com/) have switched to it in the past year or so. These three create great work, and their adoption of the tool convinced me that the flaws I perceived may not be so bad.

This is not an article about how to use Jekyll. There are plenty of those out there and I may write one eventually, but this is an analysis on the system from the standpoint of a designer & front-end dev.

##Learning not to hate
I like trying new platforms and languages. I find it makes me not only a better developer, but a better designer. I learned the web, as many of my generation, by experimenting and failing. Deciding on Jekyll was an exercise in learning not to hate a system that is the opposite of everything I stand for as a designer. _Simple_ means something different to me than it does to the Jekyll community. 

There are certainly aspects that are simple, such as creating posts and deploying to a server. There are other aspects that are cumbersome, like troubleshooting and finding resources. Simple is relative in this case.

##YAML, templating, and skipping the bs
This may be the single greatest aspect of the semi-static movement. The ability to create your own conventions by merely defining them in the front-matter of the post is great. A quick glance at the [template tag doc](http://codex.wordpress.org/Template_Tags) for Wordpress makes me die a little inside. Not to mention the half dozen pages I traversed to find it. This is where the simple keyword in Jekyll makes sense. I’m building the page, let me do what I want and get out of the way.

The templating in Jekyll really excels for front-end devs. It is very close to the JS templating systems that keep cropping up these days, and even for those with only html/css experience, the learning curve is low and void of any strange, interruptive syntax combinations.

##Starting from scratch
Many “How to use Jekyll” articles talk about how it lacks a starting point. To some extent I agree with them, but having installed wordpress again after years of not using it, I realized that a starting point isn’t always helpful, and can be incredibly overwhelming for someone who has full intentions of building a site rather than using a pre-made theme. 

The boilerplate approach would certainly help Jekyll out a bit. In fact this tends to be the recommendation by most users. Copy someone’s repo, and tweak it.

##The classic fault of developer-designed apps
This one is a bit of a stereotype, but Jekyll falls right into it. The demographic is developers, hackers, and coders; this shouldn’t mean that error messaging needn’t exist. A simple problem such as an extra space after the triple-dash in YAML’s front-matter causes the entire page not to render, with no mention of the problem. This seems like such a silly oversight that could have been avoided.

Github’s Mac app has been known for similar problems with error messaging, so I often wonder if this is an oversight or a common part of the company’s approach to product (Jekyll’s creator is one of Github’s founders. I by no means intend to connect the two but I couldn’t help but notice this similarity).

##Fragmentation
Due in part to the name, and in part to the lack of aggregation, it can be difficult to find proper resources. There are some phenomenal articles written by people like [Paul Stamatiou](http://paulstamatiou.com/how-to-wordpress-to-jekyll) and [Andrew Munsell](http://www.andrewmunsell.com/tutorials/jekyll-by-example/), but information is scattered and niche features are often found by browsing the source code of a person’s setup on github (if they provide it).

The other issue comes with the nature of github and the encouragement to fork Jekyll. I love the concept, but this is complex for non-rubyists and seems counter-intuitive to a plugin culture.  There are also interesting projects like [Octopress](http://octopress.org/), but these look to be really focused on creating a <abbr title=“Wordpress”>WP</abbr> style environment with pre-built templates and that generic _bootstrapped_ feel. They also seem to add an extra level of structure, rather than modifying that which is found in Jekyll.

##Accepting the obvious
I chose Jekyll because I wanted to avoid php on a site where it truly shouldn’t be necessary, and it certainly delivers in that respect. Wordpress has become the Walmart of CMS, and many paid alternatives look a bit cumbersome.

The harsh truth is that I’m not sure a great, simple to template, low barrier of entry CMS really exists anymore. I also chose it knowing that the flat-file, markdown format allows for perhaps the easiest migration from one system to another, and perhaps one day that may happen.

I have a feeling the likes of Kirby or Statamic might be the best of both worlds, but I hope as Jekyll’s development continues it will progress into a more cohesive system.