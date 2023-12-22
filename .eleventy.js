import yaml from "js-yaml"
import markdownIt from "markdown-it"
import markdownItEmoji from "markdown-it-emoji"
import markdownItAnchor from "markdown-it-anchor"
import markdownItHighlightJS from "markdown-it-highlightjs"
import markdownItFootnote from "markdown-it-footnote"
import hljs from "highlight.js"
import pluginRss from "@11ty/eleventy-plugin-rss"
import { EleventyRenderPlugin } from "@11ty/eleventy"
const CONTENT_GLOBS = {
  articles: "src/articles/**/**.md",
};

const mdSetup = markdownIt({ html: true, typographer: true })
  .use(markdownItEmoji)
  .use(markdownItAnchor)
  .use(markdownItFootnote)
  .use(markdownItHighlightJS, { inline: true, hljs });

// override horizontal rules to display fancy animation
mdSetup.renderer.rules.hr = (tokens, idx, options, env, self) => {
  return `
  <hr class="sr-only" />
  <canvas class="wa hr" aria-hidden="true"></canvas>
  `;
};

export default async function(eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy({ "./src/_assets/*.css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "./src/_assets/*.svg": "assets/img" });
  eleventyConfig.addPassthroughCopy({
    "./src/_assets/fonts/*": "assets/fonts",
  });
  eleventyConfig.addPassthroughCopy({
    "./src/_assets/*.js": "assets/js",
  });
  eleventyConfig.addPassthroughCopy({
    "./src/articles/images/*": "assets/img",
  });
  eleventyConfig.addPassthroughCopy({ "./src/_assets/*.txt": "/" });
  eleventyConfig.addWatchTarget("./src/_assets/main.css");
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.setLibrary("md", mdSetup);

  eleventyConfig.addFilter("cleanDate", (contents) => {
    let date = new Date(contents);
    let month = date.toLocaleString("default", { month: "short" });
    let day = date.toLocaleString("default", { day: "2-digit" });
    // let day = date.getDate()
    let year = date.getFullYear();
    return `${month.toUpperCase()} ${day} ${year}`;
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      output: "dist",
      input: "src",
      includes: "_includes",
      data: "data",
    },
  };
};
