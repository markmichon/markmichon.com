import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components"
import Intro from "../components/Intro"

import SectionHeading from "../components/SectionHeading"

const Section = styled.section`
  color: ${p => p.theme.copy};
  padding: ${p => p.theme.baseUnit};
  ${"" /* max-width: ${p => p.theme.measure}; */} width: 100%;
  margin: 0 auto;
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <Intro />
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
    </div>
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
