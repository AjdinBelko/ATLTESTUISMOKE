describe("Smoke Test - User Delete", () => {
    // Assuming you've already set up the authentication token
    const authToken = Cypress.env('authToken');
  
    it("should delete the current user", () => {
      cy.request({
        method: 'DELETE',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {

        expect(response.status).to.equal(200);
        
        });
    });
  });
  