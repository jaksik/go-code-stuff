import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';


export default ({ data }) => {
  const post = data.markdownRemark
  const thumbnail =
        post.frontmatter.image &&
        post.frontmatter.image.childImageSharp.resize.src

  return (
    <Layout>
      <div>
      {thumbnail && <Img fluid={post.frontmatter.image.childImageSharp.fluid} />}
        <h1>{post.frontmatter.title}</h1>
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

//   image {
      //     childImageSharp {
      //       resize(width: 1500, height: 1500) {
      //         src
      //       }
      //       fluid(maxWidth: 786) {
      //         ...GatsbyImageSharpFluid
      //       }
      //     }
      //  }