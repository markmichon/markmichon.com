import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import { Link } from '../components/Links'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import theme from '../styles/theme'
import components from '../utils/mdx-components'
import { Box, Heading, Text } from '../components/Radicals'

export default ({ children }) => {
  return (
    <Layout>
      <Nav />

      <Box
        ml="auto"
        mr="auto"
        px={5}
        py={[5, 5, 5, 10]}
        maxWidth="100%"
        fontSize={[2, 3]}
      >
        <Box mx="auto" maxWidth={['36em']}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </Box>
        <Footer />
      </Box>
    </Layout>
  )
}
