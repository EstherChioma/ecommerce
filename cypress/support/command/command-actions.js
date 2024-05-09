Cypress.Commands.add('', function(element){
    cy.get(element).should('be.visible').click()


})

//Cypress.Commands.add('typeAnyOnAnyTextField', function())