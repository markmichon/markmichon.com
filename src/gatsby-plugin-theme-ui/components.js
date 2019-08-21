import React from 'react'
import { Link } from '../components/Links'
import HR from '../components/HR'
// import CodeBlock from '../components/CodeBlock'
import CodeEmbed from '../components/CodeEmbed'

export default {
  a: props => <Link {...props} />,
  hr: HR,
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
