export class RdAndChkBx{
    weblocators={
        radio_male:"input#male",
        radio_female:"input#female",
        radio_all:"input[type='radio']",  
        checkbx_all:".form-check-input[type='checkbox']",
        checkbx_sunday:"input#sunday"

    }
    checkTotalRdBtn(){
         return cy.get(this.weblocators.radio_all)
    }
    clickMale(){
        return cy.get(this.weblocators.radio_male)
    }
    clickFemale(){
        return cy.get(this.weblocators.radio_female)
    }
    checkTotalChkbx(){
        return cy.get(this.weblocators.checkbx_all)
    }
    checkspfcChkbx(){
        return cy.get(this.weblocators.checkbx_sunday)
    }
}