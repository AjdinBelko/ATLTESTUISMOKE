describe("Delete user", () => {
    beforeEach(() => {
      // Login i navigacija
      cy.login("ajdin.belko95@gmail.com", "Belkon12345");

    });

    it('Welcome page loaded accordingly', () => {
    
        cy.contains("Contact List");
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/')

    });  

    it('Deletes the user', () => {
      // click on the suer and assertions
      cy.get('.contactTableBodyRow > :nth-child(2)')
          .should('contain.text', 'John Doe')
          .click();
    
    
          //wait for the assertions and new loads 
    
          cy.contains('Contact Details');
    
        //get the form 
    
        cy.get('#contactDetails').should('be.visible');
    
      // Check for edit, delete, and return
    
      //edit
      cy.get('#edit-contact').should('be.visible');
      //delete
      cy.get('#delete').should('be.visible');
      //return
      cy.get('#return').should('be.visible');
    
      
      // Delete the user
      cy.get('#delete').should('be.visible').click();
    
      // Assert that the user is deleted
      cy.get('.contactTableBodyRow').should('not.contain', 'John Doe');
    });
  });    