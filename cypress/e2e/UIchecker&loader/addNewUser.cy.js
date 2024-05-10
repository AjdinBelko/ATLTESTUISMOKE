// Import commands

describe("Login Test - UI elements", () => {
    beforeEach(() => {
      // Login i navigacija
      cy.login("ajdin.belko95@gmail.com", "Belkon12345");
    });
  
    it("UI elements welcome page after login", () => {
     
      //addnewUserflow 

      cy.get('#add-contact').should('be.visible').click();

      //forms and fields 

      cy.get('h1').should('have.text', 'Add Contact');

      cy.get('[for="firstName"]').should('be.visible').and('have.text', ' * First Name:');

      cy.get('#firstName').should('be.visible').and('not.be.disabled');
      cy.get('#firstName').invoke('attr', 'placeholder').should('eq', 'First Name');

      cy.get('#lastName').should('be.visible').and('not.be.disabled');
      cy.get('#lastName').invoke('attr', 'placeholder').should('eq', 'Last Name');

      cy.get('#birthdate').should('be.visible').and('not.be.disabled');
      cy.get('#birthdate').invoke('attr', 'placeholder').should('eq', 'yyyy-MM-dd');

      cy.get('#email').should('be.visible').and('not.be.disabled');
      cy.get('#email').invoke('attr', 'placeholder').should('eq', 'example@email.com');

      cy.get('#phone').should('be.visible').and('not.be.disabled');
      cy.get('#phone').invoke('attr', 'placeholder').should('eq', '8005551234');

      cy.get('#street1').should('be.visible').and('not.be.disabled');
      cy.get('#street1').invoke('attr', 'placeholder').should('eq', 'Address 1');

      cy.get('#street2').should('be.visible').and('not.be.disabled');
      cy.get('#street2').invoke('attr', 'placeholder').should('eq', 'Address 2');

      cy.get('#city').should('be.visible').and('not.be.disabled');
      cy.get('#city').invoke('attr', 'placeholder').should('eq', 'City');

      cy.get('#stateProvince').should('be.visible').and('not.be.disabled');
      cy.get('#stateProvince').invoke('attr', 'placeholder').should('eq', 'State or Province');

      cy.get('#postalCode').should('be.visible').and('not.be.disabled');
      cy.get('#postalCode').invoke('attr', 'placeholder').should('eq', 'Postal Code');

      cy.get('#country').should('be.visible').and('not.be.disabled');
      cy.get('#country').invoke('attr', 'placeholder').should('eq', 'Country');

      cy.get('#submit').should('be.visible').and('not.be.disabled');

      cy.get('#cancel').should('be.visible').and('not.be.disabled');

      cy.get('#logout').should('be.visible').and('not.be.disabled').and('have.text', 'Logout');

      cy.get('img').should('be.visible').and('have.attr', 'src');
  
      });
  });