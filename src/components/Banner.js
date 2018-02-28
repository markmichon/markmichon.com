import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import typography from "../styles/typography"
const Banner = styled.div`
  background-color: ${p => p.theme.brand};
  color: ${p => p.theme.light};
  line-height: 1.5;
  text-align: center;
  font-size: 0.75rem;
  font-family: ${p => p.theme.sansSerif};
  font-style: italic;
  padding: 0.5rem 1rem;

  a {
    color: hsl(270, 25%, 98%);
    font-weight: bold;
  }
`
export default Banner
