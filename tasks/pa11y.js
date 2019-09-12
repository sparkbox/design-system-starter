const Promise = require('bluebird');
const pa11y = require('pa11y');
const glob = require('glob');

async function runPa11y(file) {
  try {
    const results = await pa11y(`${file}`, {
      chromeLaunchConfig: {
        args: ["--no-sandbox"],
        ignoreHTTPSErrors: false
      },
      allowedStandards: [
        'WCAG2.1AA',
      ],
      ignore: [
        'notice',
        'warning'
      ],
    });

    if (results.issues.length > 0) {
      console.log(`${file}:`, '\x1b[31mAccessibility Errors 🚨\x1b[0m');
      console.log(results.issues);
    } else {
      console.log(`${file}:`, '\x1b[32mAccessibility Passes ✅\x1b[0m');
    }
  } catch (error) {
    console.log('\x1b[31m%s\x1b[0m', '\n******** 🚨 ERROR 🚨 ********');
    console.log(error);
    console.log('\x1b[31m%s\x1b[0m', `*****************************\n`);
  }
}

glob('./dist/**/*.html', function (er, files) {
  Promise
    .map(files, runPa11y, {concurrency: 5}); // concurrency 👉 how many pages to run at a time
});
