// Standard Gubbins
import * as React from 'react';
import { graphql, Link } from 'gatsby';

// Type Imports
import { PostListing } from "src/types/blog";

const Blog = ( props: PostListing ) => {
    const posts = props.data.allMarkdownRemark.edges;

    return (
        <div className="container m-auto">
            <h1>Blog Listing</h1>
            {posts.map(postItem => {
                const post = postItem.node;
                return(
                    <div className="mb-8">
                        <h2>{post.frontmatter.title}</h2>
                        <small>{post.frontmatter.date}</small>
                        <p>{post.excerpt}</p>
                        <Link to={post.fields.slug} className="font-bold">Read More</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog;

export const query = graphql`
    {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    }
`