const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = node.frontmatter.path || createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve('src/templates/article.js')
  const articles = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(articles)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              path
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result
  })

  const posts = articles.data.allMdx.edges

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: articleTemplate,
      context: {
        // slug: post.node.fields.slug,
      },
    })
  })

  // Create normal pages
}
