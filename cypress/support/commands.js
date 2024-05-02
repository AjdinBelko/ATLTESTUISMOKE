// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//login commands

// In a file like cypress/support/commands.js
Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/"); // Assuming your login page URL is /login
  
    // Fill in the username and password fields
    cy.get('#email')
    .should('be.empty')
    .type(username);
    cy.get('#password')
    .should('be.empty')
    .type(password);
  
    // Submit the login form
    cy.get('#submit')
    .should('be.visible')
    .click();
  
    // Optionally, wait for some element on the logged-in page to confirm successful login
    cy.contains("Contact List"); // Example: Check for a welcome message
  });
  