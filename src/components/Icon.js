import React from 'react'

const IconBase = ({ children, color, size, width, height, ...props }) => (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    width={width}
    height={height}
    {...props}
    style={{
      verticalAlign: 'middle',
      width: width || 'auto',
    }}
  >
    {children}
  </svg>
)

export default IconBase
