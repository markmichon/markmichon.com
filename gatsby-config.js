require('dotenv').config()
const data = require('./data/config')

const config = {
  siteMetadata: {
    title: `${data.siteTitle}`,
    description: `${data.siteDescription}`,
    siteUrl: 'https://markmichon.com',
    author: 'Mark Michon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mark Michon',
        short_name: 'Mark Michon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: 'hsl(352, 68%, 50%)',
        display: 'browser',
        icon: 'img/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          articles: require.resolve('./src/templates/article.js'),
          default: require.resolve('./src/templates/mdx.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/articles`,
        name: 'articles',
      },
    },
  ],
}

const feedConfig = {
  resolve: 'gatsby-plugin-feed-generator',
  options: {
    generator: `GatsbyJS`,
    rss: true, // Set to false to stop rss generation
    json: true, // Set to false to stop json feed generation
    siteQuery: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              author
            }
          }
        }
      `,
    // The plugin requires frontmatter of date, path(or slug/url), and title at minimum
    feedQuery: `
          {
            allMdx(
              sort: {order: DESC, fields: [frontmatter___date]}, 
              limit: 100,  
              ) {
              edges {
                node {
                  excerpt
                  frontmatter {
                    date
                    path
                    title
                  }
                }
              }
            }
          }
          `,
  },
}

// handle drafts
if (process.env.NODE_ENV === 'development') {
  const draftsConfig = {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content/drafts`,
      name: 'drafts',
    },
  }
  config.plugins.push(draftsConfig)
}

module.exports = config
