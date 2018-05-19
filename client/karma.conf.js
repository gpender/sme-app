process.env.CHROME_BIN = require('puppeteer').executablePath()
process.env.CHROMIUM_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

//files now in gruntfile
    // files: [
    //   'node_modules/jquery/dist/jquery.js',
    //   'node_modules/angular/angular.js',
    //   'node_modules/angular-route/angular-route.js',
    //   'node_modules/angular-sanitize/angular-sanitize.js',
    //   'node_modules/angular-mocks/angular-mocks.js',
    //   'node_modules/underscore/underscore.js',
    //   'node_modules/restangular/dist/restangular.js',
    //   'test/**/*-spec.js',
    //   'source/**/*.js'
    // ],

    // list of files to exclude
    exclude: [

    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS'],
    //browsers: ['ChromeHeadless'],
    browsers: ['Chromium'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
