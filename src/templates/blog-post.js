import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import SEO from "../components/seo"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
          <SEO title={post.frontmatter.title} description={post.frontmatter.description} keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`