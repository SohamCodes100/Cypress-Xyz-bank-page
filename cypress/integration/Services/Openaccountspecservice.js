import Openaccount from "../../support/Pageobjects/Openaccount";

class Openaccountspec{

init(){

    Openaccount.getUrl()
    Openaccount.clickOnManagerLogin()
    Openaccount.clickOnOpenaccount()
    Openaccount.selectDropdown()
    Openaccount.selectAdropDown()
    Openaccount.clickOnprocess()

}

}
export default new Openaccountspec