require("dotenv").config()
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
    // {
    //   resolve: "gatsby-source-github-gql",
    //   options: {
    //     auth: process.env.GITHUB_TOKEN,
    //     query: `{
    //       viewer {
    //         name
    //         repositories(last: 10) {
    //           edges {
    //             node {
    //               id
    //               name
    //               url
    //               description
    //               assignableUsers(last: 5) {
    //                 edges{
    //                   node {
    //                     id
    //                     name
    //                   }
    //                 }
    //               }
    //               watchers(last: 5) {
    //                edges {
    //                 node {
    //                   id
    //                   name
    //                 }
    //               }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }

    //     `
    //   }
    // }
  ]
}
