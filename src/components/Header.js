import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/home"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a href="/contact"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Contact</a>
      <a href="/blog/hello-world"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >About</a>
      <a href="/blog"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Blog</a>
          <a href="/home"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Home</a>
    </div>
  
  </div>
)

export default Header
