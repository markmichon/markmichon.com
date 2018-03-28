import React from "react"
import styled from "styled-components"

// REMOVE

const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    transition: opacity 0.2s ease-in-out;
  }

  &:hover li {
    opacity: 0.25;
  }

  &:hover li:hover {
    opacity: 1;
  }
  h3 {
    font-family: Georgia;
  }
`

const ArticleListItem = styled.li``

export default {
  ArticleList,
  ArticleListItem
}
