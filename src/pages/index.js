import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import Intro from "../components/Intro"
import {
  SectionHeadingTitle,
  SectionHeadingContainer,
  SectionHeadingDetails
} from "../components/SectionHeading"
import Footer from "../components/Footer"
import {
  ArticleList,
  ArticleListDate,
  ArticleListItem,
  ArticleListLink
} from "../components/ArticleList"
import { Link, UnstyledLink } from "../components/Links"

import Nav from "../components/Nav"
import Layout from "../components/Layout"
import theme from "../styles/theme"
import { Box } from "../components/Radicals"

class Index extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <Nav />
        <Intro />
        <Box
          is="section"
          maxWidth={["100%", "60%", "50%"]}
          mx="auto"
          position="relative"
        >
          <SectionHeadingContainer>
            <SectionHeadingTitle title="Articles">
              Selected Articles
            </SectionHeadingTitle>

            <SectionHeadingDetails>
              The following are a few chosen articles. Have a look around the{" "}
              <Link to="#">Archive</Link> to see more.
            </SectionHeadingDetails>
          </SectionHeadingContainer>
          <ArticleList>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <ArticleListItem key={post.id}>
                  <ArticleListLink to={post.frontmatter.path}>
                    <ArticleListDate>{post.frontmatter.date}</ArticleListDate>
                    <h3>{post.frontmatter.title}</h3>
                    <h4>{post.frontmatter.subtitle}</h4>
                  </ArticleListLink>
                </ArticleListItem>
              ))}
          </ArticleList>
        </Box>
      </Layout>
    )
  }
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
