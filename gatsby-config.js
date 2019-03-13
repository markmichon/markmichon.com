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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',

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
        path: `${__dirname}/articles`,
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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    // {
    // resolve: `gatsby-plugin-feed-generator`,
    // },
  ],
}
