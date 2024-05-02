describe("Smoke Test - Update Contact", () => {
    const updatedContactData = {
      firstName: "Amy",
      lastName: "Miller",
      birthdate: "1992-02-02",
      email: "amiller@fake.com",
      phone: "8005554242",
      street1: "13 School St.",
      street2: "Apt. 5",
      city: "Washington",
      stateProvince: "QC",
      postalCode: "A1A1A1",
      country: "Canada"
    };
    const authToken = Cypress.env('authToken');
  
    it("updates a contact with provided data", () => {
      // Make a request to fetch all contacts
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        // Check if there are any contacts
        expect(response.status).to.equal(200);
        expect(response.body.length).to.be.greaterThan(0);
  
        const contactId = response.body[0]._id;
  
    cy.request({
      method: 'PUT',
      url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`,
      body: updatedContactData,
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  }).then((updateResponse) => {
    cy.log('Response Body:', updateResponse.body);
  
    expect(updateResponse.status).to.equal(200);

  });
      })
    })
    
});
  