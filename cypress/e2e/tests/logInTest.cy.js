import invalidData from "../fixtures/invalidRegLoginData.json";
import validData from "../fixtures/validRegLoginData.json";
const LogInPage = require("../page-objects/signup-login/logInPage");
const ProjectsHomePage = require("../page-objects/projects/projectsHomePage");

describe("Log in flow", () => {
  before("Navigate to base url", () => {
    cy.visit("/");
  });

  it("Confirm landed on the login page", () => {
    LogInPage.elements.logInForm().should("be.visible");
  });

  it("Sumit btn should be disabled on empty email input", () => {
    LogInPage.elements.submitBtn().should("have.attr", "aria-disabled", "true");
  });

  // negative scenario
  it("Login with invalid password", () => {
    LogInPage.typeEmail(validData.loginEmail);
    LogInPage.clickNextBtn();
    LogInPage.typePassword(invalidData.invalidLoginPassword);
    LogInPage.clickLogInBtn();
  });

  it("Confirm login error message is present", () => {
    LogInPage.elements
      .logInErrorMessage()
      .should(
        "contain",
        "Invalid email or password. Try signing up or resetting your password."
      );
  });

  it("Login with valid credentials", () => {
    LogInPage.clearPasswordInput();
    LogInPage.typePassword(validData.loginPassword);
    LogInPage.clickLogInBtn();
  });

  it("Confirm landed on projects home page", () => {
    ProjectsHomePage.elements.newProjectBtn().should("be.visible");
  });
});
