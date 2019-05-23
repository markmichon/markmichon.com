/* eslint-disable */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../../data/config'
import { css, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { themeGet } from 'styled-system'
import styled from '@emotion/styled'
import theme from '../styles/theme'
import { Box } from '../components/Radicals'

import '../../static/SourceSerifVariable-Roman.ttf'

const globals = css`
  @font-face {
    font-family: 'source-serif-var';
    src: url('./SourceSerifVariable-Roman.ttf.woff2') format('truetype');
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

const Layout = ({ children }) => (
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
        <>{children}</>
      </Box>
    </Fragment>
  </ThemeProvider>
)

export default Layout
