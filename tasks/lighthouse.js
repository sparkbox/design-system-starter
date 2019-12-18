const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      // use results.lhr for the JS-consumeable output
      // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
      // use results.report for the HTML/JSON/CSV output as a string
      // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
      return chrome.kill().then(() => results.lhr)
    });
  });
}

const opts = {
  chromeFlags: ['--show-paint-rects']
};

const urls = [
  'http://localhost:3000',
];

urls.forEach(url => {
  launchChromeAndRunLighthouse(url, opts).then(results => {
    // console.log(results.categories.accessibility.auditRefs);

    const audits = [
      results.audits['aria-roles'],
      results.audits['aria-allowed-attr'],
      results.audits['aria-required-attr'],
      results.audits['aria-required-children'],
      results.audits['aria-required-parent'],
      results.audits['aria-roles'],
      results.audits['aria-valid-attr-value'],
      results.audits['aria-valid-attr'],
      results.audits['button-name'],
      results.audits['bypass'],
      results.audits['color-contrast'],
      results.audits['document-title'],
      results.audits['frame-title'],
      results.audits['html-has-lang'],
      results.audits['image-alt'],
      results.audits['label'],
      results.audits['accesskeys'],
      results.audits['allowed-attr'],
      results.audits['audio-caption'],
      results.audits['definition-list'],
      results.audits['dlitem'],
      results.audits['html-lang-valid'],
      results.audits['input-image-alt'],
      results.audits['link-name'],
      results.audits['list'],
      results.audits['listitem'],
      results.audits['meta-refresh'],
      results.audits['meta-viewport'],
      results.audits['object-alt'],
      results.audits['tabindex'],
      results.audits['td-headers-attr'],
      results.audits['th-has-data-cells'],
      results.audits['valid-lang'],
      results.audits['video-caption'],
      results.audits['video-description'],
      results.audits['logical-tab-order'],
      results.audits['focusable-controls'],
      results.audits['interactive-element-affordance'],
      results.audits['managed-focus'],
      results.audits['focus-traps'],
      results.audits['custom-controls-labels'],
      results.audits['custom-controls-roles'],
      results.audits['visual-order-follows-dom'],
      results.audits['offscreen-content-hidden'],
      results.audits['heading-levels'],
      results.audits['use-landmarks'],
    ];

    audits.forEach(audit => {
      if (audit.score !== 1) {
        console.log('Error: ', audit);
        console.log('Error Items: ', audit.details.items);
        process.exit(1);
      }
    });
  });
});
