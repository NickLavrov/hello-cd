var webdriver = require('selenium-webdriver');
require('chromedriver');

var createCleanDriver = function() {

  var driver = new webdriver.Builder().
  withCapabilities(webdriver.Capabilities.chrome()).
  build();

  // Screen must be large enough to not make the display mobile/narrow window
  driver.manage().window().setSize(1600, 1000);

  return driver.get('http://localhost:8080')
    .then(function() {
      driver.executeScript('localStorage.clear();')
      return driver
    });

};

module.exports = {
  createCleanDriver: createCleanDriver
};
