var chai = require ('chai');
var expect = chai.expect;
var Day02 = require('./../day02');

describe('Day02Tests', function() {

    it('With no input, press 5', function () {
        var day02 = new Day02();
        expect(day02.processStandardKeypadInstructions()).to.equal(5);
    });

    it('Standard Keypad: With input U, press 2', function () {
        var day02 = new Day02();
        var instructions = 'U';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(2);
    });

    it('Standard Keypad: With input UU, press 2', function () {
        var day02 = new Day02();
        var instructions = 'UU';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(2);
    });

    it('Standard Keypad: With input UUU, press 2', function () {
        var day02 = new Day02();
        var instructions = 'UUU';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(2);
    });

    it('Standard Keypad: With input D, press 8', function () {
        var day02 = new Day02();
        var instructions = 'D';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(8);
    });

    it('Standard Keypad: With input DD, press 8', function () {
        var day02 = new Day02();
        var instructions = 'DD';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(8);
    });

    it('Standard Keypad: With input DDD, press 8', function () {
        var day02 = new Day02();
        var instructions = 'DDD';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(8);
    });

    it('Standard Keypad: With input L, press 4', function () {
        var day02 = new Day02();
        var instructions = 'L';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(4);
    });

    it('Standard Keypad: With input LL, press 4', function () {
        var day02 = new Day02();
        var instructions = 'LL';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(4);
    });

    it('Standard Keypad: With input LLL, press 4', function () {
        var day02 = new Day02();
        var instructions = 'LLL';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(4);
    });

    it('Standard Keypad: With input R, press 6', function () {
        var day02 = new Day02();
        var instructions = 'R';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(6);
    });

    it('Standard Keypad: With input RR, press 6', function () {
        var day02 = new Day02();
        var instructions = 'RR';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(6);
    });

    it('Standard Keypad: With input RRR, press 6', function () {
        var day02 = new Day02();
        var instructions = 'RRR';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(6);
    });

    it('Standard Keypad: With input UD, press 5', function () {
        var day02 = new Day02();
        var instructions = 'UD';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(5);
    });

    it('Standard Keypad: With input ULL, press 1', function () {
        var day02 = new Day02();
        var instructions = 'ULL';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(1);
    });

    it('Standard Keypad: Starting from button 1, with input RRDDD, press 9', function () {
        var day02 = new Day02(1);
        var instructions = 'RRDDD';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(9);
    });

    it('Standard Keypad: Starting from button 9, with input LURDL, press 8', function () {
        var day02 = new Day02(9);
        var instructions = 'LURDL';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(8);
    });

    it('Standard Keypad: Starting from button 8, with input UUUUD, press 5', function () {
        var day02 = new Day02(8);
        var instructions = 'UUUUD';
        expect(day02.processStandardKeypadInstructions(instructions)).to.equal(5);
    });

    it('Standard Keypad: With input ULL\nRRDDD\nLURDL\nUUUUD, code = 1985', function () {
        var day02 = new Day02();
        var instructions = 'ULL\nRRDDD\nLURDL\nUUUUD';
        expect(day02.displayStandardKeypadCode(instructions)).to.equal('1985');
    });

    it('Fancy Keypad: With no input, press 5', function () {
        var day02 = new Day02();
        expect(day02.processFancyKeypadInstructions()).to.equal(5);
    });

    
});