Feature: Yahoo News Tab
As a site user
    I should be able to navigate to the news page
    from the home page

Scenario: Go to the news page
    Given I go to the website "http://www.yahoo.com"
    When I navigate to the news page
    Then I expect the title of the page "Yahoo Movies" 
