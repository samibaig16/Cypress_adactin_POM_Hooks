import BookingPage from "../pageObjects/HotelAdactin/BookingPage"
const bookingObjects = new BookingPage()
Cypress.Commands.add("adactinBooking", () => {
    cy.get(bookingObjects.firstname).type('Sami')
    cy.get(bookingObjects.lastname).type('Baig')
    cy.get(bookingObjects.billingaddress).type('XYZ Gulistan e Johar Block 2 ')
    cy.get(bookingObjects.cc_no).type('1199001100224411')
    cy.get(bookingObjects.cc_type).select('VISA')
    cy.get(bookingObjects.cc_exp_month).select('February')
    cy.get(bookingObjects.cc_exp_year).select('2027')
    cy.get(bookingObjects.ccv_no).type('415')
    cy.get(bookingObjects.booknowBtn).click()

})
