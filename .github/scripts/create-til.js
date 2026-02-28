module.exports = async ({ github, context }) => {
  const title = context.payload.issue.title.replace(/^TIL:\s*/, "")
  const body = context.payload.issue.body
  const date = new Date().toISOString().split("T")[0]
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const filename = `${slug}.md`

  const content = `---
title: "${title}"
date: "${date}"
tags: ["til"]
layout: article.njk
---

${body}
`

  await github.rest.repos.createOrUpdateFileContents({
    owner: context.repo.owner,
    repo: context.repo.repo,
    path: `src/til/${filename}`,
    message: `TIL: ${title}`,
    content: Buffer.from(content).toString("base64"),
    branch: "main",
  })

  await github.rest.issues.createComment({
    issue_number: context.issue.number,
    body: `Published! Created \`src/til/${filename}\` - the site will rebuild shortly.`,
  })

  await github.rest.issues.update({
    issue_number: context.issue.number,
    state: "closed",
  })
}
