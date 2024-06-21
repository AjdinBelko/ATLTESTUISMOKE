describe("Smoke Test - User Delete", () => {
    // envoriement token
    const authToken = Cypress.env('authToken');
  
    it("should delete the current user", () => {
      cy.api({
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
  