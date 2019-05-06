/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Subscribe from "./form-subscribe"
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
      <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My fav blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Subscribe/>
          <footer style={{ textAlign: `center`, fontSize: `15px`}}>
            © {new Date().getFullYear()}, Built By
            {` `}
            <a href="https://connorjaksik.com">Jaksik Web Development</a>
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

//GGGGGGG  OOOOOOO    CCCCCCCCC  OOOOOO  DDDDDD      EEEEEEEE
//GG  GGG  OOOOOOO    CCCCCCCCC  OOOOOO  DDDDDD      EEEEEEEE
//GG       OO   OO    CC     CC  OO  OO  DD   DD     EE
//GG  GGG  OO   OO    CC         OO  OO  DD    DD    EEEEEEEE
//GG   GG  OO   OO    CC     CC  OO  OO  DD     DD   EEE
//GGGGGGG  OOOOOOO    CCCCCCCCC  OO  OO  DDDDDDDDD   EEEEEEEE
//GGGGGGG  OOOOOOO    CCCCCCCCC  OOOOOO  DDDDDDDDD   EEEEEEEE



