class CustomerPage{

    getclickOnManagerLoginButton(){
    
        return cy.xpath("//button[text()='Bank Manager Login']").should('be.visible')
        
        }
    getclickonCustomerButton(){

        return cy.get('[ng-class="btnClass3"]')
    }
    table(){
        return cy.get('.table').should ('have.length',1)
    }
    getClickonSeachbox(){
        return cy.get('.form-control').should('be.visible')
    }

}
export default new CustomerPage