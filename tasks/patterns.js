const downpour = require('@sparkbox/downpour');
const downpourOptions = {
  src: {
    data: {
      basedir: 'src/drizzle/data',
      glob: 'src/drizzle/data/**/*.yaml',
    },
    pages: {
      basedir: 'src/drizzle/pages',
      glob: 'src/drizzle/pages/**/*.{hbs,md,html}',
    },
    patterns: {
      basedir: 'src/drizzle/patterns',
      glob: 'src/drizzle/patterns/**/*.{hbs,md,html}',
    },
    templates: {
      basedir: 'src/drizzle/templates',
      glob: 'src/drizzle/templates/**/*.{hbs,md,html}',
    }
  },
  dest: {
    pages: './dist/',
    patterns: './dist/patterns',
    css: './dist/css',
    js: './dist/js',
  }
};

Object.assign(downpourOptions);
downpour(downpourOptions);
