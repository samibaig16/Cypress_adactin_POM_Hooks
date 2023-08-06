import SelectPage from "../pageObjects/HotelAdactin/SelectPage";
const selectObjects = new SelectPage()
Cypress.Commands.add("adactinSelect", () => {
    cy.get(selectObjects.selecthotel).click()
    cy.get(selectObjects.continueBtn).click()


})
