import { default as GatsbyLink } from "gatsby-link"
import styled from "styled-components"
import theme from "../styles/theme"

export const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;

  box-shadow: 0 0.25rem 0 ${theme.color.brand};

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
