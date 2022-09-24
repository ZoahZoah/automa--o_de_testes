/// <reference types="Cypress" />

describe('logout', () => {
    beforeEach(() =>  cy.login())
    it('sucessfully', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}?controller=authentication&back=my-account`)
    })
})