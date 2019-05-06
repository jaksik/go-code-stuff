import React from "react"
import './style.css';
import Layout from "../components/layout"
import PostList from "../components/post-list"

const IndexPage = () => (
  <Layout>
    <h1>Coding Workshops</h1>
    <h3>Check Back Soon for Up Coming Workshops</h3>
    <strong>Web Development Intro Workshop</strong>
    <p>Learn....</p>
    <ul>
      <li>How the internet works</li>
      <li>The options for making a website</li>
      <li>How to code in HTML and CSS</li>
      <li>Strategies for learning how to code on your own</li>
      <li>Options for free web site hosting</li>
    </ul>
   
  </Layout>
)

export default IndexPage
