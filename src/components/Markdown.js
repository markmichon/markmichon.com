import React from "react"
import rehypeReact from "rehype-react"

export const MarkdownAST = ({ components, ast }) => {
  const renderNodes = new rehypeReact({
    createElement: React.createElement,
    components: components || {}
  }).Compiler

  return <React.Fragment>{renderNodes(ast)}</React.Fragment>
}
