import OpenaccountPage from "../Pagesall/OpenaccountPage"

class Openacclogin{

    getUrl(){
    
    const baseUrl = Cypress.env('baseUrl')
    
    cy.visit(baseUrl)
    
    }
    
    clickOnManagerLogin(){
    
    return OpenaccountPage.getclickOnManagerLoginButton().click()
    
    }
    clickOnOpenaccount(){

        return OpenaccountPage.getclickOnopenacc().click()
    }
    selectDropdown(){

        return OpenaccountPage.getselectDropdown().select("Harry Potter")

    }
    selectAdropDown(){

        return OpenaccountPage.getselectAdropDown().select("Pound")
        
    }
    clickOnprocess(){

        return OpenaccountPage.getProcess().click()
    }
}
export default new Openacclogin