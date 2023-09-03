import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `dbridgman.co.uk`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
        "gatsby-plugin-root-import",
        "gatsby-plugin-postcss", 
        {
            resolve: "gatsby-plugin-google-gtag", 
            options: {
                trackingIds: [
                    "GA-TRACKING_ID", // Google Analytics / GA
                ],
            }
        },
        "gatsby-plugin-image", 
        "gatsby-plugin-sitemap", 
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png",
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp", 
        "gatsby-transformer-sharp", 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
               "name": "blog",
               "path": "./src/blog/"
            },
            __key: "blog"
        },
        "gatsby-transformer-remark"
    ]
};

export default config;
