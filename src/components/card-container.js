import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import "./post-list.css"

export default () => (
    <StaticQuery
        query={graphql`
        query {
            allMarkdownRemark(
              filter: { fileAbsolutePath: {regex: "\/classes/"}}
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    date
                    location
                    duration
                    description
                  }
                  fields {
                      slug
                  }
                }
              }
            }
          }
`}
        render={data => (
            <div>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                        <Link
                        to={node.fields.slug}
                        className="link"
                        >
                            <div className="post-list">
                                <h3 style={{ float: `left` }}>{node.frontmatter.title}</h3>
                                <h5 style={{ textAlign: `right` }}>Start Date: {node.frontmatter.date}</h5><br />
                                <h5>Duration: {node.frontmatter.duration}</h5>
                                <h5>Location: {node.frontmatter.location}</h5>
                                <p>{node.frontmatter.description}</p>
                            </div>
                        </Link>
                    )
                })}




                {/* {data.map(item => {
                    return (
                        <Link
                            className="link"
                        >
                            <div className="post-list">
                                <h3 style={{ float: `left` }}>{item.title}</h3>
                                <h5 style={{ textAlign: `right` }}>Start Date: {item.date}</h5><br />
                                <h5>Duration: {item.duration}</h5>
                                <h5>Location: {item.location}</h5>
                                <p>{item.description}</p>
                            </div>
                        </Link>
                    )
                })} */}
            </div>
        )}
    />
)

