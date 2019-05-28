// Adapted from Primers styled-system setup
// https://github.com/primer/components/blob/master/src/constants.js

import {
  compose,
  style,
  color,
  space,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  textAlign,
  display,
  size,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  overflow,
  verticalAlign,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  flex,
  justifySelf,
  alignSelf,
  order,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} from 'styled-system'

export const COMMON = compose(
  color,
  space
)

export const BORDER = compose(
  borders,
  borderColor,
  boxShadow,
  borderRadius
)

export const TYPOGRAPHY = compose(
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  textAlign
)

export const LAYOUT = compose(
  display,
  size,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  overflow,
  verticalAlign
)

export const POSITION = compose(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
)

export const FLEX_CONTAINER = compose(
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems
)

export const FLEX_ITEM = compose(
  flex,
  justifySelf,
  alignSelf,
  order
)

export const GRID_CONTAINER = compose(
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow
)

export const GRID_ITEM = compose(
  gridColumn,
  gridRow,
  gridArea
)
