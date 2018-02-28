import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Intro, SectionHeading, Footer } from "../components"
import { ArticleList, ArticleListItem } from "../components/SectionList"
import theme from "../styles/theme"
const Section = styled.section`
  color: ${p => p.theme.copy};
  padding: ${p => p.theme.baseUnit};
  ${"" /* background-color: ${p => (p.bgColor ? p.bgColor : `inherit`)}; */} width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const HomeContainer = styled.div`
  width: 100%;
  @media (min-width: 832px) {
    ${"" /* height: 100vh; */}
    ${"" /* display: grid; */}
    ${"" /* grid-template-columns: repeat(2, 1fr); */}
  }
`

const HomeScrollView = styled.div`
  background-color: ${theme.background};

  @media (min-width: 832px) {
    height: 100vh;
    overflow-y: scroll;
  }
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
          <SectionHeading.ViewMore>View More</SectionHeading.ViewMore>
        </SectionHeading>
        <ArticleList>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <ArticleListItem key={post.id}>
                <h3>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p>{post.frontmatter.subtitle}</p>
              </ArticleListItem>
            ))}
        </ArticleList>
      </Section>
      <Section>
        <SectionHeading>
          <SectionHeading.Heading title="Projects">
            Selected Projects
          </SectionHeading.Heading>
          <SectionHeading.ViewMore>View More</SectionHeading.ViewMore>
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
