import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components"
import Intro from "../components/Intro"

import SectionHeading from "../components/SectionHeading"
import { ArticleList, ArticleListItem } from "../components/SectionList"
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
        <ArticleList>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <ArticleListItem key={post.id}>
                <h3>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p>{post.frontmatter.subtitle}</p>
              </ArticleListItem>
            ))}
        </ArticleList>
      </Section>
      <Section>
        <SectionHeading title="Projects">Selected Projects</SectionHeading>
        <p>
          Coming soon! For now, have a look at{" "}
          <a href="https://github.com/markmichon" title="Mark Michon on GitHub">
            GitHub
          </a>
        </p>
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
