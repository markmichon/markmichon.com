import GatsbyLink from "gatsby-link"
import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"

const BaseLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 200ms ease-in-out;
  box-shadow: inset 0 -0.25em 0 ${theme.color.brand};
  padding: 0.125em;

  &:hover {
    color: ${theme.color.brand};
  }
`

const InternalLink = BaseLink.withComponent(GatsbyLink)

export const NavLink = styled(InternalLink)`
  color: inherit;
  text-decoration: none;
`

export const UnstyledLink = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`
export const Link = ({ children, to, props }) => {
  const external = /^http[s]?/.test(to)
  if (external) {
    return (
      <BaseLink href={to} {...props}>
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
