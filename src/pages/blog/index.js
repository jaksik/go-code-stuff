import React from "react"
import PostList from "../../components/post-list"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./../style.css"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <a href="/blog/frameworks">Frameworks -- </a>
    <a href="/blog/machine-learning">Machine Learning -- </a>
    <a href="/blog/aws">AWS -- </a>
    <a href="/blog/iot">IOT -- </a>
    <h1>Blog</h1>
    <h5>Latest Posts</h5>
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