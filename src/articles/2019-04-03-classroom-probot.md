---
permalink: '/classroom-probot/'
date: '2019-04-03'
title: 'Powering up GitHub Classroom with Probot'
description: 'Automate low-hanging feedback and default settings'
---

  >This article was first published in 2019 and the information may be out of date.

Managing student work with GitHub offers an opportunity to give software development students practical experience with the platform and provides realistic feedback in a way they will experience in their future career.

GitHub offers a tool, GitHub Classroom, that makes setting up and managing projects for students pretty easy. It works on an org-level and handles basic setup and permissions.

That said, the platform's goals won't always align perfectly with the workflow of individual instructors. A great way around this takes advantage of an open source project, [Probot](https://probot.github.io). See their docs for details on getting set up.

## Automating with Probot

Probot is essentially a framework that wraps the GitHub API, app setup, and webhooks to allow you to run scripts when repo or org related events fire.

Let's take a look at their default example:

```js
module.exports = app => {
  app.on('issues.opened', async context => {
    const params = context.issure({
      body: 'Hello World!',
    })
    await context.github.issues.createComment(params)
  })
}
```

With only a few lines of code, we now have a framework to respond to new issues. Probot offers a directory of many [featured apps](https://probot.github.io/apps/). Checking the source of each will provide some additional insight into many Probot conventions.

## Locking down student repos

For my courses, I require students to submit via a pull request. This allows for code-review style feedback on the PR and allows me to request changes or approve the PR. To stop any accidental pushes to master, the default branch permissions on each repo need to be set.

To handle this we can write a small Probot app to listen for repository imports[^1] and set the desired branch protection rules for the new repo. I suggest going through their [Getting Started documentation](https://github.com/probot/probot) if you haven't already.

```js
module.exports = app => {
  // Watch for the import
  app.on('repository_import', async context => {
    const { repository } = context.payload
    // Confirm the success of the of the import
    if (context.payload.status !== 'success') {
      return null
    }
    // Send a PUT request to the correct endpoint
    return context.github.request({
      baseUrl: 'https://api.github.com',
      url: `/repos/${repository.owner.login}/${
        repository.name
      }/branches/master/protection`,
      method: 'PUT',
      headers: {
        accept: 'application/vnd.github.luke-cage-preview+json',
      },
      // Send the appropriate branch rules
      required_status_checks: null,
      enforce_admins: null,
      restrictions: null,
      required_pull_request_reviews: {
        required_approving_review_count: 1,
      },
    })
  })
}
```



This example hard-codes in our configuration, but it is also common to include config files inside the repo or organization itself to allow more user-level reconfigurability.

[^1]: GitHub Classroom fires off a handful of hooks on repo creation, but `repository_import` is the final stage of the process.
