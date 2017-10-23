(function () {
  'use strickt';

  var generalHelpers = function () {

    this.goURL = function (url) {
      browser.get(url);
    };

    // this.sendKeys = function () {

    // };

  };

  module.exports = generalHelpers;
})();