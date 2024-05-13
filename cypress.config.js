const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMwZTVlZmQ2MTQ0NTAwMTMzYzY3MDgiLCJpYXQiOjE3MTU2MjA2NzF9._ExTYUJG_W3et152hw9Xxxeigy3jVN-nEE-iKn36mU0"
  },

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
  },

  chromeWebSecurity: false,

  // reporter mocha config
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mocha'
  }
  
});