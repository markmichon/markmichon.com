import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
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
export default Footer
