import React from "react"
import { Link, graphql } from "gatsby"
import "./style.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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