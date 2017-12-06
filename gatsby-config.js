const config = require("./data/config")

module.exports = {
  siteMetadata: {
    title: `${config.siteTitle}`,
    description: `${config.siteDescription}`,
    siteUrl: "https://markmichon.com",
    author: "Mark Michon"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-preact",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/articles`,
        name: "articles"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {}
          }
        ]
      }
    }
  ]
}
