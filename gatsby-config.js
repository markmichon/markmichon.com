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
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-yaml',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-theme-style-guide',
      options: {
        basePath: '/design-system',
      },
    },
    {
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
        feeds: [
          {
            name: 'feed',
            query: `
            {
              allMdx(
                sort: {order: DESC, fields: [frontmatter___date]},
                limit: 100,
                filter: { fileAbsolutePath: { regex: "/(articles)/" } }
                ) {
                edges {
                  node {
                    excerpt(pruneLength: 250)
                    html
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
            normalize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  html: edge.node.html,
                }
              })
            },
          },
        ],
      },
    },
    // 'gatsby-plugin-subfont',
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
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          articles: require.resolve('./src/templates/article.js'),
          drafts: require.resolve('./src/templates/article.js'),
          // default: require.resolve('./src/templates/mdx.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: ['gatsby-remark-images'],
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
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: `
          .accessibility-error {
            box-shadow: 0 0 3px 1px #f00;
            background-color: rgba(255, 0, 0, 0.25);
            position: relative;
          }
          .accessibility-error:before {
            content: "A11Y";
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            font-size: 10px;
            background-color: rgba(255, 0, 0, 0.5);
            transform: translateY(-100%);
          }
        `,
      },
    },
  ],
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
