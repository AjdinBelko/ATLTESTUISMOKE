describe('Smoke test - Add user', () => {
    it('Should successfully add a user via POST request', () => {
      // Retrieve the authentication token from environment variables (adjusted per need of token and expiration)
      const authToken = Cypress.env('authToken');
  
      // Define the request body
      const requestBody = {
        "user": {
          "firstName": "Test",
          "lastName": "User",
          "email": "test@fake.com",
          "password": "myPassword"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhiMmRiMWFkZDI2OTE3OTFjMDRjODgiLCJpYXQiOjE2MTk3MzM5Mzd9.06wN8dRBLkFiS_m2XdY6h4oLx3nMeupHvv-3C2AEKlY"
      };
      // Send a POST request to the endpoint
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users',
        body: requestBody,
        headers: {
          Authorization: `Bearer ${authToken}` // Include the authentication token in the request headers
        }
      }).then((response) => {

        // Verify that the response status is 200 (OK) or 201 (Created) based on API documentation
        expect(response.status).to.be.oneOf([200, 201]);
  
        // Verify the response body 

        expect(response.body.user).to.deep.equal(requestBody.user);
  
        // Verify the response body contains the token

        expect(response.body.token).to.equal(requestBody.token);
        
      });
    });
  });
  