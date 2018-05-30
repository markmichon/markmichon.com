import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
const StyledFooter = styled.footer`
  background-color: ${theme.brand};
  color: ${theme.white};
  line-height: 1.6;
  text-align: center;
  font-size: 0.75rem;
  font-family: ${theme.sansSerif};
  margin-top: ${theme.baseUnit};
  padding-top: ${theme.halfUnit};
  padding-bottom: ${theme.halfUnit};

  a {
    color: ${theme.color.brand[1]};
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
