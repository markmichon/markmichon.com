import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Heading = styled.h2`
font-family: ${p => p.theme.sansSerif};
font-weight: bold;
position: relative;
line-height: 1;
margin-top: 0;
padding-top: 1em;
padding-bottom: 1em;
padding-right: .5rem;
display: block;

&::before {
  content: '${props => props.title}';
  position: absolute;
  top: .25em;
  font-size: 2em;
  font-family: ${p => p.theme.serif};
  font-weight: 800;
  font-style: italic;
  line-height: 1;
  z-index: 0;
  color: hsla(213, 12%, 43%, .10);

}
`

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: inherit;

  &::after {
    content: "";
    display: block;
    background-color: #e0e0e0;
    height: 1px;
    position: absolute;
    right: 0;
    left: 0;
    top: 2rem;
    z-index: 0;
  }

  * {
    background-color: inherit;
    z-index: 1;
  }
`

const ViewMore = styled(Link)`
  padding-left: 0.5rem;
`

SectionHeading.Heading = Heading
SectionHeading.ViewMore = ViewMore

export default SectionHeading
