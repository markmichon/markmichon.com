import { default as GatsbyLink } from "gatsby-link"
import styled from "styled-components"
import theme from "../styles/theme"

export const Link = styled(GatsbyLink)`
  color: ${theme.brand};
  text-decoration: none;
  &:hover {
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
