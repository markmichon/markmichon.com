import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const BaseLink = styled.a`
  color: inherit;
  padding: 0.125em;
  font-weight: 600;
  transition: color 200ms ease-in-out, box-shadow 200ms ease-in-out;
  /* box-shadow: inset 0 -0.125rem 0 ${theme.colors.brands.l}; */
  text-decoration: underline ${theme.colors.brand};
  text-decoration-color:${theme.colors.brand};
  text-decoration-skip-ink: auto;
  &:hover {
    color: ${theme.colors.brand};
    /* box-shadow: inset 0 -0.125rem 0 ${theme.colors.brand}; */
  }
`
const InternalLink = BaseLink.withComponent(GatsbyLink)

export const Link = ({ children, to, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <InternalLink to={to} {...rest}>
        {children}
      </InternalLink>
    )
  }
  return (
    <BaseLink href={to} {...rest}>
      {children}
    </BaseLink>
  )
}

export const NavLink = styled(InternalLink)`
  color: hsl(0, 0%, 40%);
  text-decoration: none;
  font-weight: bold;
  box-shadow: none;
`

export const UnstyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`
