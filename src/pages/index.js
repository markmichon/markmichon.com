import React from 'react'
import { graphql } from 'gatsby'
import { css, jsx } from '@emotion/core'

import styled from '@emotion/styled'
import { themeGet } from 'styled-system'
import Intro from '../components/Intro'

import { Link, UnstyledLink } from '../components/Links'
import { Box, Heading, Text } from '../components/Radicals'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import theme from '../styles/theme'

const Container = styled.section`
  max-width: 36em;
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;

  @media (min-width: 50rem) {
    margin-left: 15%;
  }
`

function scaleColor(modifier) {
  const lightness = 50 + 5 * modifier
  return `hsl(352, 68%, ${lightness}%)`
}

const Item = styled.li`
  margin-bottom: 1rem;
  width: auto;
  color: ${theme.colors.grey};

  h3,
  h4 {
    margin: 0;
    width: auto;
  }

  h3 {
    font-family: ${theme.fonts.serif};
    font-weight: 600;
    font-size: ${theme.fontSizes.large};

    position: relative;
    width: auto;
    transition-delay: 300ms;
    transition-property: color;
    transition-duration: 0ms;
    overflow: hidden;
    &::before {
      content: '';
      top: 0;

      position: absolute;
      background-color: ${p => scaleColor(p.id)};
      height: 100%;
      width: 100%;

      left: 0;
      transition: transform 600ms cubic-bezier(1, 0, 0.34, 1);
      transform: translateX(-101%);
    }
  }
  &:hover h3::before,
  a:focus h3::before {
    transform: translateX(101%);
  }
  h4 {
    font-size: ${theme.fontSizes.small};
    font-weight: normal;
  }

  &:hover h3,
  a:focus h3 {
    color: ${p => scaleColor(p.id)};
  }
`

const Articles = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ArticleDate = styled.span`
  display: block;
  color: ${theme.colors.greys.l};
  font-weight: 100;
  font-family: ${theme.fonts.normal};
  font-size: 0.75em;
  text-transform: uppercase;
`

const ArticleLink = styled(UnstyledLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SectionTitle = styled(Heading)`
  @media (min-width: ${theme.breakpoints[1]}) {
    transform: translate(-1em, 8em) rotate(-90deg);
    transform-origin: bottom left;
  }
`

const Index = ({ data }) => {
  const { edges: posts } = data.allMdx // eslint-disable-line
  const { edges: projects } = data.allProjectsYaml

  return (
    <Layout>
      <Nav />

      <Box
        maxWidth={theme.measure}
        // mx="1rem"
        ml={['1rem', '1rem', '15%']}
        mr="1rem"
        fontSize={[2, 3]}
        css={css({ position: 'relative' })}
      >
        <Intro />
        <div
          css={css`
            margin-bottom: 8px;
            position: relative;
          `}
        >
          <SectionTitle as="h2" fontSize={4} fontWeight="100">
            Selected Articles
          </SectionTitle>
          {/* 
          <p
          css={css`
          font-size: 14px;
          `}
          >
          The following are a few chosen articles. Have a look around the{' '}
          <Link to="#archive">Archive</Link> to see more.
        </p> */}
        </div>
        <Articles>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, idx) => (
              <Item key={post.id} id={idx}>
                <ArticleLink to={post.frontmatter.path}>
                  <h3>{post.frontmatter.title}</h3>
                  <ArticleDate>{post.frontmatter.date}</ArticleDate>
                  {/* <h4>{post.frontmatter.subtitle}</h4> */}
                </ArticleLink>
              </Item>
            ))}
        </Articles>
        <Articles>
          {projects
            .filter(project => project.node.title.length > 0)
            .map(({ node: project }, idx) => (
              <li key={project.name}>
                <p>
                  {project.title} - {project.url}
                </p>
                <p>{project.description}</p>
              </li>
            ))}
        </Articles>
      </Box>

      {/* <Footer mt={5} /> */}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 5) {
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
