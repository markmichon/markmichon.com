import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"
import Intro from "../components/Intro"
import {
  SectionHeadingTitle,
  SectionHeadingContainer,
  SectionHeadingDetails
} from "../components/SectionHeading"
import Footer from "../components/Footer"
import {
  ArticleList,
  ArticleListDate,
  ArticleListItem,
  ArticleListLink
} from "../components/ArticleList"
import { Link, UnstyledLink } from "../components/Links"

import Nav from "../components/Nav"
import CoreLayout from "../layouts"
import theme from "../styles/theme"

const Section = styled.section`
  color: ${theme.color.black};
  max-width: calc(100% - 2rem);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: visible;

  @media (min-width: ${theme.breakpoints.m}) {
    max-width: 60%;
  }

  @media (min-width: ${theme.breakpoints.l}) {
    max-width: 50%;
  }
`

const lineColor = `hsl(38,32%,90%)`
const HomeContainer = styled.div`
  background-size: 100% 0;
  background-repeat: no-repeat;

  transition: background-size 1000ms linear;
  &:hover {
    ${"" /* background-size: 100% 100%; */};
  }
  @media (min-width: ${theme.breakpoints.l}) {
    background-image: linear-gradient(
        90deg,
        transparent,
        transparent 15%,
        ${lineColor} 15%,
        ${lineColor} calc(15% + 1px),
        transparent calc(15% + 1px)
      ),
      linear-gradient(
        90deg,
        transparent,
        transparent 25%,
        ${lineColor} 25%,
        ${lineColor} calc(25% + 1px),
        transparent calc(25% + 1px)
      ),
      linear-gradient(
        90deg,
        transparent,
        transparent 50%,
        ${lineColor} 50%,
        ${lineColor} calc(50% + 1px),
        transparent calc(50% + 1px)
      ),
      linear-gradient(
        90deg,
        transparent,
        transparent 75%,
        ${lineColor} 75%,
        ${lineColor} calc(75% + 1px),
        transparent calc(75% + 1px)
      ),
      linear-gradient(
        90deg,
        transparent,
        transparent 85%,
        ${lineColor} 85%,
        ${lineColor} calc(85% + 1px),
        transparent calc(85% + 1px)
      );
  }
`

class Index extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark

    return (
      <CoreLayout>
        <HomeContainer>
          <Nav />
          <Intro />
          <Section bgColor={theme.color.white}>
            <SectionHeadingContainer>
              <SectionHeadingTitle title="Articles">
                Selected Articles
              </SectionHeadingTitle>

              <SectionHeadingDetails>
                The following are a few chosen articles. Have a look around the{" "}
                <Link to="#">Archive</Link> to see more.
              </SectionHeadingDetails>
            </SectionHeadingContainer>
            <ArticleList>
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => (
                  <ArticleListItem key={post.id}>
                    <ArticleListLink to={post.frontmatter.path}>
                      <ArticleListDate>{post.frontmatter.date}</ArticleListDate>
                      <h3>{post.frontmatter.title}</h3>
                      <h4>{post.frontmatter.subtitle}</h4>
                    </ArticleListLink>
                  </ArticleListItem>
                ))}
            </ArticleList>
          </Section>
        </HomeContainer>
      </CoreLayout>
    )
  }
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
