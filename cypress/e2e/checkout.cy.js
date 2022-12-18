import login from '../e2e/page/login.page'

describe('product details page', () => {
    it('Add a product to cart and proceed to checkout', () => {
      cy.visit('https://ui-automation-camp.vercel.app')
      login.login()
      cy.get('#product-3 > .css-5ge9zd > .chakra-aspect-ratio > .chakra-image').click()
      cy.url().should('eq','https://ui-automation-camp.vercel.app/products/quality-mug')
      cy.get('#add-to-cart').scrollIntoView()
      cy.wait(2000)
      cy.get('#add-to-cart').should('be.visible').click()
      //cy.get('#product-1 > #add-to-cart').click()
      cy.get('#top-cart').click()
      cy.get('#snipcart > div > div > div.snipcart-layout__content.snipcart-layout__content--side.snipcart-cart--edit > section > div > div:nth-child(2) > footer > button.snipcart-button-primary.snipcart-base-button.is-icon-right').click()
      cy.get('#name_1457613c-f346-4e48-8fcf-a73afce6ed83').type('Stephanie Jones')
      cy.get('#email_1457613c-f346-4e48-8fcf-a73afce6ed83').type('Stephanie@test.com')
      cy.get('#address1_1457613c-f346-4e48-8fcf-a73afce6ed83').type('23 rainbow way')
      cy.get('#city_1457613c-f346-4e48-8fcf-a73afce6ed83').type('Michigan')
      cy.get('#province_1457613c-f346-4e48-8fcf-a73afce6ed83').type('Michigan')
      cy.get('#postalCode_1457613c-f346-4e48-8fcf-a73afce6ed83').type('897')

      cy.get('#snipcart-billing-form > div > div.snipcart-form__footer > button').click()
    })
  })