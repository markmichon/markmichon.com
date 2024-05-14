/** @param {import("@11ty/eleventy/src/UserConfig").default} config */
export default function (config) {
  config.addFilter("cleanDate", (contents) => {
    let date = new Date(contents);
    let month = date.toLocaleString("default", { month: "short" });
    let day = date.toLocaleString("default", { day: "2-digit" });
    // let day = date.getDate()
    let year = date.getFullYear();
    return `${month.toUpperCase()} ${day} ${year}`;
  });

  config.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });
}
