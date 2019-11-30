import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PreviewRoll from '../components/preview-roll'
import "./style.css"

const IndexPage = ({ data }) => {
  const blog = data.blog

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Go Code Stuff</h1>

      <div className="section">
        <h2>Blog</h2>
        <p>Check out our coding blog informing you about the latest tech trends and demonstrating how to use the technologies.</p>
        <PreviewRoll
          itemWidth="50%"
          postData={blog}
          class="items section"
        />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query{
  site {
     siteMetadata {
       title
     }
  }
  blog: allMarkdownRemark (filter: { fileAbsolutePath: {regex: "\/blog/"}}) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}
`