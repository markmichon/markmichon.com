import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { UnstyledLink } from "./Links"

export const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ArticleListItem = styled.li`
  margin-bottom: 1rem;
  width: auto;
  color: ${theme.black};

  h3,
  h4 {
    margin: 0;

    width: auto;
  }

  h3 {
    font-family: ${theme.serif};
    font-weight: bold;
    font-size: ${theme.sizes.l};

    position: relative;
    width: auto;
    transition-delay: 300ms;
    transition-property: color;
    transition-duration: 0ms;
    overflow: hidden;

    @media (min-width: ${theme.breakpoints.l}) {
      font-size: ${theme.sizes.xl};
    }
    &::before {
      content: "";
      top: 0;

      position: absolute;
      background-color: ${theme.color.brand[1]};
      height: 100%;
      width: 100%;

      left: 0;
      transition: transform 600ms cubic-bezier(1, 0, 0.34, 1);
      transform: translateX(-100%);
    }
  }
  &:hover h3::before {
    transform: translateX(100%);
  }
  h4 {
    font-size: ${theme.sizes.s};
    font-weight: normal;
  }

  &:hover h3 {
    color: ${theme.color.brand[1]};
  }
`

export const ArticleListLink = UnstyledLink.extend`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ArticleListDate = styled.span`
  display: block;
  color: ${theme.color.medium};
  font-weight: bold;
  font-family: ${theme.sansSerif};
  font-size: ${theme.sizes.xxs};
  text-transform: uppercase;
`
