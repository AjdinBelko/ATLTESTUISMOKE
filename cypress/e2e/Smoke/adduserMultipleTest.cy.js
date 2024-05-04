describe("Smoke Test - Create User second one", () => {


  //multiple user bodies

  const user = {
      firstName: "Test",
      lastName: "User",
      birthdate: "1990-01-01",
      email: "test@fake.com",
      phone: "80055555557",
      street1: "1 Main St. 2",
      street2: "Apartment A23",
      city: "Anytown",
      stateProvince: "KSS",
      postalCode: "123456",
      country: "CANADA"
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
          expect(response.status).to.be.oneOf([200, 201]);
          expect(response.body).to.have.property('_id');

          // Check if the newly created user matches the provided data
          
          expect(response.body.firstName).to.equal(user.firstName);
          expect(response.body.lastName).to.equal(user.lastName);
          expect(response.body.email).to.equal(user.email);
          expect(response.body.phone).to.equal(user.phone);
          expect(response.body.street1).to.equal(user.street1);
          expect(response.body.street2).to.equal(user.street2);
          expect(response.body.city).to.equal(user.city);
          expect(response.body.stateProvince).to.equal(user.stateProvince);
          expect(response.body.postalCode).to.equal(user.postalCode);
          expect(response.body.country).to.equal(user.country);

          // request to get all 
          cy.request({
              method: 'GET',
              url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
              headers: {
                  'Authorization': `Bearer ${authToken}`
              }
          }).then((getResponse) => {
              expect(getResponse.status).to.be.oneOf([200, 204]);
              
              // Check if the newly created user is present in the response

              expect(getResponse.body).to.be.an('array').that.deep.include(response.body);
          });
      });
  });
});
