/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Highlight, { defaultProps } from 'prism-react-renderer'

import theme from 'prism-react-renderer/themes/nightOwl'

const CodeWrapper = props => (
  <pre
    {...props}
    sx={{
      width: '100%',
      minWidth: '60vw',
      marginLeft: '50%',
      transform: 'translateX(-50%)',
      borderRadius: 2,
      fontFamily: 'monospace',
      fontSize: 1,
      overflowY: 'scroll',
      padding: 4,
      marginBottom: 4,
      marginTop: 4,
    }}
  />
)

// Problematic double-`pre` implementation. Further research needed
// https://github.com/whatwg/html/issues/3764
const aliases = {
  js: 'javascript',
  sh: 'bash',
}
export default ({ children, className: outerClassName, title, ...props }) => {
  const [language] = outerClassName.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  // if block

  return (
    <Highlight
      {...defaultProps}
      {...props}
      code={children.trim()}
      language={lang}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeWrapper className={`${outerClassName} ${className}`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token, key })}
                  sx={{ display: 'inline-block' }}
                />
              ))}
            </div>
          ))}
        </CodeWrapper>
      )}
    </Highlight>
  )
}
