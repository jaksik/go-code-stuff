---
templateKey: library-item
title: "Header Component"
date: "2017-08-10"
image: ../../images/mountain.jpg

---

This is the header component used to make this website.


```js
const Header = ({ siteTitle, siteTheme }) => (
    <header
      style={{
        background: siteTheme,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/library" className="nav-item">Library</Link>
        <Link to="/classes" className="nav-item">Classes</Link>
        <Link to="/blog" className="nav-item">Blog</Link>
        <Link to="/" className="nav-item">Home</Link>
      </div>
    </header>
```