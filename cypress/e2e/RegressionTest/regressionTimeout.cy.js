describe("Network Errors Test", () => {
    it("should handle server timeout gracefully", () => {
      // Intercept the login request and delay the response to simulate a timeout
      cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/users/login', (req) => {
        // Simulate a delay of 30 seconds (adjust as needed)
        setTimeout(() => {
          req.reply(); // Reply to the intercepted request to complete it
        }, 30000); // Increase delay to 30 seconds
      }).as('loginRequest5');
  
      // Trigger the login action
      cy.login("ajdin.belko95@gmail.com", "Belkon12345");
  
      // Wait for the request to complete (or timeout)
      cy.wait('@loginRequest5');
      
      cy.get('.timeout-message').should('be.visible', { timeout: 40000 }); 
    });
  });
  