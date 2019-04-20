import React from "react"
import './style.css';
import Layout from "../components/layout"
import PostList from "../components/post-list"

const IndexPage = () => (
  <Layout>
    <div id="coverImg"></div>
    <h1>Blog</h1>
    <PostList />
  </Layout>
)

export default IndexPage
