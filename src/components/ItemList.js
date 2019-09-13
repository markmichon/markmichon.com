/**@jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link, UnstyledLink } from '../components/Links'

function scaleColor(modifier) {
  const lightness = 50 + 5 * modifier
  return `hsl(352, 68%, ${lightness}%)`
}

export const Items = ({ data, filter, children, ...props }) => (
  <ul
    {...props}
    sx={{
      listStyle: 'none',
      mx: 0,
      mt: 0,
      mb: 3,
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  >
    {children}
  </ul>
)

// TODO: Refactor to cause less rule duplication
export const Item = ({ modifier, h = 'h2', ...props }) => {
  let color = scaleColor(modifier)
  return (
    <li
      {...props}
      sx={{
        mb: 3,
        width: 'auto',
        color: 'accent',
        position: 'relative',
        'h1,h2,h3, h4': {
          margin: 0,
          width: 'auto',
        },
        [h]: {
          fontFamily: 'heading',
          fontWeight: '500',
          color: 'text',
          fontSize: [3, 4],
          position: 'relative',
          transition: 'color 0ms linear 300ms',
          overflow: 'hidden',
          '&::before': {
            content: "''",
            top: 0,
            left: 0,
            position: 'absolute',
            backgroundColor: color,
            height: '100%',
            width: '100%',
            transition: 'transform 600ms cubic-bezier(1,0,0.34,1)',
            transform: `translateX(-101%)`,
          },
        },
        [`&:hover ${h},  a:focus ${h}`]: {
          color: color,
        },
        [`&:hover ${h}::before, a:focus ${h}::before`]: {
          transform: 'translateX(101%)',
        },
        h4: {
          fontSize: 2,
          fontWeight: 'body',
        },
      }}
    />
  )
}
export const ItemDate = props => (
  <span
    {...props}
    sx={{
      display: 'block',
      color: 'muted',
      fontWeight: 'light',
      fontFamily: 'body',
      fontSize: '1',
      textTransform: 'uppercase',
    }}
  />
)

export const ItemLink = props => (
  <UnstyledLink
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  />
)
