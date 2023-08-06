import SearchPage from "../pageObjects/HotelAdactin/SearchPage"
const searchObjects = new SearchPage()
Cypress.Commands.add("adactinSearch", () => {
    cy.get(searchObjects.Location).select('Sydney')
    cy.get(searchObjects.Hotels).select('Hotel Creek')
    cy.get(searchObjects.Room_type).select('Deluxe')
    cy.get(searchObjects.no_ofrooms).select('3 - Three')
    cy.get(searchObjects.checkindate).type('06/08/2023')
    cy.get(searchObjects.checkoutdate).type('09/08/2023')
    cy.get(searchObjects.adultsper_room).select('3 - Three')
    cy.get(searchObjects.childper_room).select('3 - Three')
    cy.get(searchObjects.searchBtn).click()


})