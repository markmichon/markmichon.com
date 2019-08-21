/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from './Links'

const P = props => (
  <p
    {...props}
    sx={{ fontFamily: 'body', mb: 3, lineHeight: 'extra', fontSize: 'body' }}
  />
)

export default () => (
  <div sx={{ my: 6, zIndex: '2', maxWidth: 1 }}>
    <h1 sx={{ fontFamily: 'body', fontWeight: 'light', fontSize: 5 }}>
      Mark Michon
    </h1>
    <h2
      sx={{
        fontFamily: 'heading',
        letterSpacing: 'tight',
        fontWeight: 'heading',
      }}
    >
      Building a Better Web.
    </h2>
    <P
      sx={{
        my: '1rem',
      }}
    >
      I am a front-end software developer working in education where I teach
      newcomers to build the web. I care deeply about approachable design,
      accessible applications, and the power of the open web.
    </P>
    <P>
      I'm currently looking for opportunities working with modern front-end
      libraries and design systems.{' '}
      <Link href="mailto:hello@markmichon.com">Get in touch.</Link>
    </P>
    <P>
      Some of my projects include{' '}
      <Link href="https://github.com/markmichon/system-font-stacks">
        a font stack library
      </Link>
      ,{' '}
      <Link href="https://github.com/markmichon/classroom-master-lockdown">
        a tool to help educators manage student repos
      </Link>
      , and{' '}
      <Link href="https://notawhippet.com">
        an app that helps identify when a dog isn't a whippet
      </Link>
      .
    </P>
  </div>
)
