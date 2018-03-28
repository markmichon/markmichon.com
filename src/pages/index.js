import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Intro, SectionHeading, Footer } from "../components"
// import { ArticleList, ArticleListItem } from "../components/SectionList"
import theme from "../styles/theme"
import { paddingSetup } from "../styles/utils"
const Section = styled.section`
  color: ${p => p.theme.copy};
  width: 100%;
`

const HomeContainer = styled.div`
  width: 100%;
  @media (min-width: 832px) {
    ${"" /* height: 100vh; */}
    ${"" /* display: grid; */}
    ${"" /* grid-template-columns: repeat(2, 1fr); */}
  }
`
const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ArticleListItem = styled.li`
  margin-bottom: -0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  &:hover h3::before {
    right: 0;
  }

  &:hover h3 {
    color: ${theme.light};
  }
`
const ArticleHeading = styled.h3`
  color: ${theme.copy};
  font-family: ${theme.serif};
  font-weight: normal;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  width: auto;
  margin: 0;
  z-index: 2;
  position: relative;
  transition: color 400ms ease-in-out;

  ${paddingSetup("left")};

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: -1rem;
    top: 0;
    bottom: 0;
    right: calc(100% + 1rem);
    transition: all 300ms ease-in-out;
    background-color: hsl(211, 13%, 35%);
  }
`
const ArticleSubtitle = styled.p`
  background-color: hsl(42, 36%, 95%);
  padding: 2rem 2rem 0.5rem;
  margin: 0;
  transform: translate(0, -1.5rem);
  z-index: 1;

  ${"" /* ${paddingSetup("left")}; */};
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
        </SectionHeading>
        <ArticleList>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <ArticleListItem key={post.id}>
                {/* <Link to={post.frontmatter.path}> */}
                <ArticleHeading>{post.frontmatter.title}</ArticleHeading>
                {/* <ArticleSubtitle>{post.frontmatter.subtitle}</ArticleSubtitle> */}
                {/* </Link> */}
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
