var expect = require('chai').expect;

describe('Homepage', () => {
    it('should have the correct title', () => {
        //browser.url('http://ya.ru');

        var title = 'dsfdsfs';
        console.log(title);

        expect(title).to.equal('Яндекс');

    })

    it('should contain the correct url', () => {
        var url = 'fdfdsf';
        console.log(url);
        expect(url).to.contain('ya');
    })
})