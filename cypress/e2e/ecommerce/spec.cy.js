let data 

describe(' Registration', () => {
  before(function(){
    cy.fixture('selectors').then(function(sel){
      data = sel
    })


  })
 
  it('Successful Registration', () => {
    cy.visit('/')
    cy.get(data.myAccount).should('be.visible').click()
    cy.get(data.Register).should('exist').click()
   cy.get(data.firstName).should('be.visible').and('exist').type('Esther')
   cy.get(data.lastName).should('be.visible').and('exist').type('Chioma')
   cy.get(data.email).should('be.visible').and('exist').type('linda@psamisthealthcare.co.uk')
   cy.get(data.telephone).should('be.visible').and('exist').type('07733732561')
   cy.get(data.password).should('be.visible').and('exist').type('esther123')
   cy.get(data.confirmPassword).should('be.visible').and('exist').type('esther123')
   cy.get(data.newLetterSubscription).click()
   cy.get(data.privacyPolicy).should('be.visible').click()
   cy.get(data.Continue).click()

  })
 
})

  