import React from "react"
import styled from "styled-components"
import { NavLink } from "./Links"
import Logo from "./Logo"
import theme from "../styles/theme"

const NavBlock = styled.nav`
  background-color: ${theme.color.black};
  position: relative;
  display: flex;

  padding: 1rem 1rem 1rem 2rem;
  margin-left: 0;
  transition: width 200ms ease-in-out;
  overflow: hidden;

  &:hover {
  }

  &::before {
    content: "";
    height: 100%;
    width: 1rem;
    left: -1rem;
    top: 0;
    position: absolute;
    background-color: ${theme.color.black};
    z-index: 1;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0 0 0 2rem;
  display: flex;
  flex-wrap: no-wrap;
  list-style: none;
  color: ${theme.color.white};

  @media (min-width: 800px) {
  }
  li {
    margin-bottom: 0;
  }
  li:not(:last-child) {
    margin-right: 0.5rem;
  }
`

const Nav = () => (
  <NavBlock>
    <Logo color={theme.color.white} width="3rem" />
    <NavList>
      <li>
        <NavLink to="/">Articles</NavLink>
      </li>
      <li>
        <NavLink to="/">Projects</NavLink>
      </li>
    </NavList>
  </NavBlock>
)

export default Nav
