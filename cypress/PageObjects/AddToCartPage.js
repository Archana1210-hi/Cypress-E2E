export class AddToCartPage{
    webLocators={
        search_input:'input[placeholder="Search"]',
        click_search:'button[class="btn btn-default btn-lg"]',
        product_img:'image[title="MacBook"]',
        add_to_cart:'Add to Cart',
        Success_msg:'.alert.alert-success.alert-dismissible'
    }
    SearchProduct(ProductName)
    {
        cy.get(this.webLocators.search_input).type(ProductName)
        cy.get(this.webLocators.click_search).click()
    }
    AddToCart()
    {
        cy.contains(this.webLocators.add_to_cart).first().click()
    }
    VerifySucess(msg)
    {
       return cy.get(this.webLocators.Success_msg)
    }
        
    
}