"use strict";

var chai = require('chai');
var expect = chai.expect;
var Day08 = require('./../day08');

describe('Day08', function () {

  var screenWidth = 7;
  var screenHeight = 3;
  
  var input = [
    'rect 3x2'
  ];

  var day08 = new Day08.Day08(screenWidth, screenHeight);

  it('At the start, screen should be blank and no pixels lit', function () {
    expect(day08.screen.getNumberOfLitPixels()).to.equal(0);
  });

  it('Given rect 3x2 as input, 6 pixels should be lit', function () {
    day08.processInput(input);
    expect(day08.screen.getNumberOfLitPixels()).to.equal(6);
  });

});