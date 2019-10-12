module.exports = function(api) {
  api.cache.forever();

  const presets = [
    [
      '@babel/preset-env',
      {
        // { modules: false } tells babel not to transpile import statements
        // gives control to webpack (or rollup)
        // to exclusivley handle parsing/resolving of imports
        modules: false,
        useBuiltIns: 'entry',
        corejs: '3.0.0'
      }
    ]
  ];

  const plugins = ['@babel/plugin-syntax-dynamic-import'];

  return { presets, plugins };
}
