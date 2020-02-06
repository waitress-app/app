Cypress.Commands.add('login', (user = 'laura') => {
  cy.visit('/login')
  cy.window()
    .its('app')
    .then(app => {
      const users = {
        laura: {
          id: 'id',
          picture: 'https://randomuser.me/api/portraits/women/42.jpg',
          name: 'Laura'
        },
        diego: {
          id: 'id2',
          picture: 'https://randomuser.me/api/portraits/men/90.jpg',
          name: 'Diego'
        }
      }
      app.$store.dispatch('auth/authentication', users[user])
    }).location('pathname', { timeout: 20000 }).should('eq', '/tables')
})
