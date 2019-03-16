import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Img from 'gatsby-image';
// import ConnorPic from './connor.JPG'

export default ({ data }) => (
    <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    {/* <Img fluid={ConnorPic} /> */}
    <p>
      Hello World, my name is Connor, I'm the creator of Go Code Stuff. This is a passion project with two main motivators...
      1. To help others learn to Code
      and...
      2. To help my self learn to Code
      I firmly believe in learning from teaching. 
      I wrote my first lines of code over 10 years ago now. Nothing to impressive, just a little HTML on a platform called "MySpace".
      That's really all of my experience with coding until late 2018 when I decided to enroll in a coding bootcamp.
      The bootcamp was a game changer for me. Not only did I cut out years of trying to learn to code on my own, but the bootcamp taught me best practices for learning new technologies which has really opened doors.
      If you've spent any time researching the vast amounts of technology out there, you would know that 
       </p>
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