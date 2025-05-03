import { users } from "../fixtures/user-data-testing.json";

describe("User Registration", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  users.forEach((user) => {
    it(`Should register a new user: ${user.firstName} ${user.lastName}`, () => {
      cy.userInformationRegister(
        user.firstName,
        user.lastName,
        user.streetName,
        user.cityName,
        user.stateName,
        user.zipCode,
        user.phoneNumber,
        user.ssn
      );
      cy.userCreation(user.userName, user.password);
      cy.userCreationConfirmationMessage(user.userName);
    });
  });
});
