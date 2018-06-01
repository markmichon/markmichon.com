import React from 'react'
import styled from 'styled-components'
import IconBase from './Icon'

const AlertContainer = styled.div`
  display: inline-block;
  background-color: hsl(38, 99%, 70%);
  padding: 0.5rem 1rem;
  color: #000;
  position: absolute;
  right: 1rem;
  top: 1rem;
`

const Icon = props => (
  <IconBase
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-width="6"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12" y2="17" />
  </IconBase>
)

const Alert = props => (
  <AlertContainer>
    <Icon {...props} />
    <p>This is under construction</p>
  </AlertContainer>
)

export default Alert
