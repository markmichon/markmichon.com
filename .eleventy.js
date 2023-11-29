const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItHighlightJS = require("markdown-it-highlightjs");
const markdownItFootnote = require("markdown-it-footnote");
const hljs = require("highlight.js/lib/core");
// const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");
// const eleventyImagePlugin = require("@11ty/eleventy-img");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
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

module.exports = function (eleventyConfig) {
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
  eleventyConfig.setLibrary("md", mdSetup);

  eleventyConfig.addFilter("cleanDate", (contents) => {
    let date = new Date(contents);
    let month = date.toLocaleString("default", { month: "short" });
    let day = date.toLocaleString("default", { day: "2-digit" });
    // let day = date.getDate()
    let year = date.getFullYear();
    return `${month.toUpperCase()} ${day} ${year}`;
  });

  // Images
  // WebC
  // eleventyConfig.addPlugin(eleventyWebcPlugin, {
  //   components: [
  //     // Add as a global WebC component
  //     "npm:@11ty/eleventy-img/*.webc",
  //   ],
  // });

  // Image plugin
  // eleventyConfig.addPlugin(eleventyImagePlugin, {
  //   // Set global default options
  //   formats: ["webp", "jpeg"],
  //   urlPath: "/assets/img/",
  //   outputDir: "/assets/img/",
  //   // Notably `outputDir` is resolved automatically
  //   // to the project output directory

  //   defaultAttributes: {
  //     loading: "lazy",
  //     decoding: "async",
  //   },
  // });

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
