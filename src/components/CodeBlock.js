import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import theme from 'prism-react-renderer/themes/nightOwl'
import t from '../styles/theme'

const CodeWrapper = styled.pre`
  width: 100%;
  min-width: 60vw;
  margin-left: 50%;
  transform: translateX(-50%);
  overflow-y: scroll;
  border-radius: 8px;
  font-family: ${t.fonts.mono};
`

// Problematic double-`pre` implementation. Further research needed
// https://github.com/whatwg/html/issues/3764

export default ({ children, className }) => {
  const language = className.replace(/language-/, '')
  // if block
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeWrapper
          className={className}
          css={css(
            {
              padding: '20px',
              marginBottom: '20px',
              marginTop: '20px',
            },
            { ...style }
          )}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </CodeWrapper>
      )}
    </Highlight>
  )
}
