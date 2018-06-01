import React from 'react'
import Intro from '../components/Intro'

import { Link } from '../components/Links'

import Nav from '../components/Nav'
import Layout from '../components/Layout'

import { Box, Text } from '../components/Radicals'
import * as ArticleList from '../components/ArticleList'

const Index = props => {
  const { edges: posts } = props.data.allMarkdownRemark // eslint-disable-line

  return (
    <Layout>
      <Nav />
      <Intro />
      <Box
        is="section"
        maxWidth={['100%', '60%', '50%']}
        mx="auto"
        position="relative"
      >
        <Box mb={3}>
          <ArticleList.HeadingTitle
            title="Articles"
            is="h2"
            fontWeight="extra"
            fontSize={4}
          >
            Selected Articles
          </ArticleList.HeadingTitle>

          <Text fontSize={2}>
            The following are a few chosen articles. Have a look around the{' '}
            <Link to="#archive">Archive</Link> to see more.
          </Text>
        </Box>
        <ArticleList.List>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <ArticleList.ListItem key={post.id}>
                <ArticleList.Link to={post.frontmatter.path}>
                  <ArticleList.ItemDate>
                    {post.frontmatter.date}
                  </ArticleList.ItemDate>
                  <h3>{post.frontmatter.title}</h3>
                  <h4>{post.frontmatter.subtitle}</h4>
                </ArticleList.Link>
              </ArticleList.ListItem>
            ))}
        </ArticleList.List>
      </Box>
    </Layout>
  )
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
