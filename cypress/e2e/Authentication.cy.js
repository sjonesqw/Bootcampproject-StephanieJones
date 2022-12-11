describe('Authentication test ', () => {
    it('Ensure a user can login or sign up for the platform using valid credentials', () => {
      cy.visit('https://ui-automation-camp.vercel.app')
      cy.get('#signInOrRegister').click()
      cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
          cy.get('[type="email"]').type("Stephanie@test.com");
          cy.get('[type="password"]').type("Stephanie1!", { log: false });
          cy.get("[name=submit]").click();
        }
      );
      cy.url().should('eq','https://ui-automation-camp.vercel.app/products')

    })

    it('ensure user can initiate password reset flow',() =>{
      cy.visit('https://ui-automation-camp.vercel.app')
      cy.get('#signInOrRegister').click()
      cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
          cy.get('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > div > div.auth0-lock-content-body-wrapper > div:nth-child(2) > span > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(3) > p.auth0-lock-alternative > a').click()
          cy.get('#1-email').type("test@test.com")
          cy.get('#1-submit').click()
          cy.get('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > div > div.auth0-lock-content-body-wrapper > div:nth-child(1) > div > div ').should('have.text',"We've just sent you an email to reset your password.")

        
        }
      );
      
    })

       
  })

