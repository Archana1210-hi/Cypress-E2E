import { AddToCartPage } from "../../Page Objects/AddToCartPage";
const atcpage=new AddToCartPage()
import addToCart from "../../fixtures/addToCart.json";
describe('Test Automation',()=>{
    before(()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.LoginPage(addToCart.Login.Email,addToCart.Login.Password)
    })
    it('Add produts to cart',()=>{
        atcpage.SearchProduct(addToCart.Product.ProductName)
        atcpage.AddToCart()
        atcpage.VerifySucess().should('contain',addToCart.Success.msg).and('contain',addToCart.Product.ProductName)
    })
})