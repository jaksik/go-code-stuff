import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Form from "../components/form-contact"

export default ({ data }) => (
  <Layout>
    <h1 style={{ textAlign: `center`}}>Contact</h1>
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