/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx, ThemeProvider } from 'theme-ui'
// import Helmet from 'react-helmet'
// import config from '../../data/config'
import { Global } from '@emotion/core'
import Nav from './Nav'
import Footer from './Footer'
import sourceserif from '../styles/SourceSerifVariable-Roman.ttf.woff2'

// import theme from '../gatsby-plugin-theme-ui/index'
import theme from '../styles/theme'

const Layout = ({ children, location }) => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <Global
        styles={theme => ({
          '@font-face': {
            fontFamily: 'source-serif-var',
            src: `local('Source Serif Variable'), url(${sourceserif}) format('truetype)`,
            fontWeight: '100 800',
          },
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          },
          html: {
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes[2],
            lineHeight: theme.lineHeights.body,
            color: theme.colors.text,
            backgroundColor: theme.colors.backgroundFar,
          },
        })}
      />
      <div sx={{ m: [1, 2], backgroundColor: 'background' }}>
        <Nav location={location} />
        <>{children}</>
        <Footer />
      </div>
    </ThemeProvider>
  </Fragment>
)

export default Layout
