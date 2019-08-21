/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

export default props => (
  <span
    {...props}
    sx={{
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      whitespace: 'nowrap',
    }}
  />
)
