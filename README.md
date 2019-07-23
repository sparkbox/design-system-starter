**First-time setup instructions:**

- [**Click this link and make a new repo.**](https://github.com/sparkbox/designsystemstarter/generate) This will start a repo using [GitHub's repository templates](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/), which copies all the files from this one to the new repo.
- **Add your company's name.** You'll need to change it from `YOURNAMEHERE` in:
  - [package.json](package.json)
  - [src/data/global.yaml](src/data/global.yaml)
  - [README.md](README.md) (That's this file!)
- **Start styling.** You can:
  - **Build a color palette** in [src/scss/settings/_variables.scss](src/scss/settings/_variables.scss)
  - **Adjust typography and default `<a>` styles** in [src/scss/tools/_mixins.scss](src/scss/tools/_mixins.scss)
    - Add `@font-face` blocks in [src/scss/settings/_fonts.scss](src/scss/settings/_fonts.scss)
    - Add `<link>`s to stylesheets in [src/markup/patterns/drizzle/partials/stylesheet-link-tags.hbs](src/markup/patterns/drizzle/partials/stylesheet-link-tags.hbs)
  - Good starting places (must be running the app to view these pages):
    - [Common Elements page](http://localhost:3000/demos/common-elements.html)
    - [The "btn" component](http://localhost:3000/patterns/components/buttons.html)
- **Delete this documentation.** This documentation is for first-time setup. Go into [README.md](README.md) and delete this list of steps.
    
# YOURNAMEHERE Design System

Setup
-----
1. Before running the project setup node/npm ([Installation instructions](https://nodejs.org/en/download/)).

2. Run `npm install`.

3. Run `npm start`. This will:

  - Clear any previously built project files
  - Build project files
  - Start the server (localhost:3000)
  - Run watch tasks

Drizzle
-------

The pattern library is be powered by [Drizzle](https://github.com/cloudfour/drizzle) and will be organized by:
- [Data](https://github.com/cloudfour/drizzle/tree/master/docs#data)
- [Pages](https://github.com/cloudfour/drizzle/tree/master/docs#pages)
- [Patterns](https://github.com/cloudfour/drizzle/tree/master/docs#patterns)
- [Templates](https://github.com/cloudfour/drizzle/tree/master/docs#templates)

Public
------

The contents of the `public/` directory will be copied directly into the root of the `dist/` directory.

Sass
----

All CSS is compiled from [Sass](https://sass-lang.com/) and can be found in the `scss/` directory. Any files not prefixed with an underscore will compile to `dist/css/`.

JavaScript
----------
All JavaScript is compiled with [Webpack](https://webpack.js.org/) and can be found in the `js/` directory. All JavaScript files should be imported into `index.js` which will then be compiled to `dist/js/scripts.js`.

Testing
-------

Running `npm test` will run the following tasks:

- `pa11y`: Runs accessibility tests on all HTML files in the `dist/` directory
- `stylelint`: Checks all CSS  in the `dist/` for errors and enforces [Sparkbox's code conventions](https://www.npmjs.com/package/@sparkbox/stylelint-config-sparkbox)
- `eslint`: Checks all JavaScript  in the `dist/` for errors and enforces [Sparkbox's code conventions](https://www.npmjs.com/package/eslint-config-sparkbox)
