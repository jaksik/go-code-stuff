import React, { Component } from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import Library from "../../components/library"
import PreviewRoll from '../../components/preview-roll'
import "./style.css"

export default ({ data }) => {
  const props = data.allMarkdownRemark

  return (
    <Layout>
      <div className="library">
        <Library data={data}/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "\/library/"}}
      sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
      edges {
        node {
          html
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
