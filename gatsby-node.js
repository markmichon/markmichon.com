const path = require('path')
const { execSync } = require('child_process')
const shellescape = require('shell-escape')
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

const createDrafts = async ({ createPage, graphql }) => {
  const articleTemplate = path.resolve('src/templates/article.js')
  const drafts = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(drafts)/" } }
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

  const posts = drafts.data.allMdx.edges

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: articleTemplate,
      context: {
        // slug: post.node.fields.slug,
      },
    })
  })
}

const createArticles = async ({ createPage, graphql }) => {
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
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  createArticles({ createPage, graphql })

  if (process.env.NODE_ENV !== 'production') {
    createDrafts({ createPage, graphql })
  }
  // Create normal pages
}

exports.onPostBuild = ({ store }) => {
  const { pages } = store.getState()
  const root = path.join(store.getState().program.directory, 'public')

  const paths = []

  pages.forEach(page => {
    paths.push(path.join(root, page.path, 'index.html'))
  })

  // console.log(paths)

  const baseArgs = [
    'node_modules/.bin/subfont',
    '-i',
    '--inline-css',
    '--root',
    `file://${root}`,
    path.join(root, `/`, 'index.html'),
  ]
  console.log(baseArgs)
  const command = shellescape(baseArgs)
  execSync(command)
}
