const color = {
  brand: "hsl(352, 68%, 50%)",
  brand: ["hsl(352, 68%, 59%)", "hsl(352, 68%, 50%)", "hsl(352, 68%, 41%)"],
  background: "#fff",
  text: "#333",
  black: "hsl(0, 0%, 20%)",
  white: "hsl(0,0%,100%)",
  dark: "hsl(220, 2%, 26%)",
  medium: "hsl(0, 0%, 40%)",
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
    xxxl: "3rem",
    xxl: "2.25rem",
    xl: "1.5rem",
    l: "1.25rem",
    m: "1rem",
    s: ".875rem",
    xs: ".75rem",
    xxs: ".5rem"
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
