import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
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
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/about" className="nav-item">About</Link>
      <Link to="/classes" className="nav-item">Classes</Link>
      <Link to="/library" className="nav-item">Library</Link>
      <Link to="/blog" className="nav-item">Blog</Link>
      <Link to="/" className="nav-item">Home</Link>
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
