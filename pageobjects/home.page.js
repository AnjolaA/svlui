var Page = require('./page');

var HomePage = Object.create(Page, {
    LoginButton: {
        get: function () {
            var id = "//a[contains(text(),'Login')]";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
    AddVideoButton: {
        get: function () {
            var id = "#add-video-link";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
    open:{
        value: function() {
            browser.windowHandleMaximize(["current"]);
            browser.url('/');
            Page.open.call(this, '');
        }
   },

    title: {
        value: function () {
            return browser.getTitle();
        }
    },

    GoToAddVideoPage: {
        value: function () {
            this.AddVideoButton.click()
        }
    },
        GoToLoginPage: {
        value: function () {
            this.LoginButton.click()
        }
    }

});

module.exports = HomePage;
