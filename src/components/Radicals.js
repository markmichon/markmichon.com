import system from "system-components"

export const Box = system(
  {
    is: "div",
    display: "block"
  },
  "space",
  "color",
  "position",
  "maxWidth",
  // flexbox
  "alignItems",
  "alignContent",
  "justifyContent",
  "flexWrap",
  "flexDirection",
  "flex"
)
