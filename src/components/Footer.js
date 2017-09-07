import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import typography from "../styles/typography"
const Footer = styled.footer`
  background-color: ${colors.brand};
  color: ${colors.light};
  line-height: 3;
  text-align: center;
  font-size: .75rem;
  font-family: ${typography.sansSerif};

  a {
    color: hsla(207, 69%, 68%, 1.00);
  }
  p {
    margin-bottom: 0;
  }
`
export default Footer