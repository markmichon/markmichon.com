import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Logo from "./Logo"
import theme from "../styles/theme"
import { paddingSetup } from "../styles/utils"

const columnMQ = (direciton, start, end, push) => `
  @media (min-width:800px) {
    padding-${side}: ${breakpoints[0]};
  }
  @media (min-width:1000px) {
    padding-${side}: ${breakpoints[1]};
  }
  `

const Landing = styled.div`
  display: grid;
  padding-top: 1rem;
  grid-template-columns: minmax(1rem, 10vw) repeat(8, 1fr) minmax(1rem, 10vw);
  grid-template-rows: auto;
  grid-row-gap: 1rem;
`
const Name = styled.h1`
  font-weight: normal;
  font-family: ${p => p.theme.sansSerif};
  font-size: ${p => p.theme.sizes.xl};
  line-height: 1;
`

const Tagline = styled.h2`
  font-weight: 800;
  font-family: ${theme.sansSerif};
  font-size: ${p => p.theme.sizes.xxl};
  line-height: 1;
  margin-top: ${p => p.theme.halfUnit};
  color: hsl(211, 13%, 35%);
`

const Bar = styled.div`
  background-color: ${p => (p.backgroundColor ? p.backgroundColor : "inherit")};
  color: ${p => (p.color ? p.color : "inherit")};
  padding: 1rem;
  transform: ${p =>
    p.direction && p.direction === "start"
      ? "translate(-1rem, 0)"
      : "translate(1rem, 0)"};

  grid-column-start: ${p => (p.start ? p.start : "")};
  grid-column-end: ${p => (p.end ? p.end : "11")};
`
// set up MQs

const SubTagline = styled.h3`
  font-weight: bold;
  font-family: ${theme.fancy};
  font-size: ${p => p.theme.sizes.l};
  line-height: 1;
  font-style: italic;
  margin-top: ${p => p.theme.halfUnit};
`

const IntroAbout = Bar.extend`
  font-weight: normal;
  font-size: ${p => p.theme.sizes.s};
  font-family: ${p => p.theme.sansSerif};
  ${paddingSetup("left")};

  grid-column-start: ${p => (p.start ? p.start : "")};
  grid-column-end: ${p => (p.end ? p.end : "11")};
`
const OffsetBlock = Bar.extend`
  padding: 0.5rem;
  position: relative;
  font-size: 1.25rem;

  > * {
    transform: translate(-1.5rem, -1.5rem);
  }
`

// const NavBlock = styled.nav`
//   padding: 1rem 2rem;
//   margin-bottom: 1rem;
//   background-color: ${theme.dark};
//   width: 60%;
// `

const NavBlock = Bar.withComponent("nav")

const Intro = () => (
  <Landing>
    <NavBlock backgroundColor={theme.dark} start="6">
      <Logo color={theme.light} width="4rem" />
    </NavBlock>
    <OffsetBlock
      backgroundColor="hsl(45, 25%, 95%)"
      color="hsl(210, 11%, 50%)"
      start="2"
    >
      <Name>Mark Michon</Name>
      <Tagline>Building a better web.</Tagline>
      <SubTagline>Designer, Developer, Teacher</SubTagline>
      {/* <Link to={"about"}>Learn more</Link> */}
    </OffsetBlock>
    <IntroAbout
      backgroundColor="hsl(211, 13%, 35%)"
      color={theme.light}
      start="1"
      end="5"
      direction="start"
    >
      <p>
        Designer and Developer with a penchant for teaching. I focus on building
        intuitive, accessible, and performant user experiences.
      </p>
    </IntroAbout>
  </Landing>
)

export default Intro
