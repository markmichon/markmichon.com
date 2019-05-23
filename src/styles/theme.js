import { getSans, getMono, getSerif } from '@markmichon/system-font-stacks'

const colors = {
  text: 'hsl(0,0%, 40%)',
  white: '#fff',
  heading: '#333',
  black: 'hsl(212, 12%, 25%)',
  body: 'hsl(0,0, 40%)',
  brand: 'hsl(352, 68%, 50%)',
  brands: {
    d: 'hsl(352, 68%, 40%)',
    l: 'hsl(352, 68%, 60%)',
  },
  grey: 'hsl(212, 10%, 40%)',
  greys: {
    d: 'hsl(212, 10%, 22%)',
    l: 'hsl(212, 10%, 70%)',
  },
}

const fonts = {
  normal: getSans(),
  mono: getMono(),
  serif: getSerif('source-serif-var'),
}

const textStyles = {
  serifHeading: {
    fontFamily: fonts.serif,
    letterSpacing: '1px',
    fontWeight: 800,
  },
}

const theme = {
  colors,
  breakpoints: ['30rem', '50rem', '62.5rem'],
  fonts,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80],
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
  measure: '36em',
  fontWeights: {
    light: 100,
    normal: 400,
    bold: 800,
  },
  textStyles,
}

// Aliases
theme.fontSizes.tiny = '.875em'
theme.fontSizes.small = '1em'
theme.fontSizes.body = '1.25em'
theme.fontSizes.large = '1.5em'

export default theme
