import React from "react"
import { Link, graphql } from "gatsby"
import './style.css';
import Layout from "../components/layout"
// import Image from "../components/image"

const IndexPage = ({ data }) => (
  <Layout>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div id="homeImage"></div>
    <h1>Blog</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          className="link"
        >
          <div className="post-list">
          <h3>
            {node.frontmatter.title}{" "}
            <span>
              - {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
          </div>
        </Link>
      </div>
    ))}
    
  </Layout>
)

export default IndexPage

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                      }
                    excerpt
                }
            }
        }
    }
  `