import React from 'react'
import styled, { extend } from 'styled-components'
import { themeGet } from 'styled-system'
import theme from '../styles/theme'
import { UnstyledLink } from './Links'
import { Box, Text, Heading } from './Radicals'

export const HeadingContainer = styled.div`
  margin-bottom: 0.5rem;
`
export const HeadingTitle = Heading.extend`

  @media (min-width:${themeGet('breakpoint.1', '800px')}) {
    &::before {
      content: '${props => props.title}';
      position: absolute;
      top: 1.5em;
      font-size:2.5em;
      font-family: ${themeGet('fonts.serif', 'serif')};
      font-weight: 400;
      font-style: italic;
      line-height: 1;
      transform: rotate(-90deg);
      left: -2.2em;
      color: hsl(42, 36%, 95%);
      @media (min-width:${theme.breakpoints.l}) {
      font-size: 3em;
      }
    }
  }
`

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ListItem = styled.li`
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
      content: '';
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

export const Link = UnstyledLink.extend`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ItemDate = styled.span`
  display: block;
  color: ${theme.color.medium};
  font-weight: bold;
  font-family: ${theme.sansSerif};
  font-size: ${theme.sizes.xxs};
  text-transform: uppercase;
`
