    const expect = require('chai').expect;
    var assert = require('assert');
    var HomePage = require('../../pageobjects/home.page');
    var LoginPage = require('../../pageobjects/login.page');
    var AddVideoPage = require('../../pageobjects/addvideo.page.');
    require('dotenv/config');


    describe('Title ', function(){
        it('Page title should be Video Library', function(){
        HomePage.open();
        expect(HomePage.title()).to.be.eql('Video Library');
      })
    })

    describe('Login', function(){
        it('User can Login to SVL', function(){
        HomePage.open();
        HomePage.GoToLoginPage();
        LoginPage.Login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        LoginPage.open();
       //browser.pause(5000);
      })
    })
        describe('Add Video', function(){
        xit('User can upload Video to SVL', function(){
        HomePage.open();
        HomePage.GoToLoginPage();
        LoginPage.Login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        LoginPage.open();
        HomePage.GoToAddVideoPage();
       //browser.pause(5000);
      })
    })