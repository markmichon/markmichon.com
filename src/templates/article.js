import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import Logo from "../components/Logo"
import styled, { injectGlobal } from "styled-components"
import colors from "../styles/colors"
import units from "../styles/spacing"
import typography from "../styles/typography"
require("prismjs/themes/prism-okaidia.css")

injectGlobal`
article {
  margin: 0 auto;
  padding: 1rem 2rem;
  max-width: 900px;
  width: 100%;
}
  h1 { font-size: 1.5rem; }
  h2 { font-size: 1.25rem; }
  h3 { font-size: 1rem; }
  h2,h3,h4,h5 {
    margin-bottom: ${units.halfUnit};
  }

  p, ul, ol {
    margin-bottom: ${units.baseUnit};
  }

  ol, ul {
    list-style: inside;
    @media (min-width: 25rem) {
      list-style: outside;
    }
  }
  ol { list-style-type: decimal;}
  ul {lis-style-type: disc;}
  li {margin-bottom: ${units.halfUnit};}
  .gatsby-highlight, figure {
    
    margin-left: auto;
    margin-right: auto;
  }
  figcaption {
    text-align: center;
  }
  p, ul, ol, h1,h2,h3,h4 {
    
    margin-left: auto;
    margin-right: auto;
    @media (min-width:44rem) {
      
    }
  }
  
  pre, code {
    overflow-x: scroll;
  }
`

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
