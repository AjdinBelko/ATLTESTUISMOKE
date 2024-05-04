const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMwZTVlZmQ2MTQ0NTAwMTMzYzY3MDgiLCJpYXQiOjE3MTQ4NjA4MjV9.A2r_THRjzgqY-swXTLxe0RwR_IPmoBT2CUWlO82pLCM"
  },

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
  },
})