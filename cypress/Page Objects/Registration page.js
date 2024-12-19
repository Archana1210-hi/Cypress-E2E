export class RegisterPage{
    webLocators=
    {
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        phone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        subscribe:'input[value="0"]',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
        
    }
    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName)
    {
        cy.get(this.webLocators.firstName).type(FName)
    }
    enterLastName(LName)
    {
        cy.get(this.webLocators.lastName).type(LName)
    }
    enterEmail(EmailID)
    {
        cy.get(this.webLocators.email).type(EmailID)
    }
    enterTelephone(PhoneNo)
    {
        cy.get(this.webLocators.phone).type(PhoneNo)
    }
    enterPassword(password)
    {
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.passwordConfirm).type(password)
    }
    clickRadioButton()
    {
        cy.get(this.webLocators.subscribe).check()
    }  
    selectCheckBox()
    {
        cy.get(this.webLocators.policyCheckbox).check()
    }
    clickContinue()
    {
        cy.get(this.webLocators.continue).click()
    }
    





}
