import { getSans, getMono, getSerif } from '@markmichon/system-font-stacks'

//

const families = {
  sans: getSans(),
  mono: getMono(),
  serif: getSerif('source-serif-var'),
}

// const textStyles = {
//   serifHeading: {
//     fontFamily: fonts.serif,
//     letterSpacing: '1px',
//     fontWeight: 800,
//   },
// }
// legacy
// const theme = {
//   colors,
//   breakpoints: ['30rem', '50rem', '62.5rem'],
//   fonts,
//   fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80],
//   space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
//   measure: '36em',
//   fontWeights: {
//     light: 100,
//     normal: 400,
//     bold: 800,
//   },
//   textStyles,
// }

// // Aliases
// theme.fontSizes.tiny = '.875em'
// theme.fontSizes.small = '1em'
// theme.fontSizes.body = '1.25em'
// theme.fontSizes.large = '1.5em'

// export default theme

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 0,
  mb: 2,
}

// Legacy
// const colors = {
//   text: 'hsl(0,0%, 40%)',
//   white: '#fff',
//   heading: '#333',
//   black: 'hsl(212, 12%, 25%)',
//   body: 'hsl(0,0, 40%)',
//   brand: 'hsl(352, 68%, 50%)',
//   brands: {
//     d: 'hsl(352, 68%, 40%)',
//     l: 'hsl(352, 68%, 60%)',
//   },
// grey: 'hsl(212, 10%, 40%)',
//   greys: {
//     d: 'hsl(212, 10%, 22%)',
//     l: 'hsl(212, 10%, 70%)',
//   },
// }
const colors = {
  black: 'hsl(0, 0%, 20%)',
  white: '#fff',
  textLight: 'hsl(212,81%,20%)',
  text: 'hsl(0, 0%, 20%)',
  background: '#fff',
  primary: 'hsl(352, 68%, 50%)',
  primaryDark: 'hsl(352, 68%, 40%)',
  primaryLight: 'hsl(352, 68%, 60%)',
  secondary: 'hsl(352, 68%, 60%)',
  accent: 'hsl(212, 10%, 25%)',
  muted: 'hsl(212,30%,90%)',
  warning: 'hsl(49, 84%, 63%)',
  danger: 'hsl(10, 80%, 60%)',
  backgroundFar: 'hsl(40, 36%, 95%)',
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48]
fontSizes.body = fontSizes[2]

const sizes = ['100%', '36rem', '70rem']
const breakpoints = ['40em', '56em', '64em']
const space = [0, 4, 8, 16, 32, 64]

const scale = ['.675em', '1em', '1.25em', '1.5em', '2em']

scale.small = scale[0]
scale.regular = scale[1]
scale.large = scale[2]

space.base = space[2]
space.compact = space[1]

const radii = [0, 2, 4, 8]

const links = {
  unstyled: {
    fontWeight: 'bold',
    color: colors.primary,

    '&:hover': {
      color: colors.secondary,
    },
  },
}

const buttons = {
  primary: {
    // color: colors.white,
    // backgroundColor: colors.primary,
  },
  secondary: {
    color: colors.textLight,
    backgroundColor: colors.muted,
  },
  warning: {
    color: colors.textLight,
    backgroundColor: colors.warning,
  },
  danger: {
    color: colors.textLight,
    backgroundColor: colors.danger,
  },
}

// export const defaults = {
//   button: {
//     p: 2,
//     backgroundColor: 'primary',
//     color: 'white',
//     fontWeight: 400,
//     lineHeight: 1,
//     borderRadius: 2,
//   },
//   heading: {
//     fontWeight: 600,
//     lineHeight: 1,
//     mb: 2,
//   },
// }

export const breakpointStrings = breakpoints.map(
  bp => `@media (min-width: ${bp})`
)

export default {
  colors,
  fontSizes,
  fonts: {
    body: families.sans,
    heading: families.serif,
    monospace: families.mono,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    light: 100,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    extra: 1.7,
    '1': 1,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    tight: '1px',
  },
  space,
  breakpoints,
  radii,
  buttons,
  sizes,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 3,
    },
    h3: {
      ...heading,
      fontSize: 2,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    p: {
      lineHeight: 'body',
      fontSize: 2,
      mb: 3,
      fontFamily: 'heading',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    inline: {
      fontFamily: 'monospace',
      backgroundColor: 'muted',
      color: 'white',
      py: 1,
      px: 2,
      display: 'inline-block',
    },
    blockquote: {
      fontStyle: 'italic',
      borderLeftStyle: 'solid',
      borderLeftColor: 'primary',
      borderLeftWidth: 1,
    },
    img: {
      maxWidth: '100%',
    },
  },
}
