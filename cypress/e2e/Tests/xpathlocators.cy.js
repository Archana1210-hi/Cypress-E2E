describe('XpathLocators',()=>{
    it('Total no.of links on nav-bar',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.xpath('//ul[@class="nav navbar-nav"]/li').should('have.length',8)
    })
    it.only('Total no.of products',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.xpath('//ul[@class="nav navbar-nav"]').xpath('./li').should('have.length',8)
    })    
})