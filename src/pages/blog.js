import React from "react"
import PostList from "../components/post-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style.css"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Blog</h1>
    <PostList/>
  </Layout>
)

export default BlogPage

// export const query = graphql`
//     query {
//         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//             totalCount
//             edges {
//                 node {
//                     id
//                     frontmatter {
//                         title
//                         date(formatString: "DD MMMM, YYYY")
//                     }
//                     fields {
//                         slug
//                       }
//                     excerpt
//                 }
//             }
//         }
//     }
//   `