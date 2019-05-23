import styled from '@emotion/styled'
import { fontSize, textStyle } from 'styled-system'
import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX_CONTAINER,
  FLEX_ITEM,
  GRID_CONTAINER,
  GRID_ITEM,
} from '../styles/constants'
import theme from '../styles/theme'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  LAYOUT,
  COMMON,
  fontSize
)
Box.displayName = 'Box'

const Text = styled.p({}, TYPOGRAPHY, COMMON, textStyle)

Text.defaultProps = {
  fontFamily: 'normal',
  mb: 3,
  lineHeight: 1.7,
  fontSize: '1em',
}

const Heading = styled.h1({}, COMMON, TYPOGRAPHY, textStyle)

Heading.defaultProps = {
  display: 'block',
  fontSize: [3, 5],
  fontWeight: 'bold',
}

const Flex = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    display: 'flex',
  },
  LAYOUT,
  COMMON,
  FLEX_CONTAINER
)

const Grid = styled.div(
  {
    display: 'grid',
    boxSizing: 'border-box',
    minWidth: 0,
  },
  LAYOUT,
  COMMON,
  GRID_CONTAINER
)

const FullBleed = styled(Box)`
  width: 100%;
  min-width: 60vw;
  margin-left: 50%;
  transform: translateX(-50%);
`

const HR = styled.hr`
  display: block;
  height: 4px;
  width: 5rem;
  margin: 2rem auto;
  background-color: red;
  border: none;
`

export { Heading, Box, Text, Grid, FullBleed, Flex, HR }
