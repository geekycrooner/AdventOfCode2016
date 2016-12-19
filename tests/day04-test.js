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

    it('Input: aaaaa-bbb-z-y-x; contains 5 "a"s', function () {
        var input = 'aaaaa-bbb-z-y-x';
        var day04 = new Day04(input);
        expect(day04.letterCounts['a']).to.equal(5);
    });

    it('Input: aaaaa-bbb-z-y-x; contains 3 "b"s', function () {
        var input = 'aaaaa-bbb-z-y-x';
        var day04 = new Day04(input);
        expect(day04.letterCounts['b']).to.equal(3);
    });

    it('Input: aaaaa-bbb-z-y-x; contains 1 "z"s', function () {
        var input = 'aaaaa-bbb-z-y-x';
        var day04 = new Day04(input);
        expect(day04.letterCounts['z']).to.equal(1);
    });

    it('Input: aaaaa-bbb-z-y-x; contains 1 "y"s', function () {
        var input = 'aaaaa-bbb-z-y-x';
        var day04 = new Day04(input);
        expect(day04.letterCounts['y']).to.equal(1);
    });

    it('Input: aaaaa-bbb-z-y-x; contains 1 "x"s', function () {
        var input = 'aaaaa-bbb-z-y-x';
        var day04 = new Day04(input);
        expect(day04.letterCounts['x']).to.equal(1);
    });

    it('Input: aaaaa-bbb-z-y-x; most common letter is "a"', function () {
        var input = 'aaaaa-bbb-z-y-x';
        var day04 = new Day04(input);
        expect(day04.mostCommonLetter()).to.equal('a');
    });

});

