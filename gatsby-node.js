const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const articleTemplate = path.resolve("src/templates/article.js")

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: articleTemplate,
        context: {}
      })
    })
  })
}

// Remove trailing slashes

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise(resolve => {
    const oldPath = page.path
    page.path = page.path === "/" ? page.path : page.path.replace(/\/$/, "")
    if (page.path !== oldPath) {
      deletePage({ path: oldPath })
      createPage(page)
    }
    resolve()
  })
}
