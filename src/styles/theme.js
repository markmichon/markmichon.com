const color = {
  brand: "hsl(357, 92%, 36%)",
  background: "#fff",
  text: "#333",
  // dark: "hsl(211, 15%, 28%)",
  black: "hsl(0, 0%, 20%)",
  dark: "hsl(220, 2%, 26%)",
  medium: "hsl(209, 11%, 50%)",
  light: "hsla(210, 20%, 95%, 1.00)",
  link: "hsla(163, 71%, 35%, 1.00)"
}

const breakpoints = {
  m: "800px",
  l: "1000px"
}

const typography = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  serif: '"ff-meta-serif-web-pro", Georgia, "Times New Roman", serif',
  fancy: '"ff-meta-serif-web-pro", Georgia, serif',
  sizes: {
    xxxl: "3em",
    xxl: "2.25em",
    xl: "1.5em",
    l: "1.25em",
    m: "1em",
    s: ".875em",
    xs: ".75em"
  },
  measure: "36em"
}

const spacing = {
  baseUnit: "1rem",
  halfUnit: ".5rem",
  doubleUnit: "2rem"
}

const scale = {}

const theme = {
  ...color,
  ...typography,
  ...spacing,
  color: color,
  breakpoints: breakpoints
}

export default theme
