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
  font-family: ${theme.sansSerif};
  font-size: ${theme.sizes.l};
  line-height: 1;
`

const Tagline = styled.h2`
  font-weight: 800;
  font-family: ${theme.sansSerif};
  font-size: ${theme.sizes.xl};
  line-height: 1;
  margin-top: ${theme.halfUnit};
  color: ${theme.color.white};
  background-color: ${theme.color.brand};
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;

  @media (min-width: ${theme.breakpoints.m}) {
    font-size: ${theme.sizes.xxl};
  }
  @media (min-width: ${theme.breakpoints.l}) {
    font-size: ${theme.sizes.xxxl};
  }
`
const SubTagline = styled.h3`
  font-weight: bold;
  font-family: ${theme.fancy};
  font-size: ${theme.sizes.m};
  line-height: 1.5;
  font-style: italic;
  margin-top: ${theme.halfUnit};
  @media (min-width: ${theme.breakpoints.m}) {
    font-size: ${theme.sizes.l};
  }
`

const About = styled.div`
  font-weight: normal;
  font-size: ${theme.sizes.s};
  font-family: ${theme.sansSerif};
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
  background-color: ${theme.color.black};
  position: relative;
  display: flex;
  width: 10%;
  padding: 1rem 1rem 1rem 2rem;
  margin-left: 0;
  transition: width 200ms ease-in-out;

  &:hover {
    width: 15%;
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
    <OffsetBlock>
      <Tagline>Let&#1370;s build a better web.</Tagline>
      <SubTagline>Designer, Developer, Teacher</SubTagline>
      <About>
        <p>
          Mark Michon is a software designer working in education. Code can be
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
