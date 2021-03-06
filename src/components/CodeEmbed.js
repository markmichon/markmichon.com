/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

function Block(props) {
  const { service, name, file = 'index.js' } = props
  if (name && service === 'codesandbox') {
    return (
      <iframe
        src={`https://codesandbox.io/embed/${name}?autoresize=1&fontsize=14&module=%2F${file}&view=editor`}
        title="custom-mdx-footnotes"
        style={{
          width: '100%',
          height: '500px',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    )
  }
  if (name && service === 'glitch') {
    return (
      <iframe
        title={`${name} on ${service}`}
        allow="geolocation; microphone; camera; midi; vr; encrypted-media"
        src={`https://glitch.com/embed/#!/embed/${name}?path=${file}&previewSize=0`}
        alt={`${name} on ${service}`}
        style={{ minHeight: '500px', width: '100%', border: 0 }}
      />
    )
  }
}

function CodeEmbed(props) {
  return (
    <div
      sx={{
        mb: 4,
        width: '100%',
        minWidth: '60vw',
        ml: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Block {...props} />
    </div>
  )
}

export default CodeEmbed
