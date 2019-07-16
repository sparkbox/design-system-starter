const shell = require('shelljs');
const map = require('lodash/map');
const runAll = require('npm-run-all');

console.log(`Starting Pattern Library for ${process.env.NODE_ENV || 'development'}`);

const tasks = {
  development: ['copy', 'sass', 'js', 'svg-sprite', 'patterns', 'server', 'watch'],
};

function parallelTasks(env) {
  const list = map(tasks[env], task => `${task}`);

  return `${list.join(' ')}`;
}

shell.exec(`npm-run-all -s patterns -p ${parallelTasks('development')}`);
