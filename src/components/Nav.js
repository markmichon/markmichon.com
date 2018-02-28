import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Logo from "./Logo"
import theme from "../styles/theme"
const NavContainer = styled.nav`
  width: 100%;
  background-color: #333;
  padding: ${theme.baseUnit};
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 800px) {
    display: block;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;

  @media (min-width: 800px) {
    display: block;
  }
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
      <Logo color={theme.light} />Mark Michon
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
