/// <reference types="cypress"/>

import { Runnable } from "mocha"

describe('This is signup testcase', () => {
    
    Cypress.on('uncaught:exception', (err) => {
        return false
    })
    beforeEach(function () {
        cy.viewport(1000,660)
    })
    it('Signup', function(){
        cy.adactinSignup()
        cy.contains('An email verification code has been sent to your email address. Please check your email and verify your email address.')
    })
})
describe('This is Login testcase', () => {
    it('Login, Search, Select, Book', function(){
        cy.adactinLogin()
        cy.adactinSearch()
        cy.adactinSelect()
        cy.adactinBooking()
    })
})

