import yaml from "js-yaml"
import pluginRss from "@11ty/eleventy-plugin-rss"
import { EleventyRenderPlugin } from "@11ty/eleventy"
import filters from './src/_11ty/filters.js'
import markdown from "./src/_11ty/markdown.js"
import opengraphImages from "./src/_11ty/plugins/opengraph-images/index.js"
import subfont from 'subfont'
import path from 'path'

const CONTENT_GLOBS = {
  articles: "src/articles/**/**.md",
};


/** @param {import("@11ty/eleventy/src/UserConfig").default} config */
export default async function(config) {
  config.addDataExtension("yaml", (contents) => yaml.load(contents));

  // TODO: simplify if possible
  config.addPassthroughCopy({ "./src/_assets/*.css": "assets/css" });
  config.addPassthroughCopy({ "./src/_assets/*.svg": "assets/img" });
  config.addPassthroughCopy({"./src/_assets/fonts/*": "assets/fonts",});
  config.addPassthroughCopy({"./src/_assets/*.js": "assets/js",});
  config.addPassthroughCopy({"./src/articles/images/*": "assets/img",});
  config.addPassthroughCopy({"./src/_assets/og": "assets/og"})
  config.addPassthroughCopy({ "./src/_assets/*.txt": "/" });

  config.addWatchTarget("./src/_assets/main.css");

  // External plugins
  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(pluginRss);

  // Shortcodes
  config.addShortcode("now", ()=> new Date().getFullYear())

  // Filters
  config.addPlugin(filters);

  // Markdown config
  config.addPlugin(markdown);

  config.addPlugin(opengraphImages)

  config.on(
    "eleventy.after",
    async ({dir,results,runMode,outputMode})=>{
      if (process.env.ELEVENTY_ENV == 'production') {
        console.log("Starting subfont...")
        await subfont({
          root: dir.output,
          inPlace: true,
          inlineCss: true,
          silent: true,
          fallbacks: false,
          text: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          // fontDisplay: "auto",
        })
        console.log("Completed subfont...")
      }
    }
  )

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
