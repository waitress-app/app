// https://docs.cypress.io/api/introduction/api.html

describe('Login page', () => {
  it('Visits the app root url check for "enter" button', () => {
    cy.visit('/')
    cy.get('button').should('be.enabled')
  })
})
