import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Img from 'gatsby-image';
// import ConnorPic from './connor.JPG'

export default ({ data }) => (
    <Layout>
    <h1>Contact {data.site.siteMetadata.title}</h1> 
    {/* <Img fluid={ConnorPic} /> */}
    <form name="contact" method="POST" data-netlify="true" action="/contact">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
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