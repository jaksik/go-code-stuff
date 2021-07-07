import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import "./style.css"

export default () => (
  <StaticQuery
    query={graphql`
      query SieTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="section" style={{}}>
          <form
            name="test"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={{ margin: `30px auto`, background: data.site.siteMetadata.theme, borderRadius: `25px`}}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />                
            <h2 style={{ color: `white` }}>Contact {data.site.siteMetadata.title}</h2>
            <input name="name" placeholder="  First and Last Name" type="text" /><br />
            <input name="email" placeholder="  Email" type="email" /><br />
            <textarea name="message" placeholder="  Anything else we should know before your lesson?" type="textarea" /><br />
            <button style={{ margin: `15px auto`, borderRadius: `10px` }}>Submit</button>
          </form>
        </div>
      </Layout>
    )}
  />
)
