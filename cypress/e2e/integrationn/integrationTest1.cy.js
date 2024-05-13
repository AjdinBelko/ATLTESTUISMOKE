describe('Login Functionality', () => {
    beforeEach(() => {
      // Visit the login page
      cy.visit('/');
    });
  
    it('should log in a user successfully', () => {
      // Intercept the login API request and respond with a successful login
      cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/users/login', {
        statusCode: 200,
        body: {
          success: true,
          user: {
            email: 'ajdin.belko95@gmail.com',
            password: 'Belkon12345',
          },
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMwZTVlZmQ2MTQ0NTAwMTMzYzY3MDgiLCJpYXQiOjE3MTQ4NjA4MjV9.A2r_THRjzgqY-swXTLxe0RwR_IPmoBT2CUWlO82pLCM',
        },
      }).as('loginRequest10');
  
      // Fill in the login form with valid credentials
      cy.get('#email').type('ajdin.belko95@gmail.com');
      cy.get('#password').type('Belkon12345');
  
      // Submit the login form
      cy.get('#submit').click();
  
      // Wait for the login request to complete
      cy.wait('@loginRequest10');
  
      // Check that the user is redirected to the dashboard
      cy.url().should('include', '/contactList');
  
      // Check that the session token is stored
      cy.wait(3000)
      cy.getCookie('sessionToken').should('exist');
    });
  
  });
  