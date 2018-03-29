import React from "react"
import styled from "styled-components"
import Link from "../components/Links"
import Logo from "./Logo"
import theme from "../styles/theme"
import { paddingSetup } from "../styles/utils"

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
  color: ${theme.color.light};
  background-color: ${theme.color.brand};
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
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

const About = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: ${theme.breakpoints.m}) {
    max-width: 70%;
  }
`

const NavBlock = styled.nav`
  background-color: ${theme.dark};
  position: relative;
  display: inline-flex;
  flex-direction: row-reverse;
  width: auto;
  padding: 1rem 1rem 1rem 2rem;
  margin-left: 0;
  transition: padding 200ms cubic-bezier(0.31, -0.44, 0.33, 1.63);

  &:hover {
    padding-left: 4rem;
  }

  &::before {
    content: "";
    height: 100%;
    width: 1rem;
    left: -1rem;
    top: 0;
    position: absolute;
    background-color: inherit;
  }
`

const Intro = () => (
  <Landing>
    <NavBlock>
      <Logo color={theme.light} width="3rem" />
    </NavBlock>
    <OffsetBlock>
      <Name>Mark Michon</Name>
      <Tagline>Let&#1370;s build a better web.</Tagline>
      <SubTagline>Designer, Developer, Teacher</SubTagline>
      <About>
        <p>
          Hi, I&#1370;m a software designer working in education. Code can be
          found on <Link to="https://github.com/markmichon">GitHub</Link>, short
          thoughts on <Link to="https://twitter.com/markmichon">Twitter</Link>,
          and adventures on{" "}
          <Link to="https://instagram.com/markmichon">Instagram</Link>. Have an
          interesting opportunity you’d like to discuss? Say Hello!
        </p>
      </About>
    </OffsetBlock>
  </Landing>
)

export default Intro
