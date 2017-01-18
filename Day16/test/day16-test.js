"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day16');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var initialState = '1000';

  var day16 = new AoC.Day16(initialState);

  it('Given initialState 1000, a is 1000', function () {
    expect(day16.getInitialState()).to.equal('1000');
  });

  it('Given initialState 1000, b is 1110', function () {
    expect(day16.getB(day16.getInitialState())).to.equal('1110');
  });

  it('Given initialState 1000, resulting data is 100001110', function () {
    expect(day16.getResultingData(day16.initialState)).to.equal('100001110');
  });

  it('Given initialState 1, resulting data is 100', function () {
    expect(day16.getResultingData('1')).to.equal('100');
  });

  it('Given initialState 0, resulting data is 001', function () {
    expect(day16.getResultingData('0')).to.equal('001');
  });

  it('Given initialState 111100001010, resulting data is 1111000010100101011110000', function () {
    expect(day16.getResultingData('111100001010')).to.equal('1111000010100101011110000');
  });

  it('The checksum of 110010110100 is 100', function () {
    expect(day16.getChecksum('110010110100')).to.equal('100');
  });

  it('Given initialState 10000, resulting data is 10000011110', function () {
    expect(day16.getResultingData('10000')).to.equal('10000011110');
  });

  it('Given initialState 10000011110, resulting data is 10000011110010000111110', function () {
    expect(day16.getResultingData('10000011110')).to.equal('10000011110010000111110');
  });

  it('Given initial state of 10000 and desire to fill a disk of size 20, the final data is 10000011110010000111', function () {
    var day16 = new AoC.Day16('10000');
    expect(day16.fillDisk(20)).to.equal('10000011110010000111');
  });

  it('Given initial state of 10000 and desire to fill a disk of size 20, the checksum of the final data is 01100', function () {
    var day16 = new AoC.Day16('10000');
    expect(day16.getChecksum(day16.fillDisk(20))).to.equal('01100');
  });


});