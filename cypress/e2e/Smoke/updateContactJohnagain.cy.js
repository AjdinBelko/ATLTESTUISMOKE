describe("Smoke Test - Update Contact", () => {
    const updatedContactData = {
            "firstName": "John",
            "lastName": "Doe",
            "birthdate": "1970-01-01",
            "email": "jdoe@fake.com",
            "phone": "8005555555",
            "street1": "1 Main St.",
            "street2": "Apartment A",
            "city": "Anytown",
            "stateProvince": "KS",
            "postalCode": "12345",
            "country": "USA"
        }
    const authToken = Cypress.env('authToken');
  
    it("updates a contact with provided data", () => {

      cy.api({
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
  
cy.api({
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
  