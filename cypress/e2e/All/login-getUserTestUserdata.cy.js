// Import commands

describe("Login Test - new user TEST DATA 2", () => {
    beforeEach(() => {
      // Login and navigate to the page
      cy.login("ajdin.belko95@gmail.com", "Belkon12345");
    });
  
    it("should provide popup menu", () => {
      // Verify that the contact list is displayed
      cy.contains("Contact List");
  
      // Click on the add contact button
      cy.get('#add-contact').should('be.visible').click();
  
      // Verify that the Add Contact page is displayed
      cy.get('h1').should('have.text','Add Contact');
    });
  
    it("enter All data and create new user", () => {
      // Click on the add contact button
      cy.get('#add-contact').should('be.visible').click();
  
      // Enter all required data
      cy.get('#firstName').should('be.empty').type('Test');
      cy.get('#birthdate').should('be.visible').type('2001-11-11');
      cy.get('#lastName').should('be.empty').type('User');
      cy.get('#email').should('be.empty').type('test@fake.com');
      cy.get('#phone').should('be.empty').type('8008675309');
      cy.get('#street1').should('be.empty').type('100 Elm St.');
      cy.get('#city').should('be.empty').type('Springfield');
      cy.get('#stateProvince').should('be.empty').type('NE');
      cy.get('#postalCode').should('be.empty').type('23456');
      cy.get('#country').should('be.empty').type('CANADA');
  
      // Verify that the submit button is visible
      cy.get('#submit').should('be.visible').click();
  
      cy.wait(3000);
  
      // Make a request to fetch all contacts
      const authToken = Cypress.env('authToken');
      cy.api({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        // Check if the response body contains any user that matches the expected details
        const userExists = response.body.some(user => {
          return (
            user.firstName === 'Test' &&
            user.lastName === 'User' &&
            user.birthdate === '2001-11-11' &&
            user.email === 'test@fake.com' &&
            user.phone === '8008675309' &&
            user.street1 === '100 Elm St.' &&
            user.city === 'Springfield' &&
            user.stateProvince === 'NE' &&
            user.postalCode === '23456' &&
            user.country === 'CANADA'
          );
        });
  
        expect(userExists).to.be.true;
  
    });    
  });
  
  });