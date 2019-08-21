/** @jsx jsx */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'

export const unstyledLinkStyles = {
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
    textDecoration: 'none',
  },
}
export const UnstyledLink = ({ children, to, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink sx={unstyledLinkStyles} to={to} {...rest}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a sx={unstyledLinkStyles} href={to} {...rest}>
      {children}
    </a>
  )
}

const baseLinkStyles = {
  color: 'inherit',
  padding: 1,
  fontWeight: 'heading',
  transition: 'color 200ms ease-in-out, box-shadow 200ms ease-in-out',
  textDecoration: theme => `underline ${theme.colors.primary}`,
  textDecorationSkipInk: 'auto',
  '&:hover': {
    color: 'primary',
  },
}

export const Link = ({ children, to, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink sx={baseLinkStyles} to={to} {...rest}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a sx={baseLinkStyles} href={to} {...rest}>
      {children}
    </a>
  )
}

export const NavLink = props => (
  <GatsbyLink
    {...props}
    sx={{
      ...unstyledLinkStyles,
      color: 'accent',
      fontWeight: 'heading',
    }}
  />
)
