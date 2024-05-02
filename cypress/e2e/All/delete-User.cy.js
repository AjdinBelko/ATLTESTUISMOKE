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
        // Click on the user in the table
        cy.get('.contactTableBodyRow > :nth-child(2)')
          .should('contain.text', 'John Doe')
          .click();
    
        // Wait for contact details to appear
        cy.contains('Contact Details');        
            // Verify if the form fields contain the expected values
            cy.get('#contactDetails').should('be.visible');
        
            // Check for edit, delete, and return

            cy.get('#edit-contact').should('be.visible');
            cy.get('#delete').should('be.visible');
            cy.get('#return').should('be.visible');


            //proceeds to delete the user if needed and added back via smoke test

            cy.get('#delete').should('be.visible').click();

        });
        
    }); 