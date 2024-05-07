
import { runRedirectionTest } from '../../support/redirectionTest';

describe("Another Test", () => {
    beforeEach(() => {
        // Run the redirection test before each test in this file
        runRedirectionTest();

    });

    it("Test with Button Click", () => {
// Click the cancel button
    cy.get('#cancel').should('be.visible').click();
    
    cy.url().should('include' , '/login');

    cy.contains('Contact List App')

    });

});
