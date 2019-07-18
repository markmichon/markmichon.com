import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import { Link } from '../components/Links'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import theme from '../styles/theme'
import components from '../utils/mdx-components'
import { Box, Heading, Text } from '../components/Radicals'

export default ({ data, location }) => {
  return (
    <Layout location={location}>
      <Box
        ml="auto"
        mr="auto"
        px={5}
        py={[5, 5, 5, 10]}
        maxWidth="100%"
        fontSize={[2, 3]}
      >
        <SEO title={`${data.mdx.frontmatter.title} | Mark Michon`} />
        <Heading
          fontFamily="serif"
          textAlign="center"
          maxWidth="36em"
          mx={[3, 'auto', 'auto']}
          mt={2}
          mb={6}
          fontSize={[4, 4, 5, 6]}
          fontWeight="600"
        >
          {data.mdx.frontmatter.title}
        </Heading>
        <Box mx="auto" maxWidth={['36em']}>
          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </Box>
      </Box>
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
