import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Form from "../components/form-contact"

export default ({ data }) => (
  <Layout>
    <h1>Contact {data.site.siteMetadata.title}</h1>
    <Form/>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`