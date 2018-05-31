/* eslint-disable */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import config from "../../data/config"
import styled, { injectGlobal, ThemeProvider } from "styled-components"

import theme from "../styles/theme"

import { Footer, Nav, Alert } from "../components"
require("../styles/baseline.css")

const PageContainer = styled.div`
  margin: 0.5rem;
  background-color: hsl(0, 0%, 100%);

  @media (min-width: ${theme.breakpoints.m}) {
    margin: 1rem;
  }
`

class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Helmet
            title={config.siteTitle}
            meta={[
              { name: "description", content: config.siteDescription },
              { name: "keywords", content: "sample, something" }
            ]}
          >
            <script>
              {`
         (function(d) {
              var config = {
                  kitId: 'jyo4jyv',
                  scriptTimeout: 3000,
                  async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);   
        
        `}
            </script>
          </Helmet>
          <div>{this.props.children}</div>
        </PageContainer>
      </ThemeProvider>
    )
  }
}

export default Layout
