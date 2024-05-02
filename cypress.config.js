const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMwZTVlZmQ2MTQ0NTAwMTMzYzY3MDgiLCJpYXQiOjE3MTQ0OTQ4NTh9.tuCNSBckyWv_H9-gjfizbyLzITNeuhp0Vct9AQEXVVs"
  },

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
  },
})