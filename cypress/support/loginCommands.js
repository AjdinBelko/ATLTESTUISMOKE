Cypress.Commands.add("login", (username, password) => {  
    // Fill in the username and password fields
    cy.get('#email').type(username);
    cy.get('#password').type(password);
  
    // Submit the login form
    cy.get('#submit').click();
  
    // Optionally, wait for some element on the logged-in page to confirm successful login
    cy.contains("Contact List"); // Example: Check for a welcome message
  });
  