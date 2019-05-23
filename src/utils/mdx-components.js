import React from 'react'
import { Link } from '../components/Links'
import CodeBlock from '../components/CodeBlock'
import CodeEmbed from '../components/CodeEmbed'
import { Heading, Box, Text } from '../components/Radicals'

const P = props => (
  <Text
    {...props}
    lineHeight="1.7"
    fontSize="1em"
    marginBottom={3}
    fontFamily="serif"
  />
)

const BlockQuote = props => <Box as="blockquote" {...props} />

const components = {
  a: props => <Link {...props} />,
  p: P,
  h2: props => <Heading as="h2" my={3} fontWeight="600" {...props} />,
  h3: props => <Heading as="h3" {...props} />,
  wrapper: ({ children, ...props }) => {
    const updatedChildren = children.map(child => {
      if (child.props.className === 'footnotes') {
        return <Box key={child.props.className} {...child.props} />
      }
      return child
    })
    return <>{updatedChildren}</>
  },
  code: props => {
    return <CodeBlock {...props} />
  },
  CodeEmbed,
}

export default components
