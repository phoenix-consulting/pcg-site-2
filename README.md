## Phoenix Consulting Group Public Site
This is Phoenix Consulting Group's 2nd site redesign, following the initial drag-and-drop sites and the first site redesign from June to August of 2020. This site was built largely during the winter break of 2020-2021.

This site is built in React and uses GatsbyJS and GraphQL to handle routing, image loading, and metadata. References for React, Gatsby, and GraphQL can be found at their particular sites. It is suggested that editors know GitHub, HTML, CSS, and basic JavaScript (or Python, Java, etc.). Please clone the entire repository into a *separate* directory before you begin merging changes (the second website redesign featured a few unfortunate `git push --force` incidents).

The site is built to be largely maintainable from `/src/constants.js`, which contains most content that changes from semester to semester in a series of JavaScript arrays. Many components in the site call functions on these arrays, so please don't mess around too much with stuff inside of `constants.js` unless it's wrapped in quotes. `constants.js` also contains a bunch of color and font constants that can be used for reference or imported.

## 🧐 What's inside?
    .
    ├── node_modules
    ├── src
      |—— images
      |—— components
      |—— pages
      constants.js
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
- **`/src/images`**: This directory contains image assets for the site. Please use hyphenated, descriptive names when adding images.
- **`/src/components`**: This directory contains all components used in the site. Styles (which use CSS Modules) are housed alongside components. Components are split into commonly reused ones like `InfoSec` and `Banner`, while page-specific components live in page-specific folders like `AboutComponents`.
- **`/src/pages`**: This directory contains all pages for the site, which are special components that Gatsby renders.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
