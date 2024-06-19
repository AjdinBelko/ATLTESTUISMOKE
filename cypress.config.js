const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMwZTVlZmQ2MTQ0NTAwMTMzYzY3MDgiLCJpYXQiOjE3MTg3OTE1NTF9.tb9sFIE3I2CNNuItKlLUU3KqXdhjIEuOPp_VVOUhvsc",
    snapshotOnly: true  
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
