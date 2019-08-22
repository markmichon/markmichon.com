/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Wa from './Wa'
export default props => {
  if (props.fancy)
    return (
      <Wa
        config={{ points: 3 }}
        style={{
          width: '100px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
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
