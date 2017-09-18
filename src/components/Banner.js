import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import typography from "../styles/typography"
const Banner = styled.div`
  background-color: ${p => p.theme.brand};
  color: ${p => p.theme.light};
  line-height: 3;
  text-align: center;
  font-size: 0.75rem;
  font-family: ${p => p.theme.sansSerif};

  a {
    color: hsla(207, 69%, 68%, 1);
  }
`
export default Banner
