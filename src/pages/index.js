import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PreviewRoll from '../components/preview-roll'
import "./style.css"

const IndexPage = ({ data }) => {
  const blog = data.blog
  const meetups = data.meetups
  const library = data.library
  console.log("meetups: ", meetups)

  return (
    <Layout>
      <SEO title="Home" />
      <h3>Blog</h3>
      <p>Check out our coding blog informing you about the latest tech trends and demonstrating how to use the technologies.</p>
      <PreviewRoll
        itemWidth="50%"
        postData={blog}
      />
      <h3>Classes</h3>
      <p>Attend one of our classes or meetups.</p>
      <PreviewRoll
        itemWidth="100%"
        postData={meetups}
      />
      <h3>Library</h3>
      <p>Check out our library of useful components and code snippets</p>
      <PreviewRoll
        itemWidth="50%"
        postData={library}
        // totalCount={props.totalCount}
      />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/">Go to page 2</Link> */}
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
  meetups: allMarkdownRemark(                  
    filter: { fileAbsolutePath: {regex: "\/classes/"}}
  ) {
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
  blog: allMarkdownRemark (                  
   filter: { fileAbsolutePath: {regex: "\/blog/"}}
  ) {
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

  library: allMarkdownRemark (                  
    filter: { fileAbsolutePath: {regex: "\/library/"}}
   ) {
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