const cypressConfig = require("../../cypress.config")

describe('Visit url',()=>{
    it('checking url working',()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        cy.get('div[id="account-register"] li:nth-child(1) a:nth-child(1)').should('be.visible');
    })
    
})