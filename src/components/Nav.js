/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { NavLink, UnstyledLink } from './Links'
import Logo from './Logo'
import SR from './SR'
// import theme from '../styles/theme'

const LogoTab = props => (
  <UnstyledLink
    {...props}
    sx={{
      backgroundColor: 'black',
      position: 'relative',
      p: 2,
      ml: 0,
      transition: 'width 200ms ease-in-out',
      '&:hover': {},
      '&::before': {
        content: "''",
        height: '100%',
        width: '1rem',
        left: ' -1rem',
        top: 0,
        position: 'absolute',
        backgroundColor: 'inherit',
        zIndex: '1',
      },
    }}
  />
)

// Needs updating once pages are finished
const NavList = props => (
  <ul
    {...props}
    sx={{
      m: 0,
      p: 2,
      display: 'flex',
      alignItems: 'center',
      fontSize: 1,
      listStyle: 'none',
      color: 'black',
      li: {
        mb: 0,
      },
      'li:not(:last-child)': {
        mr: 3,
      },
    }}
  />
)

const Nav = ({ location }) => {
  const path = (location && location.pathname) || '/'
  const showHeading = path === '/' ? null : true
  return (
    <nav
      sx={{
        display: 'flex',
        mt: 2,
        ml: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <LogoTab to="/">
        <div sx={{ dispay: 'flex', alignItems: 'center' }}>
          <Logo color="hsl(0,0%,100%)" size="32px" />
          {showHeading && (
            <h1>
              <SR>Mark Michon</SR>
            </h1>
          )}
        </div>
      </LogoTab>
      {/* <NavList>
      <li>
        <NavLink to="/">Articles</NavLink>
      </li>
      <li>
        <NavLink to="/">Projects</NavLink>
      </li>
    </NavList> */}
    </nav>
  )
}

export default Nav
