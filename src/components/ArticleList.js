import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import theme from '../styles/theme'
import { UnstyledLink } from './Links'
import { Box, Text, Heading } from './Radicals'

export const HeadingContainer = styled.div`
  margin-bottom: 0.5rem;
`
export const HeadingTitle = styled(Heading)`

  @media (min-width:800px) {
    &::before {
      content: '${props => props.title}';
      position: absolute;
      top: 1.5em;
      font-size:2.5em;
      font-family: var(--serif);
      font-weight: 400;
      font-style: italic;
      line-height: 1;
      transform: rotate(-90deg);
      left: -2.2em;
      color: hsl(42, 36%, 95%);
      @media (min-width: 1000px) {
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
  color: var(--black);

  h3,
  h4 {
    margin: 0;

    width: auto;
  }

  h3 {
    font-family: var(--serif);
    font-weight: bold;
    font-size: var(--l);

    position: relative;
    width: auto;
    transition-delay: 300ms;
    transition-property: color;
    transition-duration: 0ms;
    overflow: hidden;

    @media (min-width: 1000px) {
      font-size: var(--xl);
    }
    &::before {
      content: '';
      top: 0;

      position: absolute;
      background-color: var(--brand-color);
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
    font-size: var(--s);
    font-weight: normal;
  }

  &:hover h3 {
    color: var(--brand-color);
  }
`

export const Link = styled(UnstyledLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ItemDate = styled.span`
  display: block;
  color: #ccc;
  font-weight: bold;
  font-family: var(--sans-serif);
  font-size: var(--xs);
  text-transform: uppercase;
`
