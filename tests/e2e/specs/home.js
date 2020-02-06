describe('Home page', () => {
  it('Check for user name', () => {
    cy.login()
    cy.get('.c-navbar__name h2').should('contain', 'Laura')
  })
})
