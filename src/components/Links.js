import GatsbyLink from "gatsby-link"
import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"

const BaseLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 200ms ease-in-out, box-shadow 200ms ease-in-out;
  box-shadow: inset 0 -0.125rem 0 ${theme.color.brand[0]};
  padding: 0.125em;

  &:hover {
    color: ${theme.color.brand[1]};
    box-shadow: inset 0 -0.125rem 0 ${theme.color.brand[1]};
  }
`

const InternalLink = BaseLink.withComponent(GatsbyLink)

export const NavLink = styled(InternalLink)`
  color: ${theme.color.medium};
  text-decoration: none;
  font-weight: bold;
  box-shadow: none;
`

export const UnstyledLink = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
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

export default Link
