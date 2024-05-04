describe("Edit user - UI TEST", () => {
    beforeEach(() => {
      // Login i navigacija
      cy.login("ajdin.belko95@gmail.com", "Belkon12345");

    });

    it('Welcome page loaded accordingly', () => {
    
        cy.contains("Contact List");
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/')

    });  

    it('Edits the user', () => {
      // Click on the user in the table
      cy.get('.contactTableBodyRow > :nth-child(2)')
          .should('contain.text', 'John Doe')
          .click();
  
      // Wait for contact details to appear
      cy.contains('Contact Details');
  
      // Verify if the form fields
      cy.get('#contactDetails').should('be.visible');
  
      // Check for edit, delete, and return buttons visibility
      cy.get('#edit-contact').should('be.visible');
      cy.get('#delete').should('be.visible');
      cy.get('#return').should('be.visible');
  
      // Proceed to edit the user 
      cy.get('#edit-contact').should('be.visible').click();
      cy.contains('Edit Contact');
  
      // Edit user details
      cy.get('#firstName').should('have.value', 'John').clear().type('JohnAAAA');
      cy.get('#lastName').should('have.value', 'Doe').clear().type('DoeBBBBB');
      cy.get('#submit').should('be.visible').click();
  
      // Check for updated details
      cy.contains('Contact Details');
      cy.get('#firstName').should('have.value', 'JohnAAAA');
      cy.get('#lastName').should('have.value', 'DoeBBBBB');
  
      // Run smoke test to revert the user back to the original state with values John Doe
  });
});  