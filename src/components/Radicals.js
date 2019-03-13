import styled from 'styled-components'
import {
  space,
  color,
  position,
  maxWidth,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  display,
  fontFamily,
  fontSize,
  width,
  textAlign,
  letterSpacing,
  lineHeight,
  fontWeight,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
} from 'styled-system'

export const Box = styled.div`
  display: block;
  ${space}
  ${color}
  ${position}
  ${maxWidth}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${flex}

`
Box.displayName = 'Box'

export const Text = styled.p`
  ${display}
  ${space}
  ${fontFamily}
  ${width}
  ${textAlign}
  ${letterSpacing}
  ${lineHeight}

`

export const Heading = styled.h1`
  display: block;
  font-weight: 700;
  margin: 0;
  ${fontFamily}
  ${color}
  ${space}
  ${width}
  ${maxWidth}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${fontSize}
  ${letterSpacing}

`
Heading.displayName = 'Heading'

export const Grid = styled.div`
  display: grid;
  ${gridGap}
  ${gridRowGap}
  ${gridColumnGap}
  ${gridColumn}
  ${gridRow}
  ${gridAutoFlow}
  ${gridAutoRows}
  ${gridAutoColumns}
  ${gridTemplateRows}

`
