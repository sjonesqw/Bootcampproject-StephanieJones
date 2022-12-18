import login from '../e2e/page/login.page'

describe('product details page', () => {
    it('passes', () => {
      cy.visit('https://ui-automation-camp.vercel.app')
      login.login()
    //   cy.get('#product-3 > .css-5ge9zd > .chakra-aspect-ratio > .chakra-image').click()
    //   cy.url().should('eq','https://ui-automation-camp.vercel.app/products/quality-mug')
    //   cy.get('#add-to-cart').click()
    //   //cy.get('#product-1 > #add-to-cart').click()
    //   cy.wait(2000)
    //   cy.get('#top-cart').click()

    })
  })