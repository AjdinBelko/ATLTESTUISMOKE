// Import commands

describe("Login Test - new user", () => {
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
    cy.get('#firstName').should('be.empty').type('Jan');
    cy.get('#birthdate').should('be.visible').type('2001-11-11');
    cy.get('#lastName').should('be.empty').type('Brady');
    cy.get('#email').should('be.empty').type('fake2@gmail.com');
    cy.get('#phone').should('be.empty').type('8008675309');
    cy.get('#street1').should('be.empty').type('100 Elm St.');
    cy.get('#city').should('be.empty').type('Springfield');
    cy.get('#stateProvince').should('be.empty').type('NE');
    cy.get('#postalCode').should('be.empty').type('23456');
    cy.get('#country').should('be.empty').type('United States');

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
          user.firstName === 'Jan' &&
          user.lastName === 'Brady' &&
          user.birthdate === '2001-11-11' &&
          user.email === 'fake2@gmail.com' &&
          user.phone === '8008675309' &&
          user.street1 === '100 Elm St.' &&
          user.city === 'Springfield' &&
          user.stateProvince === 'NE' &&
          user.postalCode === '23456' &&
          user.country === 'United States'
        );
      });

      expect(userExists).to.be.true;

  });    
});

});