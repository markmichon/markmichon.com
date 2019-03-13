/* eslint-disable */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../../data/config'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import system from '../styles/system'
import { Footer, Nav, Alert } from '../components'
import { Box } from '../components/Radicals'
// require('../styles/baseline.css')
import typeface from '../../static/SourceSerifVariable-Roman.ttf'

const GlobalStyle = createGlobalStyle`

:root {
  /* Units */
  --baseUnit: 1rem;
  --halfUnit: 0.5rem;
  /* Color */
  --black: #333;
  --brand-color: hsl(352, 68%, 50%);
  --brand-color-alt: hsl(352, 68%, 41%);
  --dark: hsl(0, 0%, 10%);
  --light: hsla(210, 20%, 95%, 1);
  --white: #fff;

  /* Typefaces */
  --sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  --serif: 'SourceSerif', 'Georgia', 'Times New Roman', serif;
  --xxxl: 3rem;
  --xxl: 2.25rem;
  --xl: 1.5rem;
  --l: 1.25rem;
  --m: 1rem;
  --s: 0.875rem;
  --xs: 0.75rem;
  --measure: 36em;
}

@font-face {
  font-family: 'SourceSerif';
  src: url('./SourceSerifVariable-Roman.ttf') format('truetype');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: ${p => p.theme.serif};
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1000 - 320)));
  line-height: 1.6;
  background-color: hsl(40, 36%, 95%);
}

a {
  text-decoration: none;
}
a:hover {
}

img {
  max-width: 100%;
}
article {
  margin: 0 auto;
  width: 100%;
}
h1 {
  font-size: 2rem;
  line-height: 1.25;
}
h2 {
  font-size: 1.25rem;
}
h3 {
  font-size: 1rem;
}
h2,
h3,
h4,
h5 {
  line-height: 1.25;
  /* margin-top: var(--baseUnit); */
}

p,
ul,
ol {
  /* margin-top: var(--halfUnit); */
}

ol,
ul {
  list-style: inside;
}
@media (min-width: 25rem) {
  ol,
  ul {
    list-style: outside;
  }
}

ol {
  list-style-type: decimal;
}
ul {
  list-style-type: disc;
}
li {
  /* margin-bottom: var(--halfUnit); */
}
.gatsby-highlight,
figure {
  margin-left: auto;
  margin-right: auto;
}
figcaption {
  text-align: center;
}
p,
ul,
ol,
h1,
h2,
h3,
h4 {
}

pre,
code {
  overflow-x: scroll;
}

`

class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={system}>
        <Fragment>
          <GlobalStyle />
          <Box bg="hsl(0, 0%, 100%)" m={[2, 3]}>
            <Helmet
              title={config.siteTitle}
              meta={[
                { name: 'description', content: config.siteDescription },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <div>{this.props.children}</div>
          </Box>
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default Layout
