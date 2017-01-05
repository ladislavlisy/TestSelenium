/**
 * Created by ladislavlisy on 05.01.17.
 */
///<reference path='../typings/globals/node/index.d.ts'/>
///<reference path='../typings/globals/mocha/index.d.ts'/>
///<reference path='../typings/globals/chai/index.d.ts'/>
///<reference path='../typings/modules/selenium-webdriver/index.d.ts'/>
//import * as webdriver from "selenium-webdriver";
var webdriver = require('selenium-webdriver');
// Shorten the names we'll use a lot
var By = webdriver.By, until = webdriver.until;
describe("TestLibrary", function () {
    var driver;
    before(function () {
        //        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });
    after(function () {
        //    driver.quit();
    });
    it("should_test_google_site", function () {
        driver.get("http://www.google.com/cz")
            .then(function (_) { return driver.findElement(By.name('q')).sendKeys('webdriver'); })
            .then(function (_) { return driver.findElement(By.name('btnG')).click(); })
            .then(function (_) { return driver.wait(until.titleIs('webdriver - Google Search'), 100000); });
    });
});
//# sourceMappingURL=okmzdy_test.js.map