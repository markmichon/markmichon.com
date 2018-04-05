import react from "react"
import styled from "styled-components"
import theme from "../styles/theme"
export const ArticleTitle = styled.h1`
  text-align: center;
  font-family: ${theme.serif};
  max-width: ${theme.measure};
  font-size: ${theme.sizes.xxxl};
  margin-top: 0.25rem;
  margin-bottom: 1em;
`

export const Article = styled.article`
  color: ${theme.color.black};
  width: 100%;
`
