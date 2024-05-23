import subfont from 'subfont'

export default async function (eleventyConfig, options = {}) {
  options = {
    enabled: true,
    ...options,
  };
  if (options.enabled) {
    eleventyConfig.on("eleventy.after", async ({ dir }) => {
      options = Object.assign(
        {
          root: dir.output,
          inPlace: true,
          fallbacks: false,
        },
        options,
      );
      delete options.enabled;
      await subfont({
        ...options,
      });
    });
  }
};
