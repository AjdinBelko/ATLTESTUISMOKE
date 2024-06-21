describe("User Authentication and Logout", () => {
    const authToken = Cypress.env('authToken');
    
    beforeEach(() => {
        // Login
        cy.login("ajdin.belko95@gmail.com", "Belkon12345");
    });

    it('Welcome page loaded accordingly', () => {
        cy.contains("Contact List");
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/');
    });

    it("Logs out the user", () => {
        const authToken = Cypress.env('authToken');
        // Logout the user
        cy.api({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            
            //response should be 200 and loged out user 

            expect(response.status).to.equal(200);
            
        });
    });
});
