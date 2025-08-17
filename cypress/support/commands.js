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

Cypress.Commands.add("resetData", () => {
  cy.get('#headerPanel > ul.leftmenu > li:nth-child(6) > a').click();
  cy.contains('button', 'Clean').click();  
  cy.get('#rightPanel > p > b').should('have.text', 'Database Cleaned');
})