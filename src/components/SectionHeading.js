import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import theme from "../styles/theme"
import { paddingSetup } from "../styles/utils"

// const SectionHeading = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: relative;
//   background-color: inherit;

//   &::after {
//     content: "";
//     display: block;
//     background-color: #e0e0e0;
//     height: 1px;
//     position: absolute;
//     right: 0;
//     left: 0;
//     top: 2rem;
//     z-index: 0;
//   }

//   * {
//     background-color: inherit;
//     z-index: 1;
//   }
// `
const Heading = styled.h2`
  font-family: ${theme.sansSerif};
  font-weight: 800;
  line-height: 1;
  padding: 1rem 2rem;
  display: block;
  position:relative;
  color: hsl(211, 13%, 35%);
  width: auto;
  margin-bottom: .5rem;
  z-index:1;
  overflow:hidden;
  ${paddingSetup("left")};

&::before {
  content: '${props => props.title}';
  position: absolute;
  top: 0;
  right:1rem;
  font-size:2.5em;
  font-family: ${theme.serif};
  font-weight: 400;
  font-style: italic;
  line-height: 1;
  z-index: -1;
  color: hsl(42, 36%, 95%);

  @media (min-width:800px) {
    
  }
  @media (min-width:1000px) {
  top: -.1em;
  font-size: 3em;

  }
}
`

const SectionHeading = styled.div`
  display: flex;
`

const ViewMore = styled(Link)`
  padding-left: 0.5rem;
`

SectionHeading.Heading = Heading
SectionHeading.ViewMore = ViewMore

export default SectionHeading
