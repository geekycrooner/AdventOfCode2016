var chai = require('chai');
var expect = chai.expect;
var Day04 = require('./../day04');

describe('Day04', function () {

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; encrypted name is: aaaaa-bbb-z-y-x', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var day04 = new Day04();
        expect(day04.getEncryptedName(input)).to.equal('aaaaa-bbb-z-y-x');
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; sector ID is: 123', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var day04 = new Day04();
        expect(day04.getSectorID(input)).to.equal('123');
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; checksum is: abxyz', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var day04 = new Day04();
        expect(day04.getChecksum(input)).to.equal('abxyz');
    });

    it('Input: aaaaa; contains 5 "a"s', function () {
        var input = 'aaaaa-bbb-z-y-x';
        var day04 = new Day04(input);
        // expect(day04.getLetterCounts(input).valueOf('a')).to.equal(5);
        expect(day04.letterCounts['a']).to.equal(5);
    });

});

