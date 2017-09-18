import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Logo from "./Logo"

const NavContainer = styled.nav`
  text-align: center;
  width: 100%;
  padding: ${p => p.theme.halfUnit};
`

const Nav = () => (
  <NavContainer>
    <Link to="/">
      <Logo color={p => p.theme.brand} />
    </Link>
  </NavContainer>
)

export default Nav
