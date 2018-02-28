import { createElement } from "react"

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    createElement("link", {
      key: "fonts",
      href: `https://fonts.googleapis.com/css?family=Playfair+Display`,
      rel: "stylesheet"
    })
  ])
}
