class ProjectsHomePage {
  elements = {
    newProjectBtn: () => cy.get("[data-e2e='projects-new-project-btn']"),
    wizardProjectNameInput: () => cy.get(".project-name-input"),
    wizardCreateBtn: () => cy.get("[data-e2e='new-project-modal-create-btn']"),
    wizardNoPlansBtn: () => cy.get("[translate='I_DONT_HAVE_PLANS']"),
    wizardCloseBtn: () => cy.get(".close-moda"),
    modalYesBtn: () => cy.get("[data-e2e='action-modal-yes-btn']"),
    wizardNextBtn: () => cy.get("[data-e2e='project-wizard-next-btn']"),
    wizardAddDfltCatBtn: () => cy.get(".add-default-category"),
    filterProjectsInput: () => cy.get("[placeholder='Filter projects']"),
  };

  clickNewProjectBtn() {
    this.elements.newProjectBtn().click();
  }

  typeWizardProjectName(projectName) {
    this.elements.wizardProjectNameInput().type(projectName);
  }

  clickWizardCreateBtn() {
    this.elements.wizardCreateBtn().click();
  }

  clickWizardNoPlansBtn() {
    this.elements.wizardNoPlansBtn().click();
  }

  clickWizardCloseBtn() {
    this.elements.wizardCloseBtn().click();
  }

  clickModalYesBtn() {
    this.elements.modalYesBtn().click();
  }

  clickWizardNextBtn() {
    this.elements.wizardNextBtn().click();
  }

  clickWizardAddDfltCatBtn() {
    this.elements.wizardAddDfltCatBtn().click();
  }

  typeToFilterProjectName(projectName) {
    this.elements.filterProjectsInput().type(projectName);
  }
}

module.exports = new ProjectsHomePage();
