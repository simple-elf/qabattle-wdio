var expect = require('chai').expect;

describe('Product Page', () => {
    beforeEach(() => {
        browser.url('https://webdriver.io/');
    })

    it('should allow you to purchase a robot', () => {
        $('#search_input_react').setValue('sync');

        $('.headerTitle').click();
    })
})