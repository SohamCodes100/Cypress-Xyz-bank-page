import CustomerPageobject from "../../support/Pageobjects/CustomerPageobject";

class CustomerServicespec{

    init(){

        CustomerPageobject.getUrl()
        CustomerPageobject.clickOnManagerLogin()
        CustomerPageobject.clickonCustomerButton()
        CustomerPageobject.tabledata()
        CustomerPageobject.clickOnsearchbox()

    }
}
export default new CustomerServicespec