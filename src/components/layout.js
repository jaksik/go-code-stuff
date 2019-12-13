import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar/>
        <div>
          <main style={{ minHeight: `90vh` }}>{children}</main>
          <footer style={{ textAlign: `center`, color: `white` }}>
            © {new Date().getFullYear()} Go Code Stuff <br/>
            {` `}
            <a href="https://connorjaksik.com" target="_blank" rel="noopener noreferrer" style={{ color: `lightblue`}}>Connor Jaksik</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
