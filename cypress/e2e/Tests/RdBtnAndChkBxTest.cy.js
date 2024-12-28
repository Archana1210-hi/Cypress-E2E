import { RdAndChkBx } from "../../Page Objects/RdBtnAndChkBxPage"
const rdcbx = new RdAndChkBx()
describe('Automation test',()=>{
    it('Radio Buttons',()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    
    rdcbx.clickMale().should('be.visible')
    rdcbx.clickFemale().should('be.visible')
    rdcbx.checkTotalRdBtn().should('have.length',2)
    rdcbx.clickMale().check().should('be.checked')
    rdcbx.clickFemale().should('not.be.checked')
    
    })
    it.only('Check Boxes',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
         rdcbx.checkspfcChkbx().should('be.visible')
         rdcbx.checkspfcChkbx().check().should('be.checked')
         rdcbx.checkspfcChkbx().uncheck().should('not.be.checked')

         rdcbx.checkTotalChkbx().should('have.length',7)
         rdcbx.checkTotalChkbx().check().should('be.checked')
         rdcbx.checkTotalChkbx().uncheck().should('not.be.checked')
         rdcbx.checkTotalChkbx().first().check()
         rdcbx.checkTotalChkbx().last().check()
    })
})