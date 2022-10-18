class LogInPage {
  elements = {
    emailInput: () => cy.get("#email-input"),
    nextBtn: () => cy.get("[data-e2e='login-email']"),
    createAcctBtn: () => cy.get("[translate='CREATE_ACCOUNT']"),
    passwordInput: () => cy.get("#password-input"),
    logInBtn: () => cy.get("[data-e2e='signin-with-password']"),
    logInErrorMessage: () => cy.get(".alert"),
    logInForm: () => cy.get(".form-signin"),
    submitBtn: () => cy.get("button[type='submit']"),
  };

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  clickNextBtn() {
    this.elements.nextBtn().click();
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogInBtn() {
    this.elements.logInBtn().click();
  }

  clickCreateAcctBtn() {
    this.elements.createAcctBtn().click();
  }

  clearPasswordInput() {
    this.elements.passwordInput().clear();
  }
}
module.exports = new LogInPage();
