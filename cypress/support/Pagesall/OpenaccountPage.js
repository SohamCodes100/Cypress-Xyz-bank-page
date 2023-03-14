

class  OpenaccloginPage{

    getclickOnManagerLoginButton(){
    
        return cy.xpath("//button[text()='Bank Manager Login']").should('be.visible')
        
        }

    getclickOnopenacc(){

        return cy.get('[ng-class="btnClass2"]')
    }
  
    getselectDropdown(){

        return cy.get('#userSelect').wait(2000)
    }

    getselectAdropDown(){

        return cy.get('#currency').wait(2000)
    }
    getProcess(){

        return cy.xpath("//button[@type='submit']").wait(2000)
        
    }



}
export default new OpenaccloginPage
