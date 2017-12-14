import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Logo from "./Logo"

const NavContainer = styled.nav`
  text-align: center;
  width: 100%;
  padding: ${p => p.theme.baseUnit};
  display: flex;
  justify-content: space-between;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  li {
    margin-bottom: 0;
  }
  li:not(:last-child) {
    margin-right: 0.5rem;
  }
`

const Nav = () => (
  <NavContainer>
    <Link to="/">
      <Logo color={p => p.theme.brand} />
    </Link>
    <NavList>
      <li>
        <Link to="/">Articles</Link>
      </li>
      <li>
        <Link to="/">Projects</Link>
      </li>
    </NavList>
  </NavContainer>
)

export default Nav
