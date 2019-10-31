/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/SEO'

import Layout from '../components/Layout'
import Container from '../components/Container'
import components from '../utils/mdx-components'

export default ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title={`${data.mdx.frontmatter.title} | Mark Michon`} />
      <article
        sx={{
          mx: 'auto',
          px: 3,
          py: [5],
          maxWidth: [1, 2],
        }}
      >
        <h1
          sx={{
            fontFamily: 'heading',
            textAlign: 'center',
            mt: 2,
            mb: 5,
            fontSize: [5, 6],
            fontWeight: '600',
            color: 'black',
          }}
        >
          {data.mdx.frontmatter.title}
        </h1>
        <div sx={{ mx: 'auto' }}>
          {/* <MDXProvider components={components}> */}
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          {/* </MDXProvider> */}
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
