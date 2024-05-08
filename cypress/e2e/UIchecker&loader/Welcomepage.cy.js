// Import commands

describe("Login Test - UI elements", () => {
  beforeEach(() => {
    // Login i navigacija
    cy.login("ajdin.belko95@gmail.com", "Belkon12345");
  });

  it("UI elements welcome page after login", () => {
   
    //welcome page 

    cy.get('h1').should('be.visible').and('have.text' , 'Contact List')

    cy.get('.main-content > :nth-child(2)').should('be.visible').and('have.text', 'Click on any contact to view the Contact Details')

    cy.get('#add-contact').should('be.visible').and('not.be.disabled').and('have.text', 'Add a New Contact');

    cy.get('.contactTable').should('be.visible').and('not.be.disabled').contains(/John|Test|Anna|Ann/).should('exist');

    cy.get('footer > p').should('be.visible').and('have.text','Created by Kristin Jackvony, Copyright 2021 ');

    cy.get('img').should('be.visible').and('have.attr', 'src');

    cy.get('#logout').should('be.visible').and('not.be.disabled').and('have.text', 'Logout');

    });
});
