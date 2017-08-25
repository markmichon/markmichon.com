---
date: "2013-05-09T00:00:00Z"
keywords: css, html, tutorial
meta_description: Learn how to create a scroll-aware header, similar to that found
  here at markmichon.com
subtitle: How to create a scroll-dependant main nav, like that found on this site.
title: Creating a Scroll Dependent Navigation
path: /scroll-aware-header/
categories: ['development']
---

Fixed headers are popular in web design these days. They offer an extra layer of visual depth, as well as providing a way for the user to easily explore a site without returning to the top of a page. Unfortunately, there are a few drawbacks to this technique. Here is a [live demo](http://codepen.io/markmichon/full/yicGB), and here is the full, [coded version on codepen](http://codepen.io/markmichon/pen/yicGB).

##A bit of theory and UX
Depending on the height of your header and the height of the users browser, valuable screen real estate may be sacrificed in order for your design to accommodate the fixed header. Additionally, depending on the type of content you have, a constant bar across the top of the viewport might draw focus away. This is especially noticeable with starker contrasts and text-heavy pages.

When creating the scroll-dependent version, I set out to try and anticipate when the user might want to check the navigation. Generally, we find that when a user begins to scroll back up the page, they are attempting to either return back to a previous portion of the article or a different page of the site. With this in mind, I've decided that by monitoring the upward scroll of the page, we can create a fairly accurate _guess_ that the user wants to go somewhere else.

##Time for Some Code

Let's begin with the basic HTML and CSS:
```html
  <header class="global-header">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>
  ...
```

Adapt this as you like, the key is that we target our header in some way. In this case I use a class called 'global-header'.

```css
  ...
  .global-header {
    width: 100%;
    background-color: #333;
    color: #efefef;
    position:fixed;
    top:0;
    left:0;
    transition: top .2s ease-in;
  }

  .global-header-scrolling {
    top: -4em; /* Height of the header */
  }
  ...
```

A few things to note here. Our global header starts visible. This is to make sure that it exists regardless of any javascript support that may or may not exist, but also to ensure that there isn't a strange flash during page load. I'm using top positioning rather than a height, because I prefer that it slides down rather than grows into view.

The second class, which we haven't seen yet, is going to be applied to the header with javascript on our scroll event. Here I simply move the top position of the header up 4em. The amount will differ, but the navigation contained in my header currently has a height of 4em. Your mileage may vary, and you could even decide to dynamically determine the height with a bit of JS if you choose to do so.

At this point we have a standard fixed header that follows the user as they scroll up and down the page. Now let us add the javascript. Note that I'm also using a bit of jQuery just to simplifiy the process, but this could also be done with any number of libraries, or even pure javascript if you see fit.

```js
  //Requires JQuery or Zepto
  $(document).ready(function(){

  // Cache Header
  var $header = $('.global-header');

  // Get height of global-header to use later as starting point
  var $hHeight = $header.height();

  // Set initial position to current position on page
  var prevTop = $(window).scrollTop();

  // Scroll event
  $(window).on('scroll', function(e) {
    st = $(this).scrollTop(); // Set scroll location
    if (st > prevTop && st > $hHeight) {
      $header.addClass('global-header-scrolling');
    } else {
      $header.removeClass('global-header-scrolling');
    }
    prevTop = st;
  });

});
```

The comments should be rather straightfoward, but here's what we're doing:

1. capturing our `.global-header` class and its height in variables.
2. Setting an initial scroll value. This will normally be `0`, however if you are landing on the page somewhere that is not the top, this will capture it.
3. Here's the important bits: We have no scroll-direction event in javascript, so we monitor scrolling in any direction. We then capture the scroll position with `scrollTop()` and then compare it against are previously set `prevTop` variable. If the number is greater, we add our `.global-header-scrolling` class to it. If not, we remove it. Finally we set our `prevTop` variable to the new top value.
4. We also use the height value we determined earlier to make sure this doesn't occur at the very top of the page. You can adjust this as you see fit if perhaps you want the effect to only happen after a certain portion of the page.

Our main event is cycling over and over as the page is scrolled, checking to see which direction the user is going. For a complete version of this technique, see [this codepen example](http://codepen.io/markmichon/pen/yicGB).
