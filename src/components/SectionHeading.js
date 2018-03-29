import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"

const Heading = styled.h2`
  font-family: ${theme.sansSerif};
  font-weight: 800;
  line-height: 1;
  padding: 1rem 0 0;
  display: block;
  color: ${theme.black};
  margin-bottom:0;
  width: 100%;

  @media (min-width:${theme.breakpoints.m}) {
    &::before {
      content: '${props => props.title}';
      position: absolute;
      top: 1.5em;
      font-size:2.5em;
      font-family: ${theme.serif};
      font-weight: 400;
      font-style: italic;
      line-height: 1;
      transform: rotate(-90deg);
      left: -2.2em;
      color: hsl(42, 36%, 95%);
      @media (min-width:${theme.breakpoints.l}) {
      font-size: 3em;
      }
    }
  }
`

const SectionHeading = styled.div`
  margin-bottom: 0.5rem;
`
const Details = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${theme.sizes.xs};
`

SectionHeading.Heading = Heading
SectionHeading.Details = Details

export default SectionHeading
