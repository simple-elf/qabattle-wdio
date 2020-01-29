var assert = require('assert');

describe('firstTest', () => {
    it('Will be true', () => {
        assert.equal('bla', 'bla1', 'error msg')
    });
    it('Will be true3', () => {
        assert.equal('bla', 'bla', 'error msg')
    });

});

describe('secondTest', () => {
    it('Will be true2', () => {
        assert.equal('bla', 'bla', 'error msg')
    });
});