import Banklogin from "../../support/Pageobjects/Banklogin";

class Bankloginspec{

init(){

Banklogin.getUrl()
Banklogin.clickOnManagerLogin()
Banklogin.clickOnaddcustomer()
Banklogin.firstName()

Banklogin.lastName()

Banklogin.postCode()

Banklogin.submitButton()

}



}
export default new Bankloginspec