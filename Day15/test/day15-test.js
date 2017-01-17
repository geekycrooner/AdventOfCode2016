"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day15');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var testInput = [
    'Disc #1 has 5 positions; at time=0, it is at position 4.'
    ,'Disc #2 has 2 positions; at time=0, it is at position 1.'
  ];

  var day15 = new AoC.Day15();
  day15.processInput(testInput);

  it('There are 2 discs', function () {
    expect(day15.discs.length).to.equal(2);
  });

  it('Disc 1 has 5 positions', function () {
    expect(day15.getDisc(1).positions).to.equal(5);
  });

  it('Disc 2 has 2 positions', function () {
    expect(day15.getDisc(2).positions).to.equal(2);
  });

});