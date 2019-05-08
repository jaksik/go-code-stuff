import React from "react"
import Layout from "../components/layout"
import CardContainer from "../components/card-container"
import PostList from "../components/post-list"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const IndexPage = () => (
  <Layout>
    <h1>Hello World</h1>
    <div style={{ textIndent: `50px` }}>
      <p>Go Code Stuff is a web development focused educational company. Check out our blog to learn about the latest web developer technologies or if your a complete beginner sign up for a class to start your path as a web developer.</p>
    </div>
    <h2 style={{ textAlign: `center` }}>Upcoming Classes</h2>
    <CardContainer/>
    <h2 style={{ textAlign: `center` }}>Latest Blog Posts</h2>
    <PostList />
  </Layout>
)

export default IndexPage
