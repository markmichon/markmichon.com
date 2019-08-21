/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/SEO'

import Layout from '../components/Layout'

import components from '../utils/mdx-components'

export default ({ data, location }) => {
  return (
    <Layout location={location}>
      <div
        sx={{
          mx: 'auto',
          px: 5,
          py: [5, 5, 5, 10],
          maxWidth: [0, 1],
          fontSize: [2, 3],
        }}
      >
        <SEO title={`${data.mdx.frontmatter.title} | Mark Michon`} />
        <h1
          sx={{
            fontFamily: 'heading',
            textAlign: 'center',
            // maxWidth: 1,
            mx: [3, 'auto'],
            mt: 2,
            mb: 6,
            fontSize: [4, 4, 5, 6],
            fontWeight: 'heading',
          }}
        >
          {data.mdx.frontmatter.title}
        </h1>
        <div sx={{ mx: 'auto' }}>
          {/* <MDXProvider components={components}> */}
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          {/* </MDXProvider> */}
        </div>
      </div>
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
