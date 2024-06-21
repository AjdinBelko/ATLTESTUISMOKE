describe('Get user smoke', () => {
    it('Should successfully create a contact via POST request', () => {

      // Retrieve the authentication token from environment variables
      
      const authToken = Cypress.env('authToken');
  
      // Define the request body
      const requestBody = {
        "_id": "6085a221fcfc72405667c3d4",
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
        "country": "USA",
        "owner": "6085a21efcfc72405667c3d4",
        "__v": 0
      };
  
      // Send a POST request to create a contact
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/',
        body: requestBody,
        headers: {
          Authorization: `Bearer ${authToken}` // Include the authentication token in the request headers
        }
      }).then((response) => {
        // Verify that the get request is 200
        expect(response.status).to.eq(200);
      });
    });
  
    it('Should successfully do the  GET request', () => {

      //authtoken variable defined in global

      const authToken = Cypress.env('authToken');
  
      // Send a GET request to retrieve the contact
      cy.api({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/',
        headers: {
          Authorization: `Bearer ${authToken}` 
        }
      }).then((response) => {
        // Verify that the GET request was 200 and completed
        
        expect(response.status).to.eq(200);
  
        // Verify the response body is an array containing 

        expect(response.body).to.be.an('array').and.to.not.be.empty;

        expect(response.body[0]).to.have.all.keys('_id', 'firstName', 'lastName', 'birthdate', 'email', 'phone', 'street1', 'street2', 'city', 'stateProvince', 'postalCode', 'country', 'owner', '__v');
        
      });
    });
  });
  