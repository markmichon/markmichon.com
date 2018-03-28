import React from "react"
import { Link, UnstyledLink } from "../components/Links"
import Helmet from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Intro, SectionHeading, Footer } from "../components"
// import { ArticleList, ArticleListItem } from "../components/SectionList"
import theme from "../styles/theme"
import { paddingSetup } from "../styles/utils"
const Section = styled.section`
  color: ${p => p.theme.copy};
  max-width: calc(100% - 2rem);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${theme.breakpoints.m}) {
    max-width: 60%;
  }

  @media (min-width: ${theme.breakpoints.l}) {
    max-width: 50%;
  }
`

const HomeContainer = styled.div`
  width: 100%;
  @media (min-width: ${theme.breakpoints.m}) {
  }
`
const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ArticleListItem = styled.li`
  margin-bottom: 1rem;
  width: 100%;
  color: ${theme.black};
  h3,
  h4 {
    transition: color 400ms ease-in-out;
    margin: 0;
  }

  h3 {
    font-family: ${theme.serif};
    font-weight: bold;
    font-size: ${theme.sizes.xl};
  }
  h4 {
    font-size: ${theme.sizes.s};
    font-weight: normal;
  }

  &:hover h3,
  &:hover h4 {
    color: ${theme.color.brand};
  }
`

const ArticleDate = styled.span`
  display: block;
  color: ${theme.color.medium};
  font-weight: bold;
  font-family: ${theme.sansSerif};
  font-size: ${theme.sizes.xs};
`

const Index = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <HomeContainer>
      <Intro />

      <Section bgColor={theme.light}>
        <SectionHeading>
          <SectionHeading.Heading title="Articles">
            Selected Articles
          </SectionHeading.Heading>
          {/* <SectionHeading.ViewMore>View More</SectionHeading.ViewMore> */}
          <SectionHeading.Details>
            The following are a few chosen articles. Have a look around the
            Archive to see more.
          </SectionHeading.Details>
        </SectionHeading>
        <ArticleList>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <ArticleListItem key={post.id}>
                <UnstyledLink to={post.frontmatter.path}>
                  <ArticleDate>{post.frontmatter.date}</ArticleDate>
                  <h3>{post.frontmatter.title}</h3>
                  <h4>{post.frontmatter.subtitle}</h4>
                </UnstyledLink>
              </ArticleListItem>
            ))}
        </ArticleList>
      </Section>
      <Section>
        <SectionHeading>
          <SectionHeading.Heading title="Projects">
            Selected Projects
          </SectionHeading.Heading>
          {/* <SectionHeading.ViewMore>View More</SectionHeading.ViewMore> */}
        </SectionHeading>
        <p>
          Coming soon! For now, have a look at{" "}
          <a href="https://github.com/markmichon" title="Mark Michon on GitHub">
            GitHub
          </a>
        </p>
      </Section>
      {/* <Footer /> */}
    </HomeContainer>
  )
}
Index.propTypes = {
  data: PropTypes.object.isRequired
}
export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
