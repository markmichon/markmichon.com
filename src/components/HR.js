/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Wa from './Wa'
export default ({ config = {}, ...props }) => {
  if (props.fancy)
    return (
      <Wa
        {...props}
        config={{ points: 4, blobs: 2, ...config }}
        style={{
          width: '50px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          my: 4,
          ...props.style,
        }}
      />
    )
  return (
    <hr
      {...props}
      sx={{
        display: 'block',
        height: '.5rem',
        width: '.5rem',
        borderRadius: '50%',
        my: 4,
        mx: 'auto',
        border: 'none',
        backgroundColor: 'accent',
        '&::before, &::after': {
          content: "''",
          width: '.5rem',
          height: '.5rem',
          position: 'absolute',
          backgroundColor: 'inherit',
          borderRadius: '50%',
          zIndex: 2,
        },
        '&::before': {
          transform: 'translateX(-200%)',
        },
        '&::after': {
          transform: 'translateX(200%)',
        },
      }}
    />
  )
}
