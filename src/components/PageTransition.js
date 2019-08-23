/** @jsx jsx */
import React, { useState, useEffect, useContext, createContext } from 'react'
import { jsx, useThemeUI } from 'theme-ui'

export const TransitionContext = createContext([{}, () => {}])

export const useTransition = () => {
  const [state, setState] = useContext(TransitionContext)

  function toggle() {
    console.log(`Switching from ${state.isOpen} to ${!state.isOpen}`)
    setState(state => ({ ...state, isOpen: !state.isOpen }))
  }
  function on() {
    setState(state => ({ ...state, isOpen: true }))
  }
  function off() {
    setState(state => ({ ...state, isOpen: false }))
  }

  function setCoords({ x, y }) {
    console.log('Setting coords')
    setState(state => ({ ...state, x, y }))
  }
  return {
    setCoords,
    toggle,
    on,
    off,
    isOpen: state.isOpen,
    coords: { x: state.x, y: state.y },
  }
}

export const TransitionProvider = ({ children }) => {
  const [state, setState] = useState({ isOpen: false, x: 0, y: 0 })
  return (
    <TransitionContext.Provider value={[state, setState]}>
      {children}
    </TransitionContext.Provider>
  )
}

const Screen = ({ config: { open, x = 0, y = 0 }, ...props }) => {
  const { theme } = useThemeUI()

  return (
    <div
      {...props}
      css={{
        transition: `transform 300ms ease-in-out`,
        willChange: 'transform',
        zIndex: 99999,
        width: '100vw',
        height: '100vh',
        transform: open ? 'translateX(0)' : 'translateX(-100vw)',
        backgroundColor: theme.colors.primary,
        position: 'fixed',
        // borderRadius: '50%',
        // transform: 'scale(2)',
      }}
    />
  )
}

export const Cover = () => {
  const { coords, isOpen } = useTransition()
  return (
    <Screen
      config={{ open: isOpen || false, x: coords.x || 0, y: coords.y || 0 }}
    />
  )
}

const delay = ms => {
  let id
  const promise = new Promise(resolve => {
    id = setTimeout(resolve, ms)
  })

  promise['CANCEL'] = () => {
    clearTimeout(id)
  }
  return promise
}

const View = ({ children, location }) => {
  // const [opacity, setOpacity] = useState(0)
  const [views, updateViews] = useState([{ children, location }])
  const { on, off } = useTransition()
  useEffect(() => {
    function add(children) {
      on()

      updateViews(oldState => [
        ...oldState,
        {
          location,
          children,
        },
      ])
    }

    function remove() {
      updateViews(oldState => {
        oldState.shift()
        return oldState
      })
      off()
    }

    if (location.key !== views[0].location.key) {
      add(children)
      delay(300).then(() => {
        remove()
      })
    }
    if (views.length > 2) remove()
  }, [location])

  return <>{views[0].children}</>
}

export const TransitionWrapper = ({ children, location }) => (
  <TransitionProvider>
    {/* <Cover /> */}
    {/* <View location={location}>{children}</View> */}
    {children}
  </TransitionProvider>
)
