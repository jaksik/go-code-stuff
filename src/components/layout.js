/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            theme
          }
        }
      }
    `}
    render={data => (
      <>
        <Header 
        siteTitle={data.site.siteMetadata.title} 
        siteTheme={data.site.siteMetadata.theme}
        />
        <div
          style={{
          
          }}
        >
          <main>{children}</main>
          <footer style={{ textAlign: `center`, fontSize: `15px` }}>
            © {new Date().getFullYear()}, Built By
            {` `}
            <a href="https://connorjaksik.com">Connor Jaksik</a>
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
