/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Link, UnstyledLink } from '../components/Links'
import HR from '../components/HR'
import SEO from '../components/SEO'
import Wa from '../components/Wa'
import Layout from '../components/Layout'
import { Items, Item, ItemDate, ItemLink } from '../components/ItemList'
const Container = props => (
  <section
    {...props}
    sx={{
      mx: 'auto',
      px: 3,
      py: [5],
      maxWidth: [1, 2],
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

  return (
    <Layout>
      <SEO title="Articles | Mark Michon" />
      <Container>
        <SEO title={`Articles Archive | Mark Michon`} />
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
          Articles
        </h1>
        {/* <HR config={{ blobs: 2 }} fancy /> */}
        <Wa
          config={{ points: 3, easing: 'sinusoidal' }}
          style={{
            width: ['5rem', '10rem', '15vw'],
            zIndex: '1',
            position: 'absolute',
            // left: ['initial', 'initial', 'calc(36rem + 15%)'],
            right: [3, 3, '-10vw'],
            top: 3,
          }}
          primary
        />
        <Items>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, idx) => (
              <Item key={post.id} modifier={0} h="h2">
                <ItemLink to={post.frontmatter.path}>
                  <h2>{post.frontmatter.title}</h2>
                  <ItemDate>{post.frontmatter.date}</ItemDate>
                  <p sx={{ lineHeight: 'body', fontSize: 2 }}>{post.excerpt}</p>
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
  }
`
