import react from "react"
import styled from "styled-components"
import theme from "../styles/theme"
export const ArticleTitle = styled.h1`
  text-align: center;
  font-family: ${theme.serif};
  max-width: ${theme.measure};
  margin-top: 3rem;
  margin-bottom: 1em;
  font-size: ${theme.sizes.xl};
  @media screen and (min-width: ${theme.breakpoints.m}) {
    font-size: ${theme.sizes.xxxl};
  }
`

export const Article = styled.article`
  color: ${theme.color.black};
  width: 100%;
`
