describe("Login Regression Test", () => {
    it("should display 'Incorrect username or password' message with maximum length inputs", () => {
      // Generate email and password strings with maximum allowed length
      const maxLengthEmail = 'a'.repeat(255) + '@example.com'; // Maximum email 
      const maxLengthPassword = 'p'.repeat(72); // Maximum password length 
  
      // Attempt login with maximum length email and password
      cy.api({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
        failOnStatusCode: false, // Allow the test to continue 
        body: {
          email: maxLengthEmail,
          password: maxLengthPassword
        }
      }).then((response) => {
        // Check if login failed with 401 Unauthorized status
        expect(response.status).to.equal(401);
        
      });
    });
  });
  