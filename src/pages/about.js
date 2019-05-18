import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>About {data.site.siteMetadata.title}</h1>
          <p><strong>Mission: </strong>To make coding normal</p>
          <p><strong>Author and Creator: </strong><a href="https://connorjaksik.com">Connor Jaksik</a></p>
        </div>
      </div>
    </section>
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