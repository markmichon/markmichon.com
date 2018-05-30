/* eslint-disable */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import config from "../../data/config"
import styled, { injectGlobal, ThemeProvider } from "styled-components"

// require("../styles/baseline.css")
import theme from "../styles/theme"

import { Footer, Nav, Alert } from "../components"
injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: ${theme.sansSerif};
  font-size: calc( 16px + (20 - 16) * ( (100vw - 320px) / (1000 - 320)));
  font-display: fallback;
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
