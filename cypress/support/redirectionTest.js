// redirectTest.js

export function runRedirectionTest() {
    describe("Redirection Test", () => {

            // navigation load page
            cy.visit('/');
            // Click the button with id 'signup'
            cy.get('#signup').should('be.visible').and('not.be.disabled').click();
            
            cy.url().should('include', '/addUser');

            cy.wait(1000);
        });
    };