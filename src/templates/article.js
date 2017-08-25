import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import Logo from "../components/Logo"
import styled from "styled-components"
import spacing from "../styles/spacing"
import typography from "../styles/typography"
import colors from "../styles/colors"
require("prismjs/themes/prism-okaidia.css")

const ArticleTitle = styled.h1`
  text-align: center;
  font-family: ${typography.sansSerif};
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <article>
      <Helmet title={`Mark Michon - ${post.frontmatter.title}`} />
      <ArticleTitle>
        {post.frontmatter.title}
      </ArticleTitle>
      <div className="" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
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
