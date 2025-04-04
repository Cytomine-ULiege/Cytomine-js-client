var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai-as-promised', 'chai'],

    client: {
      mocha: {
        timeout : 10000 // global mocha timeout of 10 seconds
      }
    },

    // list of files / patterns to load in the browser
    files: [
      'src/index.js',
      'tests/test-*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/*.js': ['webpack'],
    },

    webpack: webpackConfig(),

    webpackServer: {
      noInfo: true,
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'junit'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['FirefoxHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // the default configuration
    junitReporter: {
      outputDir: 'ci/test-reports', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'test-reports.xml',
      useBrowserName: false
    }
  });
};
