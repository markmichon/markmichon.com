import React, { Fragment as F } from 'react'
import { css } from '@emotion/core'
import { Link } from './Links'
import { Heading, Box, Text } from './Radicals'

export default () => (
  <div
    css={css`
      margin: 3rem 0;
    `}
  >
    <Heading as="h1" font="serif" weight="400" fontSize={4}>
      Mark Michon
    </Heading>
    {/* <Tagline>Let&#1370;s build a better web.</Tagline> */}
    <Heading as="h2" fontFamily="serif" weight="800" fontSize={5}>
      Building a Better Web.
    </Heading>
    <Text
      css={css`
        margin-top: 1rem;
        margin-bottom: 1rem;
      `}
    >
      I am a front-end software developer working in education where I teach
      newcomers to build the web. I care deeply about approachable design,
      accessible applications, and the power of the open web.
    </Text>
    <Text>
      Some of my projects include{' '}
      <Link href="https://github.com/markmichon/system-font-stack">
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
    </Text>
  </div>
)
