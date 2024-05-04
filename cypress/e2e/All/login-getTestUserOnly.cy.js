// Import commands
import '../../support/apiGETuser';

describe("Login Test - Get created user", () => {
  beforeEach(() => {
    // Login i navigacija
    cy.login("ajdin.belko95@gmail.com", "Belkon12345");
  });

  it("should display correct table content and fetch contacts via API", () => {
    // Intercept contacts api provajdano
    cy.intercept('GET', '/contacts').as('getContacts');

    // Wait for the page to load and check za loading page

    cy.contains("Contact List");

    // Verify table content

    // table content from api response should be the same as the frontend part rendering of newly created SMOKE TEST USER 

    // FOR THE TEST USER

    cy.get('.contactTableBodyRow').each(($row, index) => { 
      cy.wrap($row).find(':nth-child(2)').should('contain.text', 'Test');
      cy.wrap($row).find(':nth-child(3)').should('contain.text', '1990-01-01');
      cy.wrap($row).find(':nth-child(4)').should('contain.text', 'test@fake.com');
      cy.wrap($row).find(':nth-child(5)').should('contain.text', '80055555557');
      cy.wrap($row).find(':nth-child(6)').should('contain.text', '1 Main St. 2 Apartment A23');
      cy.wrap($row).find(':nth-child(7)').should('contain.text', 'Anytown KSS 123456');
      cy.wrap($row).find(':nth-child(8)').should('contain.text', 'CANADA');
    });

    // Wait 
    cy.wait('@getContacts').then(interception => {
      // Log the files
      cy.log('Intercepted Request:', interception.request);
      cy.log('Intercepted Response:', interception.response);

      // Verify api call and response date and data
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.be.an('array').and.to.have.lengthOf.at.least(1);
      interception.response.body.forEach(contact => {
        expect(contact).to.have.all.keys('_id', 'firstName', 'lastName', 'birthdate', 'email', 'phone', 'street1', 'street2', 'city', 'stateProvince', 'postalCode', 'country', 'owner', '__v');
      });
    });
  });
});
