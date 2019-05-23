import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const BaseLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 200ms ease-in-out, box-shadow 200ms ease-in-out;
  box-shadow: inset 0 -0.125rem 0 ${theme.colors.brands.l};
  padding: 0.125em;

  &:hover {
    color: ${theme.colors.brand};
    box-shadow: inset 0 -0.125rem 0 ${theme.colors.brand};
  }
`

const InternalLink = BaseLink.withComponent(GatsbyLink)

export const NavLink = styled(InternalLink)`
  color: hsl(0, 0%, 40%);
  text-decoration: none;
  font-weight: bold;
  box-shadow: none;
`

export const UnstyledLink = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`
export const Link = ({ children, props, to, href }) => {
  if (!to) {
    return (
      <BaseLink href={href} {...props}>
        {children}
      </BaseLink>
    )
  }
  return (
    <InternalLink to={to} {...props}>
      {children}
    </InternalLink>
  )
}
