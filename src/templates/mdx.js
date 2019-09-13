/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'

export default ({ children }) => {
  return (
    <Layout>
      <section
        sx={{
          mx: 'auto',
          px: 3,
          py: [5],
          maxWidth: [1, 2],
        }}
      >
        {children}
      </section>
    </Layout>
  )
}
