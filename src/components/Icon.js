/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const IconBase = ({
  children,
  color = 'currentColor',
  width,
  height = width,
  ...props
}) => (
  <svg
    fill={color}
    preserveAspectRatio="xMidYMid meet"
    width={width}
    height={height}
    {...props}
    sx={{
      verticalAlign: 'middle',
      width: width || 'auto',
    }}
  >
    {children}
  </svg>
)

export default IconBase
