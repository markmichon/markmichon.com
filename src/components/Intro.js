/** @jsx jsx */
import React, { useContext } from 'react'
import { jsx } from 'theme-ui'
import { Link } from './Links'
import Container from './Container'
import Wa from './Wa'

// import { useTransition } from './PageTransition'

const P = props => (
  <p
    {...props}
    sx={{ fontFamily: 'body', mb: 3, lineHeight: 'body', fontSize: [2] }}
  />
)

export default () => {
  // const { setCoords, toggle } = useTransition()

  return (
    <div sx={{ position: 'relative', display: 'block' }}>
      <Container as="section" sx={{ my: 5, zIndex: '2', position: 'relative' }}>
        <h1
          sx={{ fontFamily: 'body', fontWeight: 'light', fontSize: [4, 4, 5] }}
        >
          Mark Michon
        </h1>
        <h2
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'tight',
            fontWeight: 'heading',
            fontSize: [5, 5, 6],
          }}
        >
          Let&rsquo;s build a better web.
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
          Some of my projects include{' '}
          <Link
            sx={{ variant: 'links.inverted' }}
            href="https://github.com/markmichon/system-font-stacks"
          >
            a font stack library
          </Link>
          ,{' '}
          <Link
            sx={{ variant: 'links.inverted' }}
            href="https://github.com/markmichon/classroom-master-lockdown"
          >
            a tool to help educators manage student repos
          </Link>
          , and{' '}
          <Link
            sx={{ variant: 'links.inverted' }}
            href="https://notawhippet.com"
          >
            an app that helps identify when a dog isn't a whippet
          </Link>
          .
        </P>
        <P>
          I'm currently looking for opportunities working with modern front-end
          libraries and design systems.{' '}
          <Link
            sx={{ variant: 'links.inverted' }}
            href="mailto:hello@markmichon.com"
          >
            Get in touch.
          </Link>
        </P>
      </Container>
      <Wa
        config={{ points: 3, easing: 'sinusoidal' }}
        style={{
          width: ['5rem', '10rem', '15vw', '30vw'],
          zIndex: '1',
          position: 'absolute',
          left: ['initial', 'initial', 'calc(36rem + 15%)'],
          right: [3, 3, 'initial'],
          top: 3,
          transform: [
            'translateY(0)',
            'translateY(-4rem)',
            'translateY(-2rem)',
            'translateY(-3rem)',
          ],
          transition: 'transform 300ms ease-in-out',
        }}
        primary
      />
    </div>
  )
}
