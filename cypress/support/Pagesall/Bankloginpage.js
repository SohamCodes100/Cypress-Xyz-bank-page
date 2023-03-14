/// <reference types = 'Cypress'/>

class Bankloginpage{


    getclickOnManagerLoginButton(){
    
    return cy.xpath("//button[text()='Bank Manager Login']").should('be.visible')
    
    }
    getAddcustomer(){

        return cy.get('[ng-class="btnClass1"]').should('be.visible')
    }

    getFirstname(){

        return cy.get(':nth-child(1) > .form-control')
    }
    getLastname(){
        return cy.get(':nth-child(2) > .form-control')
    }
    getPostcode(){
        return cy.get(':nth-child(3) > .form-control')
    }
    getSubmit(){
        return cy.xpath("//button[@type='submit']")
    }

    }
    
    export default new Bankloginpage