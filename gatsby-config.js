require('dotenv').config()
const config = require('./data/config')

module.exports = {
  siteMetadata: {
    title: `${config.siteTitle}`,
    description: `${config.siteDescription}`,
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
    // {
    //   resolve: '@markmichon/gatsby-source-github',
    //   options: {
    //     repository: 'mm-content',
    //     tree: true,
    //     releases: false,
    //     user: 'markmichon',
    //     retrieveImages: true,
    //     directory: 'articles',
    //     // secrets: {
    //     //   token: process.env.GITHUB_TOKEN,
    //     // },
    //   },
    // },
    // {
    // resolve: `gatsby-plugin-feed-generator`,
    // },
  ],
}
