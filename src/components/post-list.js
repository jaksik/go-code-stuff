import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import "./post-list.css"

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        category
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
  `}
        render={data => (
            <div>
                {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
                {/* <div class="dropdown">
                    <button class="dropbtn">Filter By Category</button>
                    <div class="dropdown-content">
                        <a href="#">Progressive Web App</a>
                        <a href="#">Machine Learning</a>
                        <a href="#">Internet Of Things</a>
                    </div>
                </div> */}
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
                                <h5>Category: {node.frontmatter.category}</h5>
                                <p>{node.excerpt}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )}
    />
)