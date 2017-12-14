import React from "react"

const IconBase = ({ children, color, size, width, height, ...props }) => {
  return (
    <svg
      children={children}
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={height}
      {...props}
      style={{
        verticalAlign: "middle"
      }}
    />
  )
}

export default IconBase
