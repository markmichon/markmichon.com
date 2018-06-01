import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from '../components/Links'
import MarkdownAST from '../components/Markdown'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import theme from '../styles/theme'
import { Box, Heading, Text } from '../components/Radicals'

require('prismjs/themes/prism-okaidia.css')

const ArticleBody = styled.div`
  max-width: ${theme.measure};
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.5rem;
  font-family: ${theme.serif};
`
export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Nav />

      <Box ml="auto" mr="auto" pb={1} maxWidth="100%">
        <Helmet title={`Mark Michon - ${post.frontmatter.title}`} />
        <Heading
          fontFamily="serif"
          textAlign="center"
          maxWidth="36em"
          mx={[3, 'auto']}
          my={4}
          fontSize={[5, 6, 7]}
        >
          {post.frontmatter.title}
        </Heading>
        <Box ml={[3, 'auto']} mr={[3, 'auto']} maxWidth="36em">
          <MarkdownAST ast={post.htmlAst} components={{ a: Link }} />
        </Box>
      </Box>

      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
