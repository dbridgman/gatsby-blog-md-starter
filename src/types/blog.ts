export interface Post {
    data: {
        markdownRemark: {
            html: string;
            frontmatter: {
                title: string;
                date: string;
            }
        }
    }
}

export interface PostListing { 
    data: {
        allMarkdownRemark: {
            edges: [
                {
                    node: {
                        fields: {
                            slug: string;
                        };
                        excerpt: string;
                        frontmatter: {
                            title: string;
                            date: string;
                        };
                    }
                }
            ]
        }
    }
}