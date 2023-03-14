import Bankloginpage from "../Pagesall/Bankloginpage"
class Banklogin{

    getUrl(){
    
    const baseUrl = Cypress.env('baseUrl')
    
    cy.visit(baseUrl)
    
    }
    
    clickOnManagerLogin(){
    
    return Bankloginpage.getclickOnManagerLoginButton().click()
    
    }

    clickOnaddcustomer(){

        return Bankloginpage.getAddcustomer().click()
    }
    firstName(){
        return Bankloginpage.getFirstname().type('Soham')
    }
    lastName(){
        return Bankloginpage.getLastname().type('Dutta')
    }
    postCode(){
        return Bankloginpage.getPostcode().type('123456')
    }
    submitButton(){

        return Bankloginpage.getSubmit().click({force:true})
    }
    }
    export default new Banklogin