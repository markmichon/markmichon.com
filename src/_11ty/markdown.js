import markdownIt from "markdown-it"
import markdownItEmoji from "markdown-it-emoji"
import markdownItAnchor from "markdown-it-anchor"
import markdownItHighlightJS from "markdown-it-highlightjs"
import markdownItFootnote from "markdown-it-footnote"
import hljs from "highlight.js"

export default function (config) {
  const mdSetup = markdownIt({ html: true, typographer: true })
    .use(markdownItEmoji)
    .use(markdownItAnchor)
    .use(markdownItFootnote)
    .use(markdownItHighlightJS, { inline: true, hljs })

  // override horizontal rules to display fancy animation
  mdSetup.renderer.rules.hr = (tokens, idx, options, env, self) => {
    return `
  <hr class="sr-only" />
  <canvas class="wa hr" aria-hidden="true"></canvas>
  `
  }
  config.setLibrary("md", mdSetup)
}
