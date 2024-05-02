describe("Edit user - UI TEST", () => {
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
            // Verify if the form fields
            cy.get('#contactDetails').should('be.visible');
        
            // Check for edit, delete, and return buttons visibility

            cy.get('#edit-contact').should('be.visible');
            cy.get('#delete').should('be.visible');
            cy.get('#return').should('be.visible');


            //proceeds to delete the user 

            cy.get('#edit-contact').should('be.visible').click();

            cy.contains('Edit Contact');

            cy.get('#firstName').should('have.value', 'John').type('AAAA');
            cy.get('#lastName').should('have.value', 'Doe').type('BBBBB');

            cy.get('#submit').should('be.visible').click();

            //check for update

            cy.get('#firstName').should('have.value', 'JohnAAAA');

            cy.get('#lastName').should('have.value', 'DoeBBBBB');

            //edit usera je napravljen ili updated, smoke test runned again to back the user on original state for test and value of John Doe

        });
        
    }); 