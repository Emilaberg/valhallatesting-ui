import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am on Login Page', () => {
  // TODO: implement step
  cy.visit("/Account/Login")
});

Then('I type {string} in username field', (a) => {
  // TODO: implement step
  cy.get(':nth-child(5) > .form-control').type(a)
});

Then('I type {string} in password field', (a) => {
  // TODO: implement step
  cy.get(':nth-child(6) > .form-control').type(a)
});

Then('I press the login button', () => {
  // TODO: implement step
  cy.get('.w-100').click();
});

Then('I should see my name in the navmenu', () => {
  // TODO: implement step
  cy.get(':nth-child(3) > .row > :nth-child(1) > .d-flex')
});

Then('I should log out', () => {
  // TODO: implement step
  cy.wait(1000);
  cy.get('form > .text-white').click();
});

Then('I should see Log in', () => {
  // TODO: implement step
  cy.get(':nth-child(2) > .d-flex')
});