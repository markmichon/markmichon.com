import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import config from "../../data/config"
import { injectGlobal } from "styled-components"
import typography from "../styles/typography"
import colors from "../styles/colors"
import units from "../styles/spacing"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: ${typography.sansSerif};
  font-size: calc( 14px + (18 - 14) * ( (100vw - 320px) / (1000 - 320)));
  line-height:1.6;
  background-color: ${colors.background};
  color: ${colors.text};

  @media (min-width: 37.5rem) {
    
  }
}

a {
  color: ${colors.brand};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-skip: ink;
  }
}

img {
  max-width: 100%;
}

`

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: "description", content: config.siteDescription },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Banner>
      This site is being redesigned in the open. Learn more{" "}
      <Link to="/redesigning-in-the-open">Here</Link>
    </Banner>
    <Nav />
    <section>
      {children()}
    </section>
    <Footer>
      <p>
        &copy;2012-2017 Mark Michon. Find me on{" "}
        <a href="https://github.com/markmichon">Github</a> and{" "}
        <a href="https://twitter.com/markmichon">Twitter</a>
      </p>
    </Footer>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
