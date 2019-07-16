const downpour = require('@sparkbox/downpour');
const markdown = require('helper-markdown');

const downpourOptions = {
  src: {
    data: {
      basedir: 'src/data',
      glob: 'src/data/**/*.yaml',
    },
    pages: {
      basedir: 'src/markup/pages',
      glob: 'src/markup/pages/**/*.{hbs,md,html}',
    },
    patterns: {
      basedir: 'src/markup/patterns',
      glob: 'src/markup/patterns/**/*.{hbs,md,html}',
    },
    templates: {
      basedir: 'src/markup/layout',
      glob: 'src/markup/layout/**/*.{hbs,md,html}',
    },
  },
  dest: {
    pages: './dist/',
    patterns: './dist/patterns',
    css: './dist/css',
    js: './dist/js',
  },
  helpers: {
    markdown,
  },
};

Object.assign(downpourOptions);
downpour(downpourOptions);
