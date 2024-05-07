describe("Smoke Test - Update User", () => {
    // Assuming you've already set up the authentication token
    //no authneeded since it is simple loading
    
    //const authToken = Cypress.env('authToken');  
    it("should update the current user", () => {
   
        cy.visit("/");

        //assertion to the liminted elements present

        //first in order 

        cy.get('h1').should('be.visible').and('have.text', 'Contact List App');

        //second

        cy.get('body > :nth-child(2)').should('be.visible').should('have.text' , '\n        Welcome! This application is for testing purposes only. The database will be purged as needed to keep costs down.\n    ');

        //third

        cy.get('body > :nth-child(3)').should('be.visible').and('have.text', '\n        The API documentation can be found here.\n    ');

        //fourth

        cy.get('a')
        .contains('here') 
        .should('have.attr', 'href', 'https://documenter.getpostman.com/view/4012288/TzK2bEa8'); 

    //fields

    cy.get('#email').should('be.visible').and('be.empty');
    cy.get('#password').should('be.visible').and('be.empty')

    //inputs 

    cy.get('#submit').should('be.visible').and('have.text', 'Submit').and('not.be.disabled');

    //

    cy.get('.main-content > :nth-child(4)').should('have.text', 'Not yet a user? Click here to sign up!');

    //signup

    cy.get('#signup').should('be.visible').and('have.text', 'Sign up').and('not.be.disabled');

    cy.get('footer > p').should('be.visible').and('have.text','Created by Kristin Jackvony, Copyright 2021 ');
  });

  });

