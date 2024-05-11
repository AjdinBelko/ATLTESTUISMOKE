describe("Login Regression Test", () => {
    it("should display 'Incorrect username or password' message with invalid credentials", () => {
      // Attempt login with invalid credentials
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
        failOnStatusCode: false, // Allow the test to continue even if the request fails
        body: {
          email: "ajdin.belko@gmail.com",
          password: "Belkon123456789"
        }
      }).then((response) => {
        // Check if login failed with 401 Unauthorized status
        expect(response.status).to.equal(401);
        
      });
    });
  });
  