describe("Smoke Test - Logout User", () => {
    const authToken = Cypress.env('authToken');
    
    it("Logs out the user", () => {

        
        // Log out the user via smoke test

        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            // Check if the logout was successful

            expect(response.status).to.equal(200);
            
        });
    
    });
});
