var expect = require('chai').expect;

describe('async', () => {
    it('async', async () => {
        await browser.url('http://ya.ru');
        const title = await browser.getTitle();
        console.log('title: '+title);
        expect(title).to.equal('Яндекс');
    });
});

