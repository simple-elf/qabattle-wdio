var expect = require('chai').expect;

beforeEach(() => {
    browser.call(() => url('http://ya.ru'));
})

describe('Homepage', () => {
    it('should have the correct title', () => {
        //browser.url('http://ya.ru');

        var title = browser.call(() => getTitle());
        //console.log('title: '+title);

        expect(title).to.equal('Яндекс');

    })

    it('should contain the correct url', () => {
        var url = browser.getUrl();
        //console.log('url: '+url);
        expect(url).to.contain('ya');
    })

    it('async', async () => {
        await browser.url('http://ya.ru');
        const title = await browser.getTitle();
        console.log('title: '+title);
        expect(title).to.equal('Яндекс');
    })
})