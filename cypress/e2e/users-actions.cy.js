import { users } from "../fixtures/user-data-testing.json";
import { usersLogin } from "../fixtures/user-data-login.json";

describe("User's Actions", () => {
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

  usersLogin.forEach((user) => {
    it(`Should deposit money for user: ${user.userName}`, () => {
      cy.userLoginIn(user.userName, user.password);
      cy.transferFundsToSavings();
    });
  });

  it("Reset database", () => {
    cy.resetData();
  });
});