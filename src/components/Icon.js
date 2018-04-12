import React from "react"
import PropTypes from "prop-types"
const IconBase = ({ children, color, size, width, height, ...props }) => (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    width={width}
    height={height}
    {...props}
    style={{
      verticalAlign: "middle",
      width: width || "auto"
    }}
  >
    {children}
  </svg>
)

IconBase.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default IconBase
