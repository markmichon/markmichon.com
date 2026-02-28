---
title: "Dispatch workflows in a PR"
date: "2026-02-28"
tags: ["til"]
layout: article.njk
---

I often find myself in situations where it would be useful to dispatch a new workflow from a pull request.

PRs will run workflows if the criteria matches, but you cannot manually trigger a `dispatch_workflow` event from a PR if the workflow file from a PR [like you can with existing workflows](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow). Except that you can, with the [GitHub CLI](https://cli.github.com/).

```sh
# Run a workflow from a PR
gh workflow run <workflow_file_name> --ref <branch_name>
# Run a workflow with specific inputs
gh workflow run <workflow_file_name> --ref <branch_name> --inputs key=value
```

Full details are available in the [workflow run documentation](https://cli.github.com/manual/gh_workflow_run).
