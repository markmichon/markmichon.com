/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Link, UnstyledLink } from '../components/Links'

import SEO from '../components/SEO'

import Layout from '../components/Layout'

const Container = props => (
  <section
    {...props}
    sx={{
      maxWidth: 1,
      ml: [3, '15%'],
      mr: 3,
      position: 'relative',
    }}
  />
)

function scaleColor(modifier) {
  const lightness = 50 + 5 * modifier
  return `hsl(352, 68%, ${lightness}%)`
}

const Index = ({ data }) => {
  const { edges: posts } = data.allMdx // eslint-disable-line
  const { edges: projects } = data.allProjectsYaml

  return (
    <Layout>
      <SEO title="Articles | Mark Michon" />
      <Container>
        <ul>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, idx) => (
              <li key={post.id} id={idx}>
                <Link to={post.frontmatter.path}>
                  <h3>{post.frontmatter.title}</h3>
                  <span>{post.frontmatter.date}</span>
                  {/* <p>{post.excerpt}</p> */}
                </Link>
              </li>
            ))}
        </ul>
      </Container>

      {/* <Footer/> */}
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Articles {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
