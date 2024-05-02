describe("Smoke Test - Create User", () => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      birthdate: "1970-01-01",
      email: "jdoe@fake.com",
      phone: "8005555555",
      street1: "1 Main St.",
      street2: "Apartment A",
      city: "Anytown",
      stateProvince: "KS",
      postalCode: "12345",
      country: "USA"
    };
    const authToken = Cypress.env('authToken');
    it("creates a user with provided data", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
        body: user,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        // Check if the user was successfully created
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('_id');
        expect(response.body.firstName).to.equal(user.firstName);
        expect(response.body.lastName).to.equal(user.lastName);
        expect(response.body.birthdate).to.equal(user.birthdate);
        expect(response.body.email).to.equal(user.email);
        expect(response.body.phone).to.equal(user.phone);
        expect(response.body.street1).to.equal(user.street1);
        expect(response.body.street2).to.equal(user.street2);
        expect(response.body.city).to.equal(user.city);
        expect(response.body.stateProvince).to.equal(user.stateProvince);
        expect(response.body.postalCode).to.equal(user.postalCode);
        expect(response.body.country).to.equal(user.country);
      });
    });
  });
  

  //smoke test completed