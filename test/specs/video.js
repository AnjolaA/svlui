    const expect = require('chai').expect;
    var assert = require('assert');
    var HomePage = require('../../pageobjects/home.page');
    var LoginPage = require('../../pageobjects/login.page');
    var AddVideoPage = require('../../pageobjects/addvideo.page.');
    require('dotenv/config');


     describe('Add Video', function(){
        it('User can upload Video to SVL', function(){
        HomePage.open();
        HomePage.GoToLoginPage();
        LoginPage.Login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        browser.pause(2000);
        LoginPage.open();
        HomePage.GoToAddVideoPage();
        AddVideoPage.EnterClipDetails("Clip Title", "Movie Title", "Programme Title", "This is a video description.", "Today@Sky");
        AddVideoPage.uploadVideo();
        browser.pause(5000);
        var url = browser.getUrl();
        console.log("URL is "+ url);
        let res = url.split("/");
        const videoid = res[4];
        process.env.VIDEO_ID=url;
        //browser.close();
      })
  })
