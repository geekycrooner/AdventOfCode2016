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

  it('After the rules change, Elf 1 is across the table from Elf 3', function () {
    var day19 = new AoC.Day19();
    day19.processInput(testInput);
    expect(day19.getPositionOfElfAcrossTable(1)).to.equal(3);
  });

  it('After the rules change, Elf 2 is across the table from Elf 4', function () {
    var day19 = new AoC.Day19();
    day19.processInput(testInput);
    expect(day19.getPositionOfElfAcrossTable(2)).to.equal(4);
  });

  it('After the rules change, Elf 3 is across the table from Elf 5', function () {
    var day19 = new AoC.Day19();
    day19.processInput(testInput);
    expect(day19.getPositionOfElfAcrossTable(3)).to.equal(5);
  });

  it('After the rules change, Elf 4 is across the table from Elf 1', function () {
    var day19 = new AoC.Day19();
    day19.processInput(testInput);
    expect(day19.getPositionOfElfAcrossTable(4)).to.equal(1);
  });

  it('After the rules change, Elf 5 is across the table from Elf 2', function () {
    var day19 = new AoC.Day19();
    day19.processInput(testInput);
    expect(day19.getPositionOfElfAcrossTable(5)).to.equal(2);
  });

  it('After the rules change, at the end, Elf in position 2 has all the presents', function () {
    var day19 = new AoC.Day19();
    day19.processInput(testInput);
    expect(day19.getNewWinningElfPosition()).to.equal(2);
  });

});