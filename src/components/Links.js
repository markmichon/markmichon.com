import { default as GatsbyLink } from "gatsby-link"
import styled from "styled-components"
import theme from "../styles/theme"

export const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  transition: color 200ms ease-in-out;
  box-shadow: inset 0 -0.25em 0 ${theme.color.brand};
  padding: 0.125em;

  &:hover {
    color: ${theme.color.brand};
  }
`

export const NavLink = styled(GatsbyLink)`
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

export default Link
