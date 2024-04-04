Feature: Login

    Scenario: log in user
        Given I am on Login Page
        Then I type "admin@mail.com" in username field
        And I type "Password1234!" in password field
        And I press the login button
        Then I should see my name in the navmenu
        Then I should log out 
        And I should see Log in