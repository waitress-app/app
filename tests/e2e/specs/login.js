// https://docs.cypress.io/api/introduction/api.html

describe('Login with auth0', () => {
  it('should successfully log into our app', () => {
    cy.login()
    cy.get('.c-link.caption').should('contain', 'Não é e2e testing?')
  })
})
