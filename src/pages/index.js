import React from "react"
import './style.css';
import Layout from "../components/layout"
import PostList from "../components/post-list"

const IndexPage = () => (
  <Layout>
    {/* <div id="coverImg"></div> */}
    <h1>Hello World</h1>
   <div style={{ textIndent: `50px` }}>
   <strong>Go Code Stuff is a web development focused educational company. Check out our blog to learn about the latest web developer technologies or if your a complete beginner sign up for a work shop to start your path as a web developer.</strong>
   </div>
   <h2 style={{ textAlign: `center`}}>Upcoming Workshops</h2>
   <p>Currently there are no scheduled workshops.</p>
   <p>Check out the <a href="/workshops/">workshops page</a> to learn more about them.</p>
    <h2 style={{ textAlign: `center`}}>Latest Blog Posts</h2>
    <PostList />
  </Layout>
)

export default IndexPage
