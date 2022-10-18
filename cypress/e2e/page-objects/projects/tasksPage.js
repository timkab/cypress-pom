class TasksPage {
  elements = {
    newTaskBtn: () => cy.get("[data-e2e='create-new-task']"),
    modalEditTitleBtn: () => cy.get("[data-e2e='task-edit-name']"),
    modalEditTitleInput: () => cy.get(".edit-task-name-input"),
    modalEditTitleSubmitBtn: () => cy.get("[data-e2e='task-edit-check']"),
    modalCloseBtn: () => cy.get("[data-e2e='task-edit-dismiss']"),
  };

  clickNewTaskBtn() {
    this.elements.newTaskBtn().click();
  }

  clickTaskEditTitleBtn() {
    this.elements.modalEditTitleBtn().click();
  }

  typeTaskTitle(taskTitle) {
    this.elements.modalEditTitleInput().type(taskTitle);
  }
  clickTitleSubmitBtn() {
    this.elements.modalEditTitleSubmitBtn().click();
  }

  clickCloseTaskBtn() {
    this.elements.modalCloseBtn().click();
  }
}
module.exports = new TasksPage();


