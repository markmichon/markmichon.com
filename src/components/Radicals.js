import system from 'system-components'

export const Box = system(
  {
    is: 'div',
    display: 'block',
  },
  'space',
  'color',
  'position',
  'maxWidth',
  // flexbox
  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex'
)

Box.displayName = 'Box'

export const Text = system(
  {
    is: 'p',
    mb: 2,
    color: 'black',
    fontSize: 2,
  },
  'display',
  'space',
  'fontFamily',
  'width',
  'textAlign',
  'letterSpacing',
  'lineHeight'
)

export const Heading = system(
  {
    is: 'h1',
    display: 'block',
    fontWeight: '700',
    fontSize: [3, 4, 5],
    m: 0,
  },
  'fontFamily',
  'color',
  'space',
  'width',
  'maxWidth',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing'
)
Heading.displayName = 'Heading'

export const Grid = system(
  {
    is: 'div',
    display: 'grid',
    gridGap: [3],
  },
  'space',
  'maxWidth',
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoRows',
  'gridAutoColumns',
  'gridTemplateRows',
  'gridTemplateColumns'
)
