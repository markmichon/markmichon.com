const color = {
  brand: "hsla(213, 12%, 43%, 1.00)",
  copy: "hsl(210, 2%, 20%)",
  background: "hsla(45, 29%, 97%, 1.00)",
  text: "hsl(210, 2%, 20%)",
  dark: "hsl(211, 15%, 28%)",
  light: "hsla(210, 20%, 95%, 1.00)",
  link: "hsla(213, 12%, 43%, 1.00)"
}

const typography = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  serif: '"ff-meta-serif-web-pro", "Georgia", "Times New Roman", serif',
  sizes: {
    "1": "3rem",
    "2": "2.25rem",
    "3": "1.5rem",
    "4": "1.25rem",
    "5": "1rem",
    "6": ".875rem",
    "7": ".75rem"
  }
}

const spacing = {
  baseUnit: "1rem",
  halfUnit: ".5rem",
  doubleUnit: "2rem"
}

const scale = {}

const theme = { ...color, ...typography, ...spacing }

export default theme
