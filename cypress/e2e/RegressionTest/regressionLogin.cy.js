describe("Login Test", () => {
    it("should log in the user and display the welcome screen", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
        body: {
          email: "ajdin.belko95@gmail.com",
          password: "Belkon1234557575757"
        }
      }).then((response) => {
        // Check if login was successful
        expect(response.status).to.equal(401);
        expect(response.body).to.have.property('token');
  
        // Visit the welcome page and contact list 

        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
  
        // Check if the welcome screen is loaded

        cy.contains("Incorrect username or password").should('be.visible').and('exist')
        
      });
    });
  });
  