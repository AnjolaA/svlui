var Page = require('./page');

var LoginPage = Object.create(Page, {
    loginlink: {
        get: function () {
            var id = "//a[contains(text(),'Login')]";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
    open:{
    value: function() {
        browser.url('/');
        Page.open.call(this, '');
    }
   },
    usernameinput: {
        get: function () {
            var usernameinputid = "#j_username";
            browser.waitForVisible(usernameinputid);
            return browser.element("#j_username");
        }
    },
    passwordinput: {
        get: function () {
            var passwordinputid = "#j_password";
            browser.waitForVisible(passwordinputid);
            return browser.element("#j_password");
        }
    },
    Submit: {
        get: function () {
            var submitLoginid = "#submitLogin";
            browser.waitForVisible(submitLoginid);
            return browser.element("#submitLogin");
        }
    },
    title: {
        value: function () {
            return browser.getTitle();
        }
    },

    Login: {
        value: function (username, password) {
            this.usernameinput.setValue(username);
            this.passwordinput.setValue(password);
            this.Submit.click();
        }
    }

});

module.exports = LoginPage;
