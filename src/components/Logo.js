import React from 'react'
/* eslint-disable */
import styled from '@emotion/styled'
import IconBase from './Icon'
import theme from '../styles/theme'
const LogoContainer = styled.div`
  width: ${p => (p.width ? p.width + 'px' : '3rem')};
`

const LogoSVG = ({ color = theme.colors.black, size }) => (
  <IconBase viewBox="0 0 109 59.5" fill={color} width={size}>
    <polygon
      id="m1"
      points="0,0 0,59.5 11,59.5 11,24 30.5,43.9 50,24 50,59.5 60,59.5 60,0 30,29.8 "
    />
    <polygon
      id="m2"
      points="79.4,29.9 66,16.2 66,30.3 79.8,44 100,24 100,59.5 109,59.5 109,0 "
    />
    <title>Mark Michon Logo</title>
  </IconBase>
)

const Logo = props => <LogoSVG {...props} />

export default Logo
