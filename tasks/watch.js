'use strict';

const chokidar = require('chokidar');
const shell = require('shelljs');

chokidar.watch('src/scss/**/!(_split)*.scss').on('change', () => {
  shell.exec('npm run sass');
});

chokidar.watch('src/drizzle/**/*').on('change', () => {
  shell.exec('npm run patterns');
});

chokidar.watch('src/public/**/*').on('change', () => {
  shell.exec('npm run copy');
});

chokidar.watch('src/js/**/*').on('change', () => {
  shell.exec('npm run js');
});
