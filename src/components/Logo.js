import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  width: 3rem;
  margin: 0 auto;
`

const LogoSVG = props =>
  <svg
    version="1.1"
    className="site-logo"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 109 59.5"
    xmlSpace="preserve"
    fill={props.color}
  >
    <polygon
      id="m2"
      points="79.4,29.9 66,16.2 66,30.3 79.8,44 100,24 100,59.5 109,59.5 109,0 "
    />
    <polygon
      id="m1"
      points="0,0 0,59.5 11,59.5 11,24 30.5,43.9 50,24 50,59.5 60,59.5 60,0 30,29.8 "
    />
  </svg>

const Logo = props =>
  <LogoContainer>
    <LogoSVG {...props} />
  </LogoContainer>

export default Logo
