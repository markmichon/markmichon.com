import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from '../components/Links'
import { MarkdownAST } from '../components/Markdown'

import { Article, ArticleTitle } from '../components/Article'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import theme from '../styles/theme'

require('prismjs/themes/prism-okaidia.css')

const ArticleBody = styled.div`
  max-width: ${theme.measure};
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.5rem;
  font-family: ${theme.serif};
`

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Nav />

      <Article>
        <Helmet title={`Mark Michon - ${post.frontmatter.title}`} />
        <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
        {/* <ArticleBody dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <ArticleBody>
          <MarkdownAST ast={post.htmlAst} components={{ a: Link }} />
        </ArticleBody>
      </Article>

      <Footer />
    </Layout>
  )
}

export default Template
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
