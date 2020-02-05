import LoginPage from '../pageobject/Login.page'

describe('Login page', () => {
    it('should have the correct title', () => {
        LoginPage.open();
        //allure.addStep(LoginPage.cardHeader().getText());

        allure.startStep('steppp');
        var title = browser.getTitle();
        console.log('title: '+title);
        allure.addStep('Title: ' + title);
        expect(title).to.equal('Welcom to Propeller Automated Testing Championship');
        allure.endStep('failed');

        allure.addStep('Title equals', {content: 'ddfd', name: 'dsdsds'}, 'passed');
    });
});