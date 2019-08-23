import React from 'react'
import { Link } from '../components/Links'
import HR from '../components/HR'
import CodeBlock from '../components/CodeBlock'
import CodeEmbed from '../components/CodeEmbed'
import Prism from '@theme-ui/prism'
export default {
  a: props => <Link {...props} />,
  hr: props => <HR {...props} fancy />,
  pre: props => props.children,
  code: CodeBlock,
  // wrapper: ({ children }) => {
  //   const updatedChildren = children.map(child => {
  //     if (child.props.className === 'footnotes') {
  //       return <div key={child.props.className} {...child.props} />
  //     }
  //     return child
  //   })
  //   return <>{updatedChildren}</>
  // },
  CodeEmbed,
}
