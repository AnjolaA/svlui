const expect = require('chai').expect;

module.exports = function () {
  this.Given(/^I go to the website "([^"]*)"$/, (url) => {
    browser.windowHandleMaximize(["current"]);
        browser.url(url);
  });

  this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });

  this.When(/^I search for "([^"]*)"$/,  (title) => {
  // Write code here that turns the phrase above into concrete actions
  //browser.setValue(#lst-ib, title);
  console.log("Value is " + title);
  browser.setValue('#lst-ib', title);
  browser.click('#_fZl');
  browser.pause(2000);
});

this.When(/^I navigate to the news page$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  browser.click("//span[contains(text(),'Movies')]");
  browser.pause(2000);
  callback();
});
// this.When(/^I search for "([^"]*)"$/, function (arg1, callback) {
// // Write code here that turns the phrase above into concrete actions
// browser.setValue(#lst-ib,)
// callback(null, 'pending');
// });
}
