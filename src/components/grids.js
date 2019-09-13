/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const base = {
  display: 'grid',
  gap: '3',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  width: '100%',
  minWidth: '60vw',
  ml: '50%',
  transform: 'translateX(-50%)',
}

export const Grid = ({ bleed, ...props }) => {
  return <div {...props} sx={{ ...base }} />
}
