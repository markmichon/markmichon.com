/** @jsx jsx */
import React, { Fragment, useEffect } from 'react'
import { jsx, useThemeUI, Styled } from 'theme-ui'
// import Helmet from 'react-helmet'
// import config from '../../data/config'
import { Global } from '@emotion/core'
import Nav from './Nav'
import Footer from './Footer'
import { useTransition } from '../components/PageTransition'

import sourceserif from '../styles/SourceSerifVariable-Roman.ttf.woff2'
import inter from '../styles/Inter.var.woff2'

const Layout = ({ children, location }) => {
  // const { toggle } = useTransition()
  const { theme } = useThemeUI()

  // useEffect(() => {}, [location])
  return (
    <Styled.root>
      <Global
        styles={theme => ({
          '@font-face': {
            fontFamily: 'source-serif-var',
            src: `local('Source Serif Variable'), url(${sourceserif}) format('truetype')`,
            fontWeight: '100 800',
          },

          '*, *:before, *:after': {
            margin: 0,
            padding: 0,
            boxSizing: 'inherit',
          },
        })}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'Inter',
            src: `url(${inter}) format('woff2')`,
            fontWeight: '100 900',
          },
        }}
      />
      <div
        sx={{
          // m: [2, 3],
          pt: [3, 4],
          clear: 'both',
          backgroundColor: 'background',
          borderRadius: 3,
          boxShadow: `0 0 4px hsl(40, 36%, 90%)`,
        }}
      >
        <Nav location={location} />
        <>{children}</>
        <Footer />
      </div>
    </Styled.root>
  )
}

export default Layout
