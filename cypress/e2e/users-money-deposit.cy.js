import { usersLogin } from "../fixtures/user-data-login.json";

describe("Users depositing money in their own account", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  usersLogin.forEach((user) => {
    it("Should deposit money in the user's account", () => {
      cy.userLoginIn(user.userName, user.password);
      cy.transferingFundsFromCheckingToSavings();
    });
  });
});
