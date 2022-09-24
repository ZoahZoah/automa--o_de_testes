/// <reference types="Cypress" />

describe('login', () => {
    it('Sucessfully', () => {
        cy.login()
    
        
        cy.contains(Cypress.env('user_nickname'))
        cy.title().should('eql', 'My account - My Store')
    })
})