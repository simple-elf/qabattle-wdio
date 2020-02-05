import Page from "./page";

class LoginPage extends Page {

    get container() { return $('#registrationContainer') }
    get cardHeader() { return $('div.card-header h4') }

    open() {
        allure.startStep('Open Login page')
        super.open('/index.html');
        this.container.waitForDisplayed(1000);
        allure.endStep();
    }


}

export default new LoginPage()