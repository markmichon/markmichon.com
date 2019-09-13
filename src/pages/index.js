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
import { Items, Item, ItemDate, ItemLink } from '../components/ItemList'
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
              <Item key={post.id} modifier={idx} h="h3">
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
              <Item key={idx} modifier={idx} h="h3">
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
