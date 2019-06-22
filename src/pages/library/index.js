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

        {/* <div class="sidenav">
          <h3>Library</h3>
          {props.edges.map(({ node }) => {
            return (
              <a data-slug={node.fields.slug}>
                <p>{node.frontmatter.title}</p>
              </a>
            )
          })}
        </div> */}

        <div className="main">
          <h1>This is the Library Page!</h1>

          {/* Preview Roll for library nodes */}
          {/* <div>
            <PreviewRoll
              itemWidth="100%"
              postData={props}
              totalCount={props.totalCount}
            />
          </div> */}

          {/* Display Div */}
          <div>
            <div>
              {/* <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
            </div>
          </div>
        </div>
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
