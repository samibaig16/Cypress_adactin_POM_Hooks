import AdactinLoginPage from "../pageObjects/HotelAdactin/AdactinLoginPage"
const loginObjects = new AdactinLoginPage()
Cypress.Commands.add("adactinLogin", () => {
    cy.visit('https://adactinhotelapp.com/')
    cy.get(loginObjects.usernamee).type('samitester1106')
    cy.get(loginObjects.passwordd).type('samitester@11')
    cy.get(loginObjects.submitBtnn).click()

})
