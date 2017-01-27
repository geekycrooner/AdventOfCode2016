"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day19');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var testInput = 5;

  var day19 = new AoC.Day19();
  day19.processInput(testInput);

  it('At the start, Elf 1 has 1 present', function () {
    expect(day19.getPresentsInPosition(1)).to.equal(1);
  });

  it('At the start, Elf 5 has 1 present', function () {
    expect(day19.getPresentsInPosition(5)).to.equal(1);
  });

  it('At the end, Elf in position 3 has all the presents', function () {
    expect(day19.getWinningElfPosition()).to.equal(3);
  });

  it('After the rules change, Elf in position 2 has all the presents', function () {
    expect(day19.getNewWinningElfPosition()).to.equal(2);
  });

});