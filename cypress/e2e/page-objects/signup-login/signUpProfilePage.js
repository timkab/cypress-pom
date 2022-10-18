// Complete your proﬁle (Post register page)
class SignUpProfilePage {
  elements = {
    companyNameInput: () => cy.get("#company"),
    companyTypeDDL: () => cy.get("#companyType"),
    companySizeDDL: () => cy.get("#companySize"),
    phoneNumberInput: () => cy.get("#phone"),
    completeBtn: () => cy.get("[data-e2e='create-account-complete']"),
    formTitle: () => cy.get("[translate='COMPLETE_YOUR_PROFILE']"),
    phoneNumberInputError: () => cy.get("#phoneValidInput:invalid"),
  };

  typeCompanyName(companyName) {
    this.elements.companyNameInput().type(companyName);
  }

  selectCompanyType(companyType) {
    this.elements.companyTypeDDL().select(companyType);
  }

  selectCompanySize(companySize) {
    this.elements.companySizeDDL().select(companySize);
  }

  typePhoneNumber(phoneNumber) {
    this.elements.phoneNumberInput().type(phoneNumber);
  }

  clickCompleteBtn() {
    this.elements.completeBtn().click();
  }

  clearPhoneNumberInput() {
    this.elements.phoneNumberInput().clear();
  }
}

module.exports = new SignUpProfilePage();
