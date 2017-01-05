"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day10');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var day10 = new AoC.Day10();

  var instructions = [
    'value 5 goes to bot 2'
    , 'bot 2 gives low to bot 1 and high to bot 0'
    , 'value 3 goes to bot 1'
    , 'bot 1 gives low to output 1 and high to bot 0'
    , 'bot 0 gives low to output 2 and high to output 0'
    , 'value 2 goes to bot 2'
  ];

  day10.readInstructionsFromInputArray(instructions);
  day10.processInputInstructions();

  it('Initial state of bot 1: holding chip with value of 3', function () {
    expect(day10.getBot(1).getChipsAsString()).to.equal('3');
  });

  it('Initial state of bot 2: holding chips with values of 2,5', function () {
    expect(day10.getBot(2).getChipsAsString()).to.equal('2,5');
  });

  it('Initial state of bot 0: holding no chips', function () {
    expect(day10.getBot(0).getChipsAsString()).to.equal('');
  });

  it('After processing instructions, output bins contain 5,2,3', function () {
    day10.processBotInstructions();

    expect(day10.getOutPutBins()).to.equal('5,2,3');
  });
  



});