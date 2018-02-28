import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  // background-color: ${p => p.theme.brand};
  // color: ${p => p.theme.light};
  line-height: 1.6;
  text-align: center;
  font-size: 0.75rem;
  font-family: ${p => p.theme.sansSerif};
  margin-top: ${p => p.theme.baseUnit};
  padding-top: ${p => p.theme.halfUnit};
  padding-bottom: ${p => p.theme.halfUnit};
  
  a {
    color: ${p => p.theme.link};
  }
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`

const Footer = (...props) => (
  <StyledFooter>
    <p>&copy;2012-2017 Mark Michon</p>
    <p>
      <a href="https://github.com/markmichon">Github</a>{" "}
      <a href="https://twitter.com/markmichon">Twitter</a>
    </p>
  </StyledFooter>
)
export default Footer
