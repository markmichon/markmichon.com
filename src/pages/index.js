/**@jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'

import { jsx } from 'theme-ui'
import Intro from '../components/Intro'

import { Link, UnstyledLink } from '../components/Links'
import HR from '../components/HR'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { breakpointStrings } from '../styles/theme'

import Wa from '../components/Wa'

function scaleColor(modifier) {
  const lightness = 50 + 5 * modifier
  return `hsl(352, 68%, ${lightness}%)`
}

const Items = ({ data, filter, children, ...props }) => (
  <ul
    {...props}
    sx={{
      listStyle: 'none',
      mx: 0,
      mt: 0,
      mb: 3,
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  >
    {children}
  </ul>
)

// TODO: Refactor to cause less rule duplication
const Item = props => {
  const { modifier } = props
  let color = scaleColor(modifier)
  return (
    <li
      {...props}
      sx={{
        mb: 3,
        width: 'auto',
        color: 'accent',
        position: 'relative',
        'h3, h4': {
          margin: 0,
          width: 'auto',
        },
        h3: {
          fontFamily: 'heading',
          fontWeight: '500',
          color: 'text',
          fontSize: [3, 4],
          position: 'relative',
          transition: 'color 0ms linear 300ms',
          overflow: 'hidden',
          '&::before': {
            content: "''",
            top: 0,
            left: 0,
            position: 'absolute',
            backgroundColor: color,
            height: '100%',
            width: '100%',
            transition: 'transform 600ms cubic-bezier(1,0,0.34,1)',
            transform: `translateX(-101%)`,
          },
        },
        '&:hover h3,  a:focus h3': {
          color: color,
        },
        '&:hover h3::before, a:focus h3::before': {
          transform: 'translateX(101%)',
        },
        h4: {
          fontSize: 2,
          fontWeight: 'body',
        },
      }}
    />
  )
}
const ItemDate = props => (
  <span
    {...props}
    sx={{
      display: 'block',
      color: 'muted',
      fontWeight: 'light',
      fontFamily: 'body',
      fontSize: '1',
      textTransform: 'uppercase',
    }}
  />
)

const ItemLink = props => (
  <UnstyledLink
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  />
)

const SectionTitle = props => {
  return (
    <h2
      {...props}
      sx={{
        fontSize: [3, 4],
        fontWeight: 'light',
        fontFamily: 'heading',
        display: 'inline-block',
        position: 'relative',
        color: 'white',
        py: 2,
        pr: 3,
        mb: 3,
        paddingLeft: 'calc(1rem + 15vw)',
        marginLeft: `calc((1rem + 15vw) * -1)`,
        bg: 'primary',
        lineHeight: '1',
      }}
    />
  )
}

const Index = ({ data, location }) => {
  const { edges: posts } = data.allMdx // eslint-disable-line
  const { edges: projects } = data.allProjectsYaml

  return (
    <Layout location={location}>
      <SEO title="Mark Michon" />
      <Intro />
      <Container>
        <SectionTitle>Selected Articles</SectionTitle>

        <Items>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, idx) => (
              <Item key={post.id} modifier={idx}>
                <ItemLink to={post.frontmatter.path}>
                  <h3>{post.frontmatter.title}</h3>
                  {/* <ItemDate>{post.frontmatter.date}</ItemDate> */}
                  {idx === 0 ? (
                    <p sx={{ lineHeight: 'body', fontSize: 2 }}>
                      {post.excerpt}
                    </p>
                  ) : null}
                </ItemLink>
              </Item>
            ))}
        </Items>
        {/* <HR fancy /> */}
        <SectionTitle>Open Source Projects</SectionTitle>
        <Items>
          {projects
            .filter(project => project.node.title.length > 0)
            .map(({ node: project }, idx) => (
              <Item key={idx} modifier={idx}>
                <ItemLink to={project.url}>
                  <h3>{project.title}</h3>
                  <p sx={{ fontSize: 2, fontWeight: 'body', mb: 0 }}>
                    {project.description}
                  </p>
                </ItemLink>
              </Item>
            ))}
        </Items>
      </Container>

      {/* <Footer/> */}
    </Layout>
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 6) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            subtitle
            path
          }
        }
      }
    }
    allProjectsYaml {
      edges {
        node {
          title
          url
          description
        }
      }
    }
  }
`
