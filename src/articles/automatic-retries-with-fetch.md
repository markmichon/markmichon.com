---
permalink: /automatic-retries-with-fetch/
date: "2019-06-13"
title: "Adding Automatic Retries to Fetch"
categories: ["javascript"]
description: How to add automatic retries to fetch without any libraries.
---

> This article was first published in 2019. Many of the concepts still apply, and support for Fetch is widespread.

The browser's built-in [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) fits nicely into modern workflows, even with a variety of alternatives that aim to solve the same problem. One missing feature that can come in handy when making requests is the ability to retry the requests, either on specific response status codes or on generic failures. Since fetch returns a promise we can extend its functionality with minimal overhead, and abstract out some common functionality into a new function.

---

Let us start by taking some common fetch code and making it the returned value of a new function. We'll call this new function `fetchPlus`.

```javascript
const fetchPlus = (url, options = {}) =>
  fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res.status)
    })
    .catch((error) => console.error(error.message))
```

Nothing new here. We are using the arrow function's implicit return to return a fetch that handles a basic error use case. Now let us add some retry functionality.

```javascript
const fetchPlus = (url, options = {}, retries) =>
  fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      if (retries > 0) {
        return fetchPlus(url, options, retries - 1)
      }
      throw new Error(res.status)
    })
    .catch((error) => console.error(error.message))
```

So what changed? We are passing in a new `retries` argument. This is our configuration argument and could be expanded into an object that contains more conditions like specific status codes. Next, we check that the retry count is greater than zero.

The key change is the addition of a recursive return of the original `fetchPlus`. The same arguments are passed in, but now with one fewer retry. This combined with the conditional block around the call prevents an infinite loop.

Now if we call `fetchPlus` with at least 1 retry, it will recall itself when a failure occurs. By returning `fetchPlus` within itself, we keep all the benefits of the original returned promise and can use it just as we would fetch. For example:

```javascript
fetchPlus("https://randomuser.me/api", {}, 1).then((res) => {
  console.log(res) // Parsed json response from the api
})
```

---

With the basic concept in mind, you can expand it into a customizable fetch replacement that still works with polyfills and provides a familiar interface.
