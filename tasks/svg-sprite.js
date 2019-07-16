const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const SVGSpriter = require('svg-sprite');

function generateIdForSvg(defaultId, file) {
  const baseName = path.basename(file.path);
  const baseNameWithoutExtension = baseName.split('.')[0];
  return `icon-${baseNameWithoutExtension}`;
}

const config = {
  dest: 'dist/svg',
  shape: {
    id: {
      generator: generateIdForSvg,
    },
  },
  mode: {
    inline: {
      example: true,
    },
    symbol: {
      example: true,
    },
  },
};

const spriter = new SVGSpriter(config);

function addSvg(svgName) {
  spriter.add(`src/svg/${svgName}`, null, fs.readFileSync(`src/svg/${svgName}`, { encoding: 'utf-8' }));
}

function spriterCompile(error, result) {
  for (var mode in result) {
    for (var resource in result[mode]) {
      shell.mkdir('-p', path.dirname(result[mode][resource].path));
      fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
    }
  }
}

fs.readdir('src/svg', function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const svgFiles = files.filter(i => i.match(/\.svg$/));
  svgFiles.forEach(addSvg);
  spriter.compile(spriterCompile);
});
