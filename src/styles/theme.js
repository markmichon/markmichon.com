const color = {
  brand: "hsla(163, 71%, 35%, 1.00)",
  background: "#fff",
  text: "#333",
  dark: "hsl(211, 15%, 28%)",
  light: "hsla(210, 20%, 95%, 1.00)",
  link: "hsla(163, 71%, 35%, 1.00)"
}

const typography = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  serif: '"ff-meta-serif-web-pro", "Georgia", "Times New Roman", serif',
  sizes: {
    xxxl: "3rem",
    xxl: "2.25rem",
    xl: "1.5rem",
    l: "1.25rem",
    m: "1rem",
    s: ".875rem",
    xs: ".75rem"
  },
  measure: "36em"
}

const spacing = {
  baseUnit: "1rem",
  halfUnit: ".5rem",
  doubleUnit: "2rem"
}

const scale = {}

const theme = { ...color, ...typography, ...spacing }

export default theme
