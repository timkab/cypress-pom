// test cleanup command
Cypress.Commands.add("clearAllCache", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

