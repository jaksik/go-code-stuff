---
templateKey: class-post
title: Code Block In CMS Style Test 1
date: 2019-05-18T23:54:52.446Z
description: Helllo testing in the library.
featuredpost: true
featuredimage: /img/img_4447.jpg
tags:
  - test
  - one
  - cms
---
More test here.\
Testing to see how the code blocks appear when published.

```
import React from 'react'
```

```
import { Link } from 'gatsby'
```

```
import './style.css'
```

```

```

```
export default (props) => {
```

```
  console.log("props: ", props.postData.edges)
```

```
  return (
```

```
    <div>
```

```
      {/* <p>Total Count: {props.totalCount}</p> */}
```

```
      <div className="row">
```

```
        {props.postData.edges.map(({ node }) => {
```

```
          console.log("preview Roll: ", node)
```

```
          return (
```

```
            <div className={props.class} style={{ width: props.itemWidth, float: `left` }}>
```

```
              <Link
```

```
                to={node.fields.slug}
```

```
                className="link"
```

```
              >
```

```
                <div className="post-list">
```

```
                  <h3 style={{ float: `left` }}>{node.frontmatter.title}</h3>
```

```
                  <h5 style={{ textAlign: `right` }}>Start Date: {node.frontmatter.date}</h5><br />
```

```
                  <p>{node.excerpt}</p>
```

```
                </div>
```

```
              </Link>
```

```
            </div>
```

```
          )
```

```
        })}
```

```

```

```
      </div>
```

```
    </div>
```

```
  )
```

```
}
```
