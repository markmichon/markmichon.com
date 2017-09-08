import React from 'react'
import styled from 'styled-components'
import typography from '../styles/typography'
const SectionHeading = styled.h2`
  font-family: ${typography.sansSerif};
  font-weight: bold;
  position: relative;
  line-height: 1;
  padding-top: 1em;
  padding-bottom: 1em;

  &:before {
    content: '${props => props.title}';
    position: absolute;
    top: 0;
    bottom:0;
    font-size: 3em;
    font-family: ${typography.sansSerif};
    font-weight: 800;
    line-height: 1;
    color: hsla(213, 12%, 43%, .10);

  }
`

export default SectionHeading
