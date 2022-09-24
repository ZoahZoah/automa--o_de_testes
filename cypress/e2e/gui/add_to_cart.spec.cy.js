/// <reference types="Cypress" />

describe('Add to cart', () =>{
    before(() => cy.login())

    it('adicionado com sucesso', () =>{
        var bestseller_location = ['#blockbestsellers > .first-in-line.first-item-of-tablet-line',
            '#blockbestsellers > :nth-child(2)',
            '#blockbestsellers > .last-item-of-tablet-line.first-item-of-mobile-line',
            '#blockbestsellers > .last-item-of-tablet-line.first-item-of-mobile-line',
            '#blockbestsellers > .first-in-line.last-line',
            '#blockbestsellers > .last-line.last-item-of-tablet-line',
            '#blockbestsellers > .last-line.last-item-of-tablet-line'
        ]

        cy.visit('baseUrl')
        cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').click()
        var item_location = bestseller_location
        cy.add_to_cart(item_location[0]) /// Function to add to cart
        
        cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart')
        cy.get('.cross').click()
    })
})