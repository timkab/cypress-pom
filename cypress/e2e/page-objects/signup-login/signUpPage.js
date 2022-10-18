class SignUpPage {
  elements = {
    firstNameInput: () => cy.get("#firstNameInput"),
    lastNameInput: () => cy.get("#lastNameInput"),
    emailInput: () => cy.get("#emailInput"),
    passwordInput: () => cy.get("#passwordInput"),
    agreementChk: () => cy.get("#explicitAgreement"),
    createAcctBtn: () => cy.get("button[type='submit']"),
    signInBtn: () => cy.get("[translate='LOG_IN_BUTTON']"),
    emailInputError: () => cy.get("#emailInput:invalid"),
    passwordInputError: () => cy.get("#passwordInput:invalid"),
    formTitle: () => cy.get("[translate = 'CREATE_YOUR_FREE_ACCOUNT']"),
  };

  typeFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  acceptAgreement() {
    this.elements.agreementChk().click();
  }

  clickCreateAcctBtn() {
    this.elements.createAcctBtn().click();
  }

  clickSignInBtn() {
    this.elements.signInBtn().click();
  }

  clearEmailInput() {
    this.elements.emailInput().clear();
  }
}
module.exports = new SignUpPage();
