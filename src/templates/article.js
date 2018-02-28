import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import {
  Article,
  ArticleTitle,
  Nav,
  PageContainer,
  Content,
  Footer
} from "../components"
require("prismjs/themes/prism-okaidia.css")

const ArticleBody = styled.div`
  max-width: ${p => p.theme.measure};
  margin-left: auto;
  margin-right: auto;
  font-family: Georgia;
`

const ArticleNav = styled.nav`
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div>
      <ArticleNav>
        <Link to="/">M</Link>
      </ArticleNav>
      <main>
        <Article>
          <Helmet title={`Mark Michon - ${post.frontmatter.title}`} />
          <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
          <ArticleBody dangerouslySetInnerHTML={{ __html: post.html }} />
        </Article>
      </main>
      <Footer />
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.object.isRequired
}
export default Template
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
