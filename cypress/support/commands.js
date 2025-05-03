Cypress.Commands.add("userCreation", (userName, password) => {
  cy.get('input[id="customer.username"]').type(userName);
  cy.get('input[id="customer.password"]').type(password);
  cy.get('input[id="repeatedPassword"]').type(password);
  cy.contains("input", "Register").click();
});

Cypress.Commands.add(
  "userInformationRegister",
  (
    firstName,
    lastName,
    streetName,
    cityName,
    stateName,
    zipCode,
    phoneNumber,
    ssn
  ) => {
    cy.contains("#loginPanel > :nth-child(3) > a", "Register").click();
    cy.get('input[id="customer.firstName"]').type(firstName);
    cy.get('input[id="customer.lastName"]').type(lastName);
    cy.get('input[id="customer.address.street"]').type(streetName);
    cy.get('input[id="customer.address.city"]').type(cityName);
    cy.get('input[id="customer.address.state"]').type(stateName);
    cy.get('input[id="customer.address.zipCode"]').type(zipCode);
    cy.get('input[id="customer.phoneNumber"]').type(phoneNumber);
    cy.get(':nth-child(8) > [width="20%"]').type(ssn);
  }
);

Cypress.Commands.add("userCreationConfirmationMessage", (userName) => {
  cy.get(".title").should("have.text", `Welcome ${userName}`);
});

Cypress.Commands.add("userLoginIn", (userName, password) => {
  cy.get(":nth-child(2) > .input").type(userName);
  cy.get(":nth-child(4) > .input").type(password);
  cy.get('input[value="Log In"]').click();
});

Cypress.Commands.add("transferingFundsFromCheckingToSavings", () => {
  cy.get("#leftPanel > ul > :nth-child(1) > a").click();
  cy.get("#type").select("SAVINGS");
  cy.get("form").click();
  cy.wait(1000);
  cy.get("form > div > .button").click();
  cy.wait(1000);
  cy.get("#newAccountId").click();
  cy.get("tr > :nth-child(2) > a").click();
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
