import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <div style={{ textIndent: `50px` }}>
    <p><strong>Mission: </strong>To make coding normal</p>
    <p><strong>Author and Creator: </strong><a href="https://connorjaksik.com">Connor Jaksik</a></p>
    {/* <strong>The goal of Go Code Stuff is... To introduce and explain the latest most relevant technologies for web development as well as provide walk through "Hello World App" tutorials in the simplest form.</strong>
      <p> </p>
      <p>The idea is to help anyone with a general understanding of writing code to be able to get started with these new technologies and open doors for them to bring their own ideas to life. All feed back is always welcome, especially if you believe Go Code Stuff has strayred from it's goal.</p>
      <p>Initially all posts will be written in reference to HTML and JavaScript, so a basic understanding of those languages will be all you need to follow along. Over time when dabbling into machine learning and other technologies the posts will reference other languages such as Python and Java. If your ready to code cool and inovative stuff go ahead and subscribe and be on the look out for our latest posts that way you can thrive in this ever changing field.</p>
    </div>
    <p>Hello World

Welcome and thank you for checking out Go Code Stuff. Go Code Stuff is a passion project created by a web developer out of Denver Colorado named Connor Jaksik. While working on a school project he realized there was a lack of documentation and examples for new and emerging technologies. While trying to understand the concept of these technologies in the simplest form, Connor began to feel a sense of responsibility to provide others with the information he was learning. Two months later “Go Code Stuff” came on line.

Connor has always loved the open and collaborative feel of the tech community. Developers helping developers and sharing the knowledge they’ve discovered. The vast majority of code that has ever been written is open source and out there to help others. This is a huge reason why the tech industry evolves so much faster than other industries, most of the knowledge is open source. It’s just up to the developer on what they do with it. With that said, we all know the industry is evolving and there is always something new to learn. Connor is intrigued with the new technologies and experiments with them for fun, he is always learning and is excited to share what he learns. 

Go Code Stuff will be posting weekly original articles on various topics about coding. More precisely, Go Code Stuff will posting articles on how to get started with some of these new technologies in the simplest and most gradient way. Please subscribe and never miss an article on the latest tech trends.

Enjoy 

-Connor</p>
    <h2>About The Author</h2>
    <h4>Connor Jaksik, Author and Creator of Go Code Stuff</h4>
    <div style={{ textIndent: `50px` }}>
      <p>Connor is cool</p>       */}
    </div>
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