class HomeNavigationHeader {
  elements = {
    profileMenuBtn: () => cy.get("[data-e2e='profile-menu']"),
    profileSignOutBtn: () => cy.get("a[translate='SIGN_OUT']"),
  };

  clickProfileMenuBtn() {
    this.elements.clickProfileMenuBtn().click();
  }

  clickSignOutBtn() {
    this.elements.clickSignOutBtn().click();
  }
}

module.exports = new HomeNavigationHeader();
