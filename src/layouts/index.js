import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import config from "../../data/config"
import styled, { injectGlobal, ThemeProvider } from "styled-components"

// require("../styles/baseline.css")
import theme from "../styles/theme"

import { Banner, Footer, Nav, Alert } from "../components"
injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: ${theme.sansSerif};
  font-size: calc( 16px + (20 - 16) * ( (100vw - 320px) / (1000 - 320)));
  line-height:1.6;
  background-color: hsl(38, 32%, 90%);
  color: ${theme.text};


}


img {
  max-width: 100%;
}
article {
  margin: 0 auto;
  width: 100%;
}
  h1 { font-size: 2rem; line-height: 1.25;}
  h2 { font-size: 1.25rem; }
  h3 { font-size: 1rem; }
  h2,h3,h4,h5 {
    line-height: 1.25;
    margin-top: ${theme.baseUnit};
  }

  p, ul, ol {
    margin-top: ${theme.halfUnit};
  }

  ol, ul {
    list-style: inside;
    @media (min-width: 25rem) {
      list-style: outside;
    }
  }
  ol { list-style-type: decimal;}
  ul {list-style-type: disc;}
  li {margin-bottom: ${theme.halfUnit};}
  .gatsby-highlight, figure {
    
    margin-left: auto;
    margin-right: auto;
    font-size: .75rem;
  }
  figcaption {
    text-align: center;
  }
  p, ul, ol, h1,h2,h3,h4 {
    

  }
  
  pre, code {
    overflow-x: scroll;
  }
`

const PageContainer = styled.div`
  margin: 0.5rem;
  background-color: hsl(0, 0%, 100%);

  @media (min-width: ${theme.breakpoints.m}) {
    margin: 1rem;
  }
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title={config.siteTitle}
        meta={[
          { name: "description", content: config.siteDescription },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      {/* <Banner>
        This site is being redesigned in the open.{" "}
        <Link to="/redesigning-in-the-open">Learn more about it here.</Link>
      </Banner> */}
      {/* <Nav /> */}
      {children()}
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
