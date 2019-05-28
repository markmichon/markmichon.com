/* eslint-disable */
import React, { Fragment } from 'react'

import Helmet from 'react-helmet'
import config from '../../data/config'
import { css, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from '../styles/theme'
import { Box } from '../components/Radicals'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sourceserif from '../styles/SourceSerifVariable-Roman.ttf.woff2'

const globals = css`
  @font-face {
    font-family: 'source-serif-var';
    src: url(${sourceserif}) format('truetype');
    font-weight: 100 800;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${theme.fonts.normal};
    /* font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1000 - 320))); */
    font-size: 16px;
    line-height: 1.6;
    color: ${theme.colors.text};
    background-color: hsl(40, 36%, 95%);
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${theme.colors.heading};
  }
  p {
    line-height: 1.7;
  }
  a {
    text-decoration: none;
  }
  a:hover {
  }

  img {
    max-width: 100%;
  }
`

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global styles={globals} />
      <Box m={[1, 2]} bg="white">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: config.siteDescription },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Nav location={location} />
        <>{children}</>
        <Footer />
      </Box>
    </Fragment>
  </ThemeProvider>
)

export default Layout
