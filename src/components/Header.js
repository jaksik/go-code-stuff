import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a href="/contact"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Contact</a>
      <a href="/about"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >About</a>
      <a href="/blog"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Store</a>
      <a href="/blog"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >TensorFlow</a>
      <a href="/blog"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >AWS</a>
      <a href="/blog"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Python</a>
      <a href="/blog"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >ReactJS</a>
        <a href="/blog"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Web 101</a>
      <a href="/"
        style={{ padding: "0 5px", color: "white", float: "right" }} title="github" >Home</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
