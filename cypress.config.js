const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njc1ZDc5NTk2YjI3MDAwMTMxODA5MWYiLCJpYXQiOjE3MTg5OTg5MzN9.HR5RZeZY242bQa1sH5RoXQEgTfXFK_vKV-g7q8YeX6M",
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
