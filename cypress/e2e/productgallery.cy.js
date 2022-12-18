import login from '../e2e/page/login.page'
var products =['Quality Fitted Hat', 'Quality Trucker Hat','Quality Mousepad','Quality Mug','Quality Pillow','Quality Hooded Sweatshirt','Quality Sweatshirt','Quality Kids Tshirt','Quality Tshirt','Quality Vneck','Quality Pink Pants','Quality Cargo Pants','Quality Jeans Pants','Quality Blue Shoes','Quality Stylish Shoes','Quality Heal Shoes','Red Couch','White Couch','Gray Couch','Mackbook Pro','Dell Laptop','HP Laptop']
var prices =
describe('empty spec', () => {
    beforeEach(() =>{
        cy.visit('https://ui-automation-camp.vercel.app')
      login.login()
    })

    it('sort products A to Z', () => {
      cy.get('#sort').select('aToZ')
      var AZsort = products.sort()

      
      //#product-1 > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p
      for (var x=0;x<22;x++){ //replace the number in id locator for the various products since they increment by 1
        cy.get('#product-${x} > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p').each(($name, index) => {
          expect($name.text()).equal(AZsort[index])
        })
      }
      // cy.get('#product-${num} > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p').each(($name, index) => {
      //   expect($name.text()).equal(AZsort[index])
      // })
      

    })
    it('sort products Z to A', () =>{
        cy.get('#sort').select('zToA')
        
        var ZAsort = products.sort().reverse()
        for (var x=0;x<22;x++){ //replace the number in id locator for the various products since they increment by 1
        cy.get('#product-${x} > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p').each(($name, index) => {
          expect($name.text()).equal(AZlist[index])
      })
        }

  })
})
