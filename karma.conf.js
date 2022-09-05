const path = require('path');

// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox' ]
const browsers = (process.env.TEST_BROWSERS || 'Debug').split(',');

// use puppeteer provided Chrome for testing
process.env.CHROME_BIN = require('puppeteer').executablePath();

const absoluteBasePath = path.resolve(__dirname);

const suite = 'test/copy-as-image.js';

module.exports = function(karma) {
  karma.set({

    frameworks: [
      'mocha',
      'sinon-chai',
      'webpack'
    ],

    files: [
      suite
    ],

    preprocessors: {
      [suite]: [ 'webpack' ]
    },

    browsers,

    singleRun: false,
    autoWatch: true,

    webpack: {
      mode: 'development',
      target: 'browserslist:last 2 versions',
      module: {
        rules: [
          {
            test: /\.bpmn$/,
            type: 'asset/source'
          },
          {
            test: /\.css$/,
            type: 'asset/source'
          }
        ]
      },
      resolve: {
        mainFields: [
          'module',
          'main'
        ],
        modules: [
          'node_modules',
          absoluteBasePath
        ]
      },
      devtool: 'eval-source-map'
    }
  });

};