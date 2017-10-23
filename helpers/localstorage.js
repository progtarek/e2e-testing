(function () {
    'use strict';
    
    var LocalStorage = function () {
        this.getValue = function (key) {
            return browser.executeScript("return window.localStorage.getItem('" + key + "');");
        };

        this.get = function () {
            browser.executeScript("return window.localStorage;");
        };

        this.clear = function () {
            browser.executeScript("return window.localStorage.clear();");
        };
    };

    module.exports = LocalStorage;
}());