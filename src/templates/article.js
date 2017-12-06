import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Article from "../components/Article"

require("prismjs/themes/prism-okaidia.css")

const ArticleTitle = styled.h1`
  text-align: left;
  font-family: ${p => p.theme.sansSerif};
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Article>
      <Helmet title={`Mark Michon - ${post.frontmatter.title}`} />
      <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Article>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
