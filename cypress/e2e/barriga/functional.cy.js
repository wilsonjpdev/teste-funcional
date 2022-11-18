/// <reference types="cypress" />

describe('Should test at a functional level', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me')

        cy.get('[data-test="email"]').type('teste')
        cy.get('[data-test="passwd"]').type('teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('...', () => {
        
    })
}
)