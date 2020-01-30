var expect = require('chai').expect;

describe('Homepage', () => {
    beforeEach(() => {
        browser.url('http://ya.ru');
    })

    it('should have the correct title', () => {
        //browser.url('http://ya.ru');

        var title = browser.getTitle();
        console.log('title: '+title);

        expect(title).to.equal('Яндекс');
    })

    it('should have a product page call-to-action', () => {
        //browser.elementClick('button.search2__button');
        $('.search2__button').click();
    })

    it('should contain the correct url', () => {
        var url = browser.getUrl();
        console.log('url: '+url);
        expect(url).to.contain('ya');
    })

    it('async', async () => {
        await browser.url('http://ya.ru');
        const title = await browser.getTitle();
        console.log('title: '+title);
        expect(title).to.equal('Яндекс');
    })
})