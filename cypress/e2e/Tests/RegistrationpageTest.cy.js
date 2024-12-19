import cypressConfig from "../../../cypress.config.js"
import { RegisterPage } from "../../Page Objects/Registration page.js"
const reg=new RegisterPage()
import registerData from "../../fixtures/registerData.json"
describe('Test Automation',()=>
{
    it('Registration flow',()=>
    {
    reg.openURL()
    reg.enterFirstName(registerData.FName)
    reg.enterLastName(registerData.LName)
    reg.enterEmail(registerData.EmailID)
    reg.enterTelephone(registerData.PhoneNo)
    reg.enterPassword(registerData.password)
    reg.clickRadioButton()
    cy.get('input[value="0"]').should('be.checked')
    reg.selectCheckBox()
    reg.clickContinue()
    cy.get('div[id="content"] h1').should('have.text','Your Account Has Been Created!')
    })
})