"use strict";

var chai = require('chai');
var expect = chai.expect;
var Day05 = require('./../day05');

describe('Day05', function () {
    // turn off timeouts 
    this.timeout(0);

        var input = 'abc';
        var day05 = new Day05.Day05(input);

    it('Input: For the door ID "abc", the index of the first hash with 5 zeros is 3231929', function () {
        expect(day05.getNthIndexForHashWith5Zeros(0)).to.equal(3231929);
    });
    
    it('Input: For the door ID "abc", the first character of the password is 1', function () {
        expect(day05.getNthCharacterOfPassword(0)).to.equal('1');
    });
    
    it('Input: For the door ID "abc", the index of the second hash with 5 zeros is 5017308', function () {
        expect(day05.getNthIndexForHashWith5Zeros(1)).to.equal(5017308);
    });

    it('Input: For the door ID "abc", the second character of the password is 8', function () {
        expect(day05.getNthCharacterOfPassword(1)).to.equal('8');
    });
    
    it('Input: For the door ID "abc", the index of the third hash with 5 zeros is 5278568', function () {
        expect(day05.getNthIndexForHashWith5Zeros(2)).to.equal(5278568);
    });

    it('Input: For the door ID "abc", the third character of the password is f', function () {
        expect(day05.getNthCharacterOfPassword(2)).to.equal('f');
    });
    
    it('Input: For the door ID "abc", the password is 18f47a30', function () {
        expect(day05.getFirstDoorPassword()).to.equal('18f47a30');
    });
    
    it('Input: For the door ID "abc", the 2nd character of the second password is 5', function () {
        expect(day05.secondDoorPassword[1]).to.equal('5');
    });
    
    it('Input: For the door ID "abc", the 5th character of the second password is e', function () {
        expect(day05.secondDoorPassword[4]).to.equal('e');
    });
    
    it('Input: For the door ID "abc", the second door password is 05ace8e3', function () {
        expect(day05.getSecondDoorPassword()).to.equal('05ace8e3');
    });
});