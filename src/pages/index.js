import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import {
  Intro,
  SectionHeading,
  Footer,
  ArticleList,
  Link,
  UnstyledLink
} from "../components"

import theme from "../styles/theme"

const Section = styled.section`
  color: ${p => p.theme.copy};
  max-width: calc(100% - 2rem);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: visible;

  @media (min-width: ${theme.breakpoints.m}) {
    max-width: 60%;
  }

  @media (min-width: ${theme.breakpoints.l}) {
    max-width: 50%;
  }
`

const HomeContainer = styled.div``

const Index = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <HomeContainer>
      <Intro />

      <Section bgColor={theme.light}>
        <SectionHeading>
          <SectionHeading.Heading title="Articles">
            Selected Articles
          </SectionHeading.Heading>

          <SectionHeading.Details>
            The following are a few chosen articles. Have a look around the{" "}
            <Link to="#">Archive</Link> to see more.
          </SectionHeading.Details>
        </SectionHeading>
        <ArticleList>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <ArticleList.Item key={post.id}>
                <UnstyledLink to={post.frontmatter.path}>
                  <ArticleList.Date>{post.frontmatter.date}</ArticleList.Date>
                  <h3>{post.frontmatter.title}</h3>
                  <h4>{post.frontmatter.subtitle}</h4>
                </UnstyledLink>
              </ArticleList.Item>
            ))}
        </ArticleList>
      </Section>
    </HomeContainer>
  )
}
Index.propTypes = {
  data: PropTypes.object.isRequired
}
export default Index

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
