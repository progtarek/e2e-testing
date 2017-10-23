//add html reprorts
var Jasmine2HtmlReporter = require('./node_modules/protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine2',

  /* direct connect to browser without the need of turning on selenium web-driver.
   * it works only on chrome and firefox.
   */
  directConnect: true,

  /**
   * address for the web driver
   * will be useless if directconnect is on
   */
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // page loading timeout
  getPageTimeout: 30000,

  //default is body
  // rootElement: '[ng-app]',


  //browser configuration
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    },
  },

  //Test suites
  suites: {
    //login
    login: ['specs/login/**/*spec.js'],
    // module1: ['specs/module/**/*spec.js'],
    // module2: ['specs/module/**/*spec.js'],
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 60000,
  },


  /**
   * onPrepare function: called before all tests
   */
  onPrepare: function () {

    //configure the htmlReporter
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './target/reports/', //path for the reports
        screenshotsFolder: 'screenshots', //default is screenshots
        //take screenshots in case of failure only
        takeScreenshots: true,
        //takeScreenshotsOnlyOnFailures: true, //remove this to allow screen shots in all cases
        //avoid random names
        fixedScreenshotName: true,
        //different report for each suite
        consolidate: true,
        consolidateAll: true
      })
    );
  }
};