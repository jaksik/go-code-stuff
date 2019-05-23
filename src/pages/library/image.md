---
templateKey: blog-post
title: Gatsby JS Image Component
date: 2019-05-18T23:54:52.446Z
description: Helllo testing in the library.
featuredpost: true
featuredimage: /img/img_4447.jpg
tags:
  - test
  - one
  - cms
---

This is a default Gatsby JS Image component.

```js
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
```
