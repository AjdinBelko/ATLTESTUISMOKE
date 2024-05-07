// Import commands

describe("Redirections loading", () => {
    beforeEach(() => {
      // navigation load page

      cy.visit('/');
    });
  
    it("Redirection #1", () => {
        // Intercept the network request to the new URL
        cy.intercept('GET', 'https://documenter.getpostman.com/view/4012288/TzK2bEa8').as('redirectRequest');
      
        // Click the link

        cy.get('a').contains('here').should('be.visible').and('not.be.disabled').click();
      
        // Wait for the network request to complete
        cy.wait('@redirectRequest').then(({ response }) => {
          
            //status response and redirection completed

          expect(response.statusCode).to.be.oneOf([200, 201]);
        });
      });
      
    it("Redirection #2", () => {
      //code

      cy.intercept('GET', 'https://thinking-tester-contact-list.herokuapp.com/addUser').as('redirectRequest2');

      cy.get('#signup').should('be.visible').and('not.be.disabled').click();

      cy.wait('@redirectRequest2').then(({ response }) => {
          
        //status response and redirection completed

      expect(response.statusCode).to.be.oneOf([200, 201]);
    });

    //new additional fields

    cy.get('#firstName').invoke('attr', 'placeholder').should('eq', 'First Name');

    cy.get('#lastName').invoke('attr', 'placeholder').should('eq', 'Last Name');

    cy.get('#email').invoke('attr', 'placeholder').should('eq', 'Email');

    cy.get('#password').invoke('attr', 'placeholder').should('eq', 'Password');


//buttons 

cy.get('#submit').should('be.visible').and('have.text','Submit');
cy.get('#cancel').should('be.visible').and('have.text', 'Cancel');


  });
  
  });