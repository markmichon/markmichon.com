import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components"
import Logo from "../components/Logo"

import SectionHeading from "../components/SectionHeading"

const IntroSection = styled.section`
  padding: 1rem;
  background-color: ${p => p.theme.dark};
  margin-bottom: 1rem;
`

const Section = styled.section`
  color: ${p => p.theme.copy};
  padding: ${p => p.theme.halfUnit};
  max-width: ${p => p.theme.measure};
  width: 100%;
  margin: 0 auto;
`

const Name = styled.h1`
  font-weight: bold;
  font-family: ${p => p.theme.sansSerif};
  font-size: ${p => p.theme.sizes.xxxl};
  line-height: 1;
`
const IntroAbout = styled.p`
  font-weight: normal;
  // font-size: ${p => p.theme.sizes.m};
  font-family: ${p => p.theme.sansSerif};
  
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <main>
      <Section>
        <Name>Mark Michon</Name>
        <IntroAbout>
          I'm a design-focused developer with a penchant for teaching. I focus
          on building accessible and performant user experiences.{" "}
          <Link to={"about"}>Learn more</Link>
        </IntroAbout>
      </Section>
      <Section>
        <SectionHeading title="Articles">Selected Articles</SectionHeading>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <div key={post.id}>
              <h3>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <p>{post.frontmatter.subtitle}</p>
            </div>
          ))}
      </Section>
      <Section>
        <SectionHeading title="Projects">Selected Projects</SectionHeading>
        <p>Coming soon...</p>
      </Section>
      <Section>
        <SectionHeading title="Currently">Current Projects</SectionHeading>
        <p>Coming soon...</p>
      </Section>
    </main>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            subtitle
            path
          }
        }
      }
    }
  }
`
