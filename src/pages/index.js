import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components"
import Logo from "../components/Logo"
import colors from "../styles/colors"
import typography from "../styles/typography"
import SectionHeading from "../components/SectionHeading"

const IntroSection = styled.section`
  padding: 1rem;
  background-color: ${colors.dark};
  margin-bottom: 1rem;
`

const Section = styled.section`
  background-color: ${props => (props.dark ? colors.dark : colors.background)};
  color: ${props => (props.dark ? colors.light : colors.copy)};
  padding: 1rem;
`

const Name = styled.h1`
  font-weight: bold;
  font-family: ${typography.sansSerif};

  font-size: ${typography.sizes[1]};
`
const IntroAbout = styled.p`
  font-weight: normal;
  // font-size: ${typography.sizes[5]};
  font-family: ${typography.sansSerif};
  max-width: 30rem;
  
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <main>
      <Section>
        <Name>Mark Michon</Name>
        <IntroAbout>
          I'm a design-focused developer with a penchant for teaching. I focus
          on building accessible and performant user experiences.
        </IntroAbout>
      </Section>
      <Section>
        <SectionHeading title="Articles">Selected Articles</SectionHeading>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div key={post.id}>
                <h3>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p>
                  {post.frontmatter.subtitle}
                </p>
              </div>
            )
          })}
      </Section>
      <Section>
        <SectionHeading title="Projects">Selected Projects</SectionHeading>
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
