// gatsby-browser.js
exports.onClientEntry = () => {
  if (process.env.NODE_ENV !== "production") {
    require("preact/devtools")
  }
}