/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Grid } from '../components/grids.js'
import { relative } from 'path'

const LabelSelector = ({ value, group, update }) => (
  <div sx={{ position: 'relative', display: 'inline-block' }}>
    <input
      type="checkbox"
      id={`${value}Selector`}
      name={group}
      onChange={update}
      value={value}
      sx={{
        height: '100%',
        left: 0,
        opacity: 0.001,
        position: 'absolute',
        top: 0,
        width: '100%',
        pointerEvents: 'none',
        '&:checked + label': {
          color: 'primary',
        },
      }}
    />
    <label
      htmlFor={`${value}Selector`}
      sx={{
        color: 'muted',
        fontSize: 4,
        fontWeight: 'heading',
        fontFamily: 'heading',
        cursor: 'pointer',
      }}
    >
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </label>
  </div>
)

const CategoryToggle = ({ filterResults }) => {
  const [state, setState] = useState({
    teaching: true,
    development: true,
    experiments: true,
  })
  const handleChange = e => {
    // 1. Update State
    console.log(e.target.checked)
    setState({
      ...state,
      [e.target.value]: e.target.checked,
    })
    // 2. Send changes to filterResults
  }
  return (
    <form sx={{ position: 'relative', mx: 'auto', textAlign: 'center' }}>
      {Object.keys(state).map(category => (
        <LabelSelector
          key={category}
          value={`${category}`}
          group="work-category"
          update={handleChange}
        />
      ))}
      {/* <span aria-hidden="true">,</span>
      <LabelSelector
        value="development"
        group="work-category"
        update={handleChange}
      />
      <span aria-hidden="true">,</span>
      <LabelSelector
        value="experiments"
        group="work-category"
        update={handleChange}
      /> */}
    </form>
  )
}

export default ({ location, ...props }) => {
  return (
    <Layout location={location}>
      <SEO title={`Work | Mark Michon`} />
      <section
        sx={{
          mx: 'auto',
          px: 3,
          py: [5],
          maxWidth: [1, 2],
        }}
      >
        <h1
          sx={{
            fontFamily: 'heading',
            textAlign: 'center',
            mt: 2,
            mb: 5,
            fontSize: [5, 6],
            fontWeight: '600',
          }}
        >
          Selected Work
        </h1>
        <CategoryToggle />
      </section>
    </Layout>
  )
}
