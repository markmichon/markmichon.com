import React, { Fragment as F } from 'react'
import { css } from '@emotion/core'
import { Link } from './Links'
import { Heading, Box, Text } from './Radicals'

export default () => (
  <Box my={6} css={css({ zIndex: '2' })}>
    <Heading as="h1" fontFamily="normal" fontWeight="100" fontSize="2em">
      Mark Michon
    </Heading>
    <Heading
      as="h2"
      textStyle="serifHeading"
      fontSize={['1.675em', '2em', '2.25em']}
    >
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
      I'm currently looking for opportunities working with modern front-end
      libraries and design systems.{' '}
      <Link href="mailto:hello@markmichon.com">Get in touch.</Link>
    </Text>
    <Text>
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
    </Text>
  </Box>
)
