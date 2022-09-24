/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('?controller=authentication&back=my-account')

    cy.get('#email').type(Cypress.env('user_name'))
    cy.get('#passwd').type(Cypress.env('user_password'))
    cy.get('#SubmitLogin > span').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.logout').click()
})

Cypress.Commands.add('add_to_cart', item_location => {
    cy.get(item_location).contains('Add to cart').click()
})

Cypress.Commands.add('check_out_cart', ()  => {
    cy.get('#button_order_cart').click()
})