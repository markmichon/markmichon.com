import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Logo from "./Logo"
import colors from "../styles/colors"
import typography from "../styles/typography"
import spacing from "../styles/spacing"

const NavContainer = styled.nav`
  text-align: center;
  width: 100%;
  padding: ${spacing.halfUnit};
`

const Nav = () =>
  <NavContainer>
    <Link to="/">
      <Logo color={colors.brand} />
    </Link>
  </NavContainer>

export default Nav
