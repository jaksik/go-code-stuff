import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {
  const blog = data.blog

  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={data.backgroundImage.childImageSharp.fluid}/>

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
  backgroundImage: file(relativePath: { eq: "code.png" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
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