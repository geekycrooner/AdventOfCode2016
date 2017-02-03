"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day20');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var testInput = [
    '5-8'
    , '0-2'
    , '4-7'
  ];

  var day20 = new AoC.Day20(9);
  day20.processInput(testInput);

  it('Lowest open IP is 3', function () {
    expect(day20.getLowestNonBlockedIP()).to.equal(3);
  });

});