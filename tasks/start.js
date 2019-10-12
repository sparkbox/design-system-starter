const shell = require('shelljs');

console.log(`Starting Pattern Library for ${process.env.NODE_ENV || 'development'}`);

if (process.env.NODE_ENV === 'production') {
  shell.exec('npm-run-all -s patterns -p build server');
} else {
  shell.exec('npm-run-all -s patterns -p build:dev server watch');
}
