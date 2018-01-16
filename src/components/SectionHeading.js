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
  display: inline-block;

  &::before {
    content: '${props => props.title}';
    position: absolute;
    top: 0;
    bottom:0;
    font-size: 3em;
    font-family: ${p => p.theme.sansSerif};
    font-weight: 800;
    line-height: 1;
    z-index: -2;
    color: hsla(213, 12%, 43%, .10);

  }

  ${
  "" /* &::after {
    content: '';
    position:absolute;
    top:0;
    bottom:0;
    left: -1rem;
    right: 0;
    width: 0;
    background-color: hsla(213, 12%, 43%, 1);
    z-index: -1;
    transition: width .5s ease-in-out;
    transform: skew(10deg);
  }
  &:hover:after {
    width: calc(100% + 2rem); */
}
  }
`

export default SectionHeading
