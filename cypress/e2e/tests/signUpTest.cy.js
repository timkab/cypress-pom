import validData from "../fixtures/validRegLoginData.json";
import invalidData from "../fixtures/invalidRegLoginData.json";
const SignUpPage = require("../page-objects/signup-login/signUpPage");
const SignUpProfilePage = require("../page-objects/signup-login/signUpProfilePage");
const LogInPage = require("../page-objects/signup-login/logInPage");
const ProjectsHomePage = require("../page-objects/projects/projectsHomePage");
const genNewEmail = "test" + Date.now() + "@test.com";

describe("Sign up flow", () => {
  before("Navigate to base url", () => {
    cy.visit("/");
  });

  it("Click Create an Account CTA should take to SignUp form", () => {
    LogInPage.clickCreateAcctBtn();
  });

  it("Confirm landed on Sign up page", () => {
    SignUpPage.elements
      .formTitle()
      .should("contain", "Create your free account to get started");
  });

  //negative scenario
  it("Fill out all fields and submit form with invalid email format", () => {
    SignUpPage.typeFirstName(validData.firstName);
    SignUpPage.typeLastName(validData.lastName);
    SignUpPage.typeEmail(invalidData.emailNoDomainName);
    SignUpPage.typePassword(validData.password);
    SignUpPage.acceptAgreement();
    SignUpPage.clickCreateAcctBtn();
  });

  it("Confirm email input error message", () => {
    SignUpPage.elements
      .emailInputError()
      .invoke("prop", "validationMessage")
      .should("equal", "Invalid email");
  });

  it("Replace with valid email and submit", () => {
    SignUpPage.clearEmailInput();
    SignUpPage.typeEmail(genNewEmail);
    SignUpPage.clickCreateAcctBtn();
  });

  it("Confirm landed on 'complete your profile' page", () => {
    SignUpProfilePage.elements
      .formTitle()
      .should("contain", "Complete your proﬁle to access Fieldwire");
  });

  // negative scenario
  it("Fill out all fields and submit form with invalid phone number format", () => {
    SignUpProfilePage.typeCompanyName(validData.companyName);
    SignUpProfilePage.selectCompanyType(validData.companyType1);
    SignUpProfilePage.selectCompanySize(validData.companySize1);
    SignUpProfilePage.typePhoneNumber(invalidData.usPhoneTooShort);
    SignUpProfilePage.clickCompleteBtn();
  });

  it("Confirm phone input error message", () => {
    SignUpProfilePage.elements
      .phoneNumberInputError()
      .invoke("prop", "validationMessage")
      .should("equal", "Invalid phone number");
  });

  it("Replace phone number with valid and submit", () => {
    SignUpProfilePage.clearPhoneNumberInput();
    SignUpProfilePage.typePhoneNumber(validData.phoneNumber);
    SignUpProfilePage.clickCompleteBtn();
  });

  it("Confirm landed on Projects home page", () => {
    ProjectsHomePage.elements.newProjectBtn().should("be.visible");
  });
});
