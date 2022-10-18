class NavSidebar {
  elements = {
    currentProjectName: () => cy.get(".project-name"),
    tasksBtn: () => cy.get("a[href*='tasks']"),
    plansBtn: () => cy.get("[translate='PLANS']"),
  };

  clickTasksBtn() {
    this.elements.tasksBtn().click();
  }

  clickPlansBtn() {
    this.elements.plansBtn().click();
  }
}
module.exports = new NavSidebar();
