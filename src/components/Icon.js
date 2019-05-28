import React from 'react'

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
    style={{
      verticalAlign: 'middle',
      width: width || 'auto',
    }}
  >
    {children}
  </svg>
)

export default IconBase
