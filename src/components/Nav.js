import React from 'react'
import styled from '@emotion/styled'
import { NavLink, UnstyledLink } from './Links'
import { Heading, Flex } from './Radicals'
import Logo from './Logo'
import theme from '../styles/theme'

const LogoTab = styled(UnstyledLink)`
  background-color: ${theme.colors.black};
  position: relative;
  padding: 1rem 1rem 1rem 1rem;
  margin-left: 0;
  transition: width 200ms ease-in-out;

  &:hover {
  }

  &::before {
    content: '';
    height: 100%;
    width: 1rem;
    left: -1rem;
    top: 0;
    position: absolute;
    background-color: inherit;
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
  font-size: ${theme.fontSizes.small};

  list-style: none;
  color: ${theme.colors.black};

  @media (min-width: 800px) {
  }
  li {
    margin-bottom: 0;
  }
  li:not(:last-child) {
    margin-right: 0.5rem;
  }
`

const Nav = ({ location }) => {
  const path = (location && location.pathname) || '/'
  const showHeading = path === '/' ? null : true
  return (
    <NavBlock>
      <LogoTab to="/">
        <Flex alignItems="center">
          <Logo color="hsl(0,0%,100%)" size="48" />
          {showHeading && (
            <Heading fontSize="1rem" color="white">
              Mark Michon
            </Heading>
          )}
        </Flex>
      </LogoTab>
      {/* <NavList>
      <li>
        <NavLink to="/">Articles</NavLink>
      </li>
      <li>
        <NavLink to="/">Projects</NavLink>
      </li>
    </NavList> */}
    </NavBlock>
  )
}

export default Nav
