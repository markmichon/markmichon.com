import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background-color: ${p => p.theme.brand};
  color: ${p => p.theme.light};
  line-height: 3;
  text-align: center;
  font-size: 0.75rem;
  font-family: ${p => p.theme.sansSerif};

  a {
    color: ${p => p.theme.link};
  }
  p {
    margin-bottom: 0;
  }
`
export default Footer
