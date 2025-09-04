const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false
  },
  env: {
    valid_user: process.env.QA_USER || 'standard_user',
    valid_pass: process.env.QA_PASS || 'secret_sauce'
  }
})
