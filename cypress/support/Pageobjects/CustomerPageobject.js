import CustomerPage from "../Pagesall/CustomerPage"

class CustomerPageobject{

    getUrl(){
    
    const baseUrl = Cypress.env('baseUrl')
    
    cy.visit(baseUrl)
    
    }
    
    clickOnManagerLogin(){
    
    return CustomerPage.getclickOnManagerLoginButton().click()
    
    }
    clickonCustomerButton(){
        return CustomerPage.getclickonCustomerButton().click()
    }


     tabledata(){
        return CustomerPage.table().each(function($row, index, $rows){
             
        cy.wrap($row).within(function(){

        cy.get('td').each(function($celldata,index,$columns){
        cy.log($celldata.text())
     })
     })
     })
    }
    clickOnsearchbox(){
        return CustomerPage.getClickonSeachbox().type('Harry')
    }
   
}
export default new CustomerPageobject
