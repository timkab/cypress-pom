import validData from "../fixtures/validRegLoginData.json";
const LogInPage = require("../page-objects/signup-login/logInPage");
const SignUpPage = require("../page-objects/signup-login/signUpPage");
const SignUpProfilePage = require("../page-objects/signup-login/signUpProfilePage");
const ProjectsHomePage = require("../page-objects/projects/projectsHomePage");
const NavSidebar = require("../page-objects/projects/navSidebar");
const TasksPage = require("../page-objects/projects/tasksPage");
const projectName = "Project #" + Math.floor(Math.random() * 100);
const genNewEmail = "test" + Date.now() + "@test.com";

describe("Project test", () => {
  before("Navigate to base url", () => {
    cy.visit("/");
  });

  it("Sign Up", () => {
    LogInPage.clickCreateAcctBtn();

    SignUpPage.typeFirstName(validData.firstName);
    SignUpPage.typeLastName(validData.lastName);
    SignUpPage.typeEmail(genNewEmail);
    SignUpPage.typePassword(validData.password);
    SignUpPage.acceptAgreement();
    SignUpPage.clickCreateAcctBtn();

    SignUpProfilePage.typeCompanyName(validData.companyName);
    SignUpProfilePage.selectCompanyType(validData.companyType1);
    SignUpProfilePage.selectCompanySize(validData.companySize1);
    SignUpProfilePage.typePhoneNumber(validData.phoneNumber);
    SignUpProfilePage.clickCompleteBtn();
  });

  it("Confirm landed on projects home page", () => {
    ProjectsHomePage.elements.newProjectBtn().should("be.visible");
  });

  it("Create a new project", () => {
    ProjectsHomePage.clickNewProjectBtn();
    ProjectsHomePage.typeWizardProjectName(projectName);
    ProjectsHomePage.clickWizardCreateBtn();
    ProjectsHomePage.clickWizardNoPlansBtn();
    ProjectsHomePage.clickModalYesBtn();
    ProjectsHomePage.clickWizardNextBtn();
    ProjectsHomePage.clickWizardAddDfltCatBtn();
    ProjectsHomePage.clickWizardNextBtn();
    ProjectsHomePage.clickWizardNextBtn();
    ProjectsHomePage.clickWizardNextBtn();
  });

  it("Confirm project was created", () => {
    NavSidebar.elements
      .currentProjectName()
      .should("have.attr", "title", projectName);
  });

  it("Create a new task", () => {
    NavSidebar.clickTasksBtn();
    TasksPage.clickNewTaskBtn();
    TasksPage.clickTaskEditTitleBtn();
    TasksPage.typeTaskTitle("Testing New Task");
    TasksPage.clickTitleSubmitBtn();
    TasksPage.clickCloseTaskBtn();
  });
});
