/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Container = props => (
  <div
    {...props}
    sx={{
      maxWidth: 1,
      ml: [3, 3, '15%'],
      mr: [3, 3, 'auto'],
    }}
  />
)

export default Container
