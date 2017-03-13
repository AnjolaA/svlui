Feature: Title check
    I should be able to go to a website
    and check its title

Scenario: Get the title of webpage
    Given I go to the website "http://www.google.com"
    Then I expect the title of the page "Google"

    Scenario: Search for text
    Given I go to the website "http://www.google.com"
    When I search for "Sky"
    Then I expect the title of the page "Sky - Google Search"
