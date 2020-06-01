Cypress.Commands.add(
  'login',
  (username, password, appState = { targetUrl: '/' }) => {
    cy.log(`Logging in as ${username || 'default user'}`)
    const options = {
      method: 'POST',
      url: Cypress.env('auth_url'),
      body: {
        grant_type: 'password',
        username: username || Cypress.env('auth_username'),
        password: password || Cypress.env('auth_password'),
        audience: Cypress.env('auth_audience'),
        scope: 'openid profile email',
        client_id: Cypress.env('auth_client_id'),
        client_secret: Cypress.env('auth_client_secret')
      }
    }
    cy.request(options).then(({ body }) => {
      /* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
      const { access_token, expires_in, id_token } = body

      cy.server()

      // intercept Auth0 request for token and return what we have
      cy.route({
        url: 'oauth/token',
        method: 'POST',
        response: {
          access_token: access_token,
          id_token: id_token,
          scope: 'openid profile email',
          expires_in: expires_in,
          token_type: 'Bearer'
        }
      })

      // Auth0 SPA SDK will check for value in cookie to get appState
      // and validate nonce (which has been removed for simplicity)
      const stateId = 'test'
      cy.setCookie(
        `a0.spajs.txs.${stateId}`,
        encodeURIComponent(JSON.stringify({
          'appState': appState,
          'scope': 'openid profile email',
          'audience': Cypress.env('auth_audience'),
          'redirect_uri': 'http://localhost:8080/login'
        }))
      ).then(() => {
        cy.visit(`/login?code=test-code&state=${stateId}`)
      })
    })
  }
)
