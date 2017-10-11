var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var createCleanDriver = require("./tools/createCleanDriver").createCleanDriver;
var By = webdriver.By;
var should = require('should')

test.describe('Home page link goes to hello page', function() {

  test.it('should go to /hello url after clicking link', function() {
    
    this.timeout(120 * 1000);

    createCleanDriver().then(function(driver) {
      driver.sleep(1000)
      driver.findElement(By.tagName('a')).click()
      driver.sleep(1000)
      return driver.getCurrentUrl().then(function(url) {
          url.split('/').slice(-1)[0].should.equal('hello')
          driver.quit();
        });
    });
  });
})
