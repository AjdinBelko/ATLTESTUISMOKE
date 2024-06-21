describe("Smoke Test - Update User", () => {
    // Assuming you've already set up the authentication token
    const authToken = Cypress.env('authToken');
  
    // Load the update data from the JSON file
    const updateData = require('./updateUserData.json');
  
    it("should update the current user", () => {
      cy.api({
        method: 'PATCH',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        body: updateData
      }).then((response) => {
        // Check if the request was successful (status code 200)
        expect(response.status).to.equal(200);
  
      });
    });
  });
  