import * as React from 'react';
import { graphql } from 'gatsby';

// Types
import { Post } from "src/types/blog";

const PostTemplate = ( props: Post ) => {
    const post = props.data.markdownRemark;
     
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export default PostTemplate;

export const query = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`