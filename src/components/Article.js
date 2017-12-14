import react from "react"
import styled from "styled-components"

const Article = styled.article`
  color: ${p => p.theme.copy};
  padding: ${p => p.theme.baseUnit};
  max-width: ${p => p.theme.measure};
  width: 100%;
  margin: 0 auto;
`
export default Article
