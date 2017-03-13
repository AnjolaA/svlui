var Page = require('./page');
  require('dotenv/config');

var AddVideoPage = Object.create(Page, {
    clipTitleInput: {
        get: function () {
            var id = "#clipTitle";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
        clipTitlePreInput: {
        get: function () {
            var id = "#clipTitleDisplay";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
        movieTitleInput: {
        get: function () {
            var id = "#programmeTitle";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
        programmeTitleInput: {
        get: function () {
            var id = "#programmeTitlePD";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
    descriptionInput: {
        get: function () {
            var id = "#description";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
    primaryPublisherDropdown: {
        get: function () {
            var id = "#svlform-site>span";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
    uploadAVideoButton: {
        get: function () {
            var id = "#buttonDelegator";
            browser.waitForVisible(id);
            return browser.element(id);
        }
    },
    listElement: {
        get: function () {
            var id = "//li[contains(text(),'Today@Sky')]";
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
    EnterClipDetails: {
        value: function (cliptitle, movietitle , programme, description, dropdownValue) {
            this.clipTitlePreInput.click();
            this.clipTitleInput.setValue(cliptitle);
            this.movieTitleInput.setValue(movietitle);
            this.programmeTitleInput.setValue(programme);
            this.descriptionInput.setValue(description);
            this.primaryPublisherDropdown.click();
            this.listElement.click();
            //browser.chooseFile('#FileInput', "C:\\Users\\AAW05\\Documents\\SVL\\DummyVideo.mp4")
        }
    },

    uploadVideo: {
        value: function () {
            this.uploadAVideoButton.click()
            console.log("Element A");
            //browser.chooseFile('#FileInput', process.env.VIDEO_PATH);
            browser.uploadFile(process.env.VIDEO_PATH);
            //browser.setValue('#FileInput', "C:\\Users\\AAW05\\Documents\\SVL\\DummyVideo.mp4");
        }
    }

});

module.exports = AddVideoPage;
