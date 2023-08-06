import SignupPage from "../pageObjects/HotelAdactin/SignupPage"
const signupObjects = new SignupPage()
Cypress.Commands.add("adactinSignup", () => {
    cy.visit('https://adactinhotelapp.com/')
    cy.contains('New User Register Here').click()
    cy.get(signupObjects.username).type('samitester1106166')
    cy.get(signupObjects.password).type('samitester@11')
    cy.get(signupObjects.re_password).type('samitester@11')
    cy.get(signupObjects.f_name).type('Mirza SamiUllah Baig')
    cy.get(signupObjects.email_address).type('samibaig22000@gmail.com')
    // cy.get(signuppage.captchatext).type('')
    cy.wait(5000)
    cy.get(signupObjects.termscheckbox).click()
    cy.get(signupObjects.registerbtn).click()
    cy.wait(6000)

})
