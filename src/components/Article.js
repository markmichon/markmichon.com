import react from "react"
import styled from "styled-components"

export const ArticleTitle = styled.h1`
  text-align: center;
  font-family: ${p => p.theme.serif};
  max-width: ${p => p.theme.measure};
  font-size: ${p => p.theme.sizes.xxxl};
  margin-top: 0.25rem;
  margin-bottom: 1em;
`

export const Article = styled.article`
  color: ${p => p.theme.copy};
  width: 100%;
`
