describe("Login Test", () => {
  it("should log in the user and display the welcome screen", { env: { snapshotOnly: true } }, () => {
    cy.api({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
      body: {
        email: "ajdin.belko95@gmail.com",
        password: "Belkon12345"
      }
    }).then((response) => {
      // Check if login was successful
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
  
      // Visit the welcome page and contact list 
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
  
      // Check if the welcome screen is loaded
      cy.contains("Contact List").should('be.visible');
    });
  });
});
