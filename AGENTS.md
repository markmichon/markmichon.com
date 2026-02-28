# AGENTS.md

Coding agent guidelines for markmichon.com - an Eleventy-based static site.

## Build/Test Commands

```bash
# Install dependencies (use pnpm, not npm)
pnpm install

# Development server
pnpm start
# or: npx @11ty/eleventy --serve

# Production build
pnpm run build
# or: ELEVENTY_ENV=production npx @11ty/eleventy

# Clean build directory
pnpm run clean

# Markdown linting
npx markdownlint-cli "src/**/*.md"

# Prose linting with Vale
vale src/

# Format with Prettier
npx prettier --write "src/**/*.{js,njk,css,md}"
```

**Note:** No test suite currently exists. Tests are not required for changes.

## Project Structure

- `src/` - Source files
  - `articles/` - Blog posts (Markdown with YAML frontmatter)
  - `pages/` - Static pages (Nunjucks .njk or Markdown .md)
  - `_includes/` - Templates (Nunjucks .njk)
  - `_assets/` - Static assets (CSS, JS, fonts, images)
  - `_11ty/` - Eleventy configuration (plugins, filters, markdown config)
  - `data/` - Global data files (YAML/JSON)
- `dist/` - Build output (generated, gitignored)

## Code Style

### JavaScript

- Use ES modules (`import`/`export`), not CommonJS
- Node.js 22+ supported (type: "module" in package.json)
- Semicolons: **disabled** (Prettier config)
- Indentation: 2 spaces, no tabs
- Quote style: Prefer double quotes in JS, YAML, JSON

### Naming Conventions

- Files: kebab-case for multi-word files (e.g., `opengraph-images.js`)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE for true constants only
- Components: PascalCase when using WebC (rare)

### Imports

```javascript
// Standard order:
// 1. Built-in Node.js modules
// 2. npm dependencies
// 3. Local project files (use relative paths with .js extension)

import yaml from "js-yaml"
import pluginRss from "@11ty/eleventy-plugin-rss"
import filters from "./src/_11ty/filters.js"
```

### Markdown

- Use ATX-style headers (`## Heading`, not underlined)
- Emphasis with asterisks: `*italic*` and `**bold**`
- Lists with dashes or asterisks (be consistent)
- Fenced code blocks with language identifiers
- Frontmatter uses YAML format with quoted string values
- Custom horizontal rules use `---` (converted to canvas animation)

### Nunjucks Templates

- Use 2-space indentation
- Variables: `{{ variable | filter }}`
- Tags: `{% for item in items %}`
- Filters applied with pipe syntax
- Always use `| safe` filter only on trusted content

## Error Handling

- Eleventy builds fail on errors; handle async operations with try/catch
- Validate data files (YAML syntax errors will crash the build)
- Check for undefined values in templates before using filters

## Content Guidelines

### Articles (src/articles/)

Required frontmatter:

```yaml
---
title: "Article Title"
description: "Brief description for SEO"
date: "YYYY-MM-DD" # or "git Created"
---
```

Optional frontmatter:

- `permalink`: Custom URL path (defaults to `/{{ title | slugify }}/`)
- `og`: OpenGraph image filename (in `src/_assets/og/`)
- `templateEngineOverride: md`: Force Markdown-only rendering

### Pages (src/pages/)

Can be `.md` or `.njk`. Use `pages.11tydata.js` for shared defaults.

## Important Patterns

### Adding Static Assets

Use `config.addPassthroughCopy()` in `.eleventy.js`:

```javascript
config.addPassthroughCopy({ "./src/_assets/*.css": "assets/css" })
```

### Creating Filters

Add to `src/_11ty/filters.js`:

```javascript
config.addFilter("filterName", (input) => {
  return transformed
})
```

### Data Files

Place in `src/data/` as `.js`, `.json`, or `.yaml`. Available globally via filename.

## Linting Configuration

### Markdown (.markdownlint.yaml)

- Line length (MD013): disabled
- Inline HTML (MD033): disabled
- Emphasis style (MD049/050): use asterisks
- Link fragments (MD051): disabled (for anchors)

### Vale (.vale.ini)

- Min alert level: warning
- Custom styles in `.vale/styles/mm/`
- Ignores Nunjucks syntax: `{% %}`, `{{ }}`

### Prettier (.prettierrc)

- Tab width: 2
- No semicolons
- No tabs (spaces only)

## Deployment

GitHub Actions deploys to production on push to `main`:

1. Installs dependencies with pnpm
2. Builds with `pnpm run build`
3. Deploys `dist/` folder via SSH

## Common Tasks

### Add new article

1. Create file in `src/articles/article-slug.md`
2. Add frontmatter with title, description, date
3. Content written in Markdown
4. Optional: Generate OG image and place in `src/_assets/og/`

### Add new page

1. Create file in `src/pages/page-name.md` or `.njk`
2. Add frontmatter with layout (usually `base.njk`)
3. For `.md`: set `templateEngineOverride: md` if needed

### Add new filter

1. Export filter function from `src/_11ty/filters.js`
2. Use in templates as `{{ value | filterName }}`

## Environment

- Node.js 22+
- Package manager: pnpm (do not commit package-lock.json)
- Build output: `dist/`
- Dev server: http://localhost:8080
