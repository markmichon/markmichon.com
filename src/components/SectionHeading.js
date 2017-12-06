import React from "react"
import styled from "styled-components"

const SectionHeading = styled.h2`
  font-family: ${p => p.theme.sansSerif};
  font-weight: bold;
  position: relative;
  line-height: 1;
  margin-top: 0;
  padding-top: 1em;
  padding-bottom: 1em;

  &:before {
    content: '${props => props.title}';
    position: absolute;
    top: 0;
    bottom:0;
    font-size: 3em;
    font-family: ${p => p.theme.sansSerif};
    font-weight: 800;
    line-height: 1;
    color: hsla(213, 12%, 43%, .10);

  }
`

export default SectionHeading
