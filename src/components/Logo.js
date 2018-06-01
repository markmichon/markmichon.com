import React from 'react'
/* eslint-disable */
import styled from "styled-components"
import IconBase from "./Icon"
const LogoContainer = styled.div`
  width: ${p => (p.width ? p.width + "px" : "3rem")};
`

const LogoSVG = props => (
  <IconBase viewBox="0 0 109 59.5" fill={props.color} width={props.size}>
    <polygon
      id="m1"
      points="0,0 0,59.5 11,59.5 11,24 30.5,43.9 50,24 50,59.5 60,59.5 60,0 30,29.8 "
    />
    <polygon
      id="m2"
      points="79.4,29.9 66,16.2 66,30.3 79.8,44 100,24 100,59.5 109,59.5 109,0 "
    />
    <title>Mark Michon</title>
  </IconBase>
)

const Logo = props => <LogoSVG {...props} />

export default Logo
