import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Row, Col } from 'reactstrap';
import "./post-list.css"

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(
                    filter: { fileAbsolutePath: {regex: "\/blog/"}}
                    sort: { fields: [frontmatter___date], order: DESC }) {
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
                <Row>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Col xs="12" sm="6" md="4" key={node.id}>
                            <Link
                                to={node.fields.slug}
                                className="link"
                            >
                                <div className="post-list">
                                    <h3>{node.frontmatter.title}{" "}</h3>
                                    <h5>Date: {node.frontmatter.date}</h5>
                                    <p>{node.excerpt}</p>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        )}
    />
)