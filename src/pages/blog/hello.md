---
templateKey: blog
title: Using Different Markdown Templates in Gatsby JS
date: 2019-05-18T17:53:35.406Z
description: >-
  In depth look at using different templates for your markdown files whem making
  a website with Gatsby JS.
featuredpost: true
images:
  - image: ../../images/mountain.jpg
  - image: ../../images/gatsby-icon.png
---
Let's say you're creating pages for your markdown files in Gatsby JS and you realize that you want more than just one JavaScript template for them, this blog post will show you how to make multiple templates. This post will pick up right where the introductory tutorial for Gatsby JS ends. If your just getting started with Gatsby it's highly recommended that you go through the tutorial, <https://www.gatsbyjs.org/tutorial/> . Otherwise let's begin.

## Overview

1. Make a second template (or as many as you want).
2. Specify the associated template in each markdown file's frontmatter.
3. Alter the "allMarkdownRemark" query in the node.js file to also query for the template.
4. Inject the name of the template in to the create pages function in node.js
5. Wah Lah, Done

## Let's Get Started

**Make a second template**

Duplicate the JavaScript template file you already have. In the tutorial it's named "blog-post.js". You can name it whatever you want, we will name ours "blog-two.js". After that go into the file and change the heading to something unique that way after the pages are created, you will know that in fact it is using the second template.

**Specify the template in each markdown file** 

This is necessary so that when the pages are created at build time, Gatsby will know which template to use. In each markdown file add a key-value pair to the frontmatter. The key will be used to specify which template to use, you can name the key what ever you want, however it will have to be universal across all of your markdown files, we will name ours "templateKey". The following value will be the name of the associated template, which in our case currently can only be "blog-post" or "blog-two".

If your following along from how the tutorial left off, the top of each of your markdown files should look something like this....

\`\``js

\---

templateKey: blog-post

title: "Pandas and Bananas"

date: "2017-08-21"

\---

\`\``

**Alter the query in your node.js file**

Currently the query is only querying for the id and slug of each markdown file. We need to alter it to also query for the "templateKey". Simply just add a "frontmatter" query beneath "fields", then within frontmatter add "templateKey". It will look something like this....

\`\``js

 return graphql(`

\    {

\    allMarkdownRemark {

\    edges {

\    node {

\    id

\    fields {

\    slug

\    }

\    frontmatter {

\    templateKey

\    }

\    }

\    }

\    }

\    }

\    `

\`\``

**Inject the templatekey into the createpages function**

We will use a template litteral to accomplish this. In the "createPage" arguments, you will see "component", we are going to change its value. Let's go ahead and replace the quotes with back ticks (so we can use a template litteral). Next delete the "blog-post" and replace it with a template litteral containing a String method and the path the template key you just queried, the whole component line will look something like this....

\`\``js

\    component: path.resolve(\`./src/templates/${String(node.frontmatter.templateKey)}.js\`)

\`\``



done!!!
