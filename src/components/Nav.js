import React from "react"
import styled from "styled-components"
import { NavLink } from "./Links"
import Logo from "./Logo"
import theme from "../styles/theme"

const LogoTab = styled.div`
  background-color: ${theme.color.black};
  position: relative;
  padding: 1rem 1rem 1rem 1rem;
  margin-left: 0;
  transition: width 200ms ease-in-out;

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

const NavBlock = styled.nav`
  display: flex;
  padding-top: 1rem;
  margin-left: 0;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled.ul`
  margin: 0;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  font-size: ${theme.sizes.xs};

  list-style: none;
  color: ${theme.color.black};

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
    <LogoTab>
      <Logo color={theme.color.white} size="48" />
    </LogoTab>
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
