import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Metatags from '../components/Metatags'
import Comments from "../components/Comments"
import Img from 'gatsby-image';


export default ({ data }) => {
  const post = data.markdownRemark
  // const url = data.data.site.siteMetadata.siteUrl
  const { title, description } = post.frontmatter;
  // const thumbnail =
  //   post.frontmatter.image &&
  //   post.frontmatter.image.childImageSharp.resize.src

  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
      // thumbnail={thumbnail ? url + thumbnail : url + Icon}
      // url={url}
      // pathname={data.location.pathname}
      />
      <div>
        <h1>{title}</h1>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div class="ctct-inline-form" data-form-id="668ba85a-ed12-4b66-b13c-bbf2908e2a64"></div>

      <Comments />
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

