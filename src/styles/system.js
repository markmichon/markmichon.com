const breakpoints = ["40em", "52em", "64em"]
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]
const fonts = {
  0: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  sans:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  serif: '"ff-meta-serif-web-pro", Georgia, "Times New Roman", serif',
  mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
}
const space = [0, 4, 8, 16, 32, 64, 128, 256]
const maxWidths = ["25%", "50%", "60%"]
const colors = {
  brand: ["hsl(352, 68%, 59%)", "hsl(352, 68%, 50%)", "hsl(352, 68%, 41%)"],
  black: ["hsl(0,0%,0%)", "hsl(0,0%,10%)", "hsl(0,0%,20%)"],
  white: "hsl(0,0%,100%)",
  grey: ["hsl(210, 7%, 58%)"]
}
const fontWeights = {
  normal: 400,
  bold: 700
}
const radii = [0, 2, 4]

export default {
  fonts,
  fontWeights,
  fontSizes,
  breakpoints,
  space,

  colors,
  radii
}
