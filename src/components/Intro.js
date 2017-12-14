import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Name = styled.h1`
  font-weight: bold;
  font-family: ${p => p.theme.sansSerif};
  font-size: ${p => p.theme.sizes.xl};
  line-height: 1;
`

const Tagline = styled.h2`
  font-weight: bold;
  font-family: ${p => p.theme.sansSerif};
  font-size: ${p => p.theme.sizes.xxxl};
  line-height: 1;
  margin-top: ${p => p.theme.halfUnit};
`

const IntroAbout = styled.p`
  font-weight: normal;
  font-size: ${p => p.theme.sizes.m};
  font-family: ${p => p.theme.sansSerif};
`

const Landing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
`
const Intro = () => (
  <Landing>
    <div>
      <Name>Mark Michon</Name>
      <Tagline>Building a better web.</Tagline>
      <IntroAbout>
        Designer and Developer with a penchant for teaching. I focus on building
        intuitive, accessible, and performant user experiences. You can find me
        on <a href="https://twitter.com/markmichon">Twitter</a> and{" "}
        <a href="https://github.com/markmichon">GitHub</a>.
      </IntroAbout>
      <Link to={"about"}>Learn more</Link>
    </div>
  </Landing>
)

export default Intro
