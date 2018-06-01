import React from 'react'
import RehypeReact from 'rehype-react'

export default ({ components, ast }) => {
  const renderNodes = new RehypeReact({
    createElement: React.createElement,
    components: components || {},
  }).Compiler

  return <React.Fragment>{renderNodes(ast)}</React.Fragment>
}
