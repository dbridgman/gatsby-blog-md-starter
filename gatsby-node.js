const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem");

// CREATES SLUGS FOR BLOG POSTS
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })

    createNodeField({
      node,
      name: "slug",
      value: `${slug}`,
    })
  }
}

// CREATES BLOG POST PAGES
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
}

// SETTING UP ABSOLUTE PATHS (ALIAS)
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@queries": path.resolve(__dirname, "src/queries"),
        "@types": path.resolve(__dirname, "src/types"),
        "@images": path.resolve(__dirname, "src/images")
      }
    }
  });
}