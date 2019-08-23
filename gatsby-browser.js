import React, { Fragment } from 'react'
import {
  TransitionWrapper,
  useTransition,
} from './src/components/PageTransition'
// import { MDXProvider } from '@mdx-js/react'
// import components from './src/utils/mdx-components'

// export const wrapRootElement = ({ element }) => {
//   return <MDXProvider component={components}>{element}</MDXProvider>
// }

export const wrapPageElement = ({ element, props }) => {
  return (
    <TransitionWrapper location={props.location}>{element}</TransitionWrapper>
  )
}

export const shouldUpdateScroll = () => {
  // return false
}
