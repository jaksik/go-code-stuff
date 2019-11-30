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
          <main style={{ minHeight: `90vh` }}>{children}</main>
          <footer style={{ textAlign: `center`, fontSize: `15px`, color: `white`, background: data.site.siteMetadata.theme, minHeight: `50px` }}>
            © {new Date().getFullYear()} {data.site.siteMetadata.title}, Built By
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
