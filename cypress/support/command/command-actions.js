Cypress.Commands.add('clickAnyElement', function(element){
    cy.get(element).should('be.visible').click()


})

Cypress.Commands.add('typeAnyTextOnAnyTextField', function(element){
    cy.get(element).should('be.visible').click()
})

//Cypress.Commands.add('typeAnyOnAnyTextField', function())