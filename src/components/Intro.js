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
  padding-top: 1rem;
`
const Name = styled.h1`
  font-weight: normal;
  font-family: ${p => p.theme.sansSerif};
  font-size: ${p => p.theme.sizes.l};
  line-height: 1;
`

const Tagline = styled.h2`
  font-weight: 800;
  font-family: ${theme.sansSerif};
  font-size: ${theme.sizes.xxl};
  line-height: 1;
  margin-top: ${theme.halfUnit};
  color: hsl(211, 13%, 35%);
  @media (min-width: ${theme.breakpoints.m}) {
    font-size: ${theme.sizes.xxxl};
  }
`
const SubTagline = styled.h3`
  font-weight: bold;
  font-family: ${theme.fancy};
  font-size: ${p => p.theme.sizes.m};
  line-height: 1.5;
  font-style: italic;
  margin-top: ${p => p.theme.halfUnit};
  @media (min-width: ${theme.breakpoints.m}) {
    font-size: ${theme.sizes.l};
  }
`

const IntroAbout = styled.div`
  font-weight: normal;
  font-size: ${p => p.theme.sizes.s};
  font-family: ${p => p.theme.sansSerif};
  z-index: 1;
  @media (min-width: ${theme.breakpoints.m}) {
    padding: 0.25rem 0 0 0;
  }
`
const OffsetBlock = styled.div`
  color: ${theme.black};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  margin-top: 1rem;
  max-width: calc(100% - 2rem);
  @media (min-width: ${theme.breakpoints.m}) {
    max-width: 70%;
  }
`

const NavBlock = styled.nav`
  background-color: ${theme.dark};
  display: inline-flex;
  flex-direction: row-reverse;
  width: auto;
  padding: 1rem 1rem 1rem 2rem;
  margin-left: -1rem;
`

const Intro = () => (
  <Landing>
    <NavBlock>
      <Logo color={theme.light} width="4rem" />
    </NavBlock>
    <OffsetBlock>
      <Name>Mark Michon</Name>
      <Tagline>Building a better web.</Tagline>
      <SubTagline>Designer, Developer, Teacher</SubTagline>
      <IntroAbout>
        <p>
          Hi, I'm a software designer working in education. Code can be found on
          GitHub, short thoughts on Twitter, and adventures on Instagram. Have
          an interesting opportunity you’d like to discuss? Say Hello!
        </p>
      </IntroAbout>
    </OffsetBlock>
  </Landing>
)

export default Intro
