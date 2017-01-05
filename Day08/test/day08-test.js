"use strict";

var chai = require('chai');
var expect = chai.expect;
var Day08 = require('./../day08');

describe('Day08', function () {

  var screenWidth = 7;
  var screenHeight = 3;
  
  it('At the start, screen should be blank and no pixels lit', function () {
    var day08 = new Day08.Day08(screenWidth, screenHeight);
    day08.displayScreen();
    expect(day08.screen.getNumberOfLitPixels()).to.equal(0);
  });

  it('Given rect 3x2 as input, 6 pixels should be lit', function () {
    var input = ['rect 3x2'];
    var day08 = new Day08.Day08(screenWidth, screenHeight);
    day08.processInput(input);
    expect(day08.screen.getNumberOfLitPixels()).to.equal(6);
  });

  it('Given rect 3x2 as input, screen as string should be: 111000011100000000000', function () {
    var input = ['rect 3x2'];
    var day08 = new Day08.Day08(screenWidth, screenHeight);
    day08.processInput(input);
    day08.displayScreen();
    expect(day08.getScreenAsString()).to.equal('111000011100000000000');
  });

  it('Given rect 3x2, rotate column x=1 by 1 as input, screen as string should be: 101000011100000100000', function () {
    var input = ['rect 3x2','rotate column x=1 by 1'];
    var day08 = new Day08.Day08(screenWidth, screenHeight);
    day08.processInput(input);
    day08.displayScreen();
    expect(day08.getScreenAsString()).to.equal('101000011100000100000');
  });

  it('Given rect 3x2, rotate column x=1 by 1, rotate row y=0 by 4 as input, screen as string should be: 000010111100000100000', function () {
    var input = ['rect 3x2','rotate column x=1 by 1','rotate row y=0 by 4'];
    var day08 = new Day08.Day08(screenWidth, screenHeight);
    day08.processInput(input);
    day08.displayScreen();
    expect(day08.getScreenAsString()).to.equal('000010111100000100000');
  });

  it('Given rect 3x2, rotate column x=1 by 1, rotate row y=0 by 4, rotate column x=1 by 1 as input, screen as string should be: 010010110100000100000', function () {
    var input = ['rect 3x2','rotate column x=1 by 1','rotate row y=0 by 4','rotate column x=1 by 1'];
    var day08 = new Day08.Day08(screenWidth, screenHeight);
    day08.processInput(input);
    day08.displayScreen();
    expect(day08.getScreenAsString()).to.equal('010010110100000100000');
  });

  it('Given rect 3x2, rotate column x=1 by 1, rotate row y=0 by 4, rotate column x=1 by 1 as input, number of lit pixels is 6', function () {
    var input = ['rect 3x2','rotate column x=1 by 1','rotate row y=0 by 4','rotate column x=1 by 1'];
    var day08 = new Day08.Day08(screenWidth, screenHeight);
    day08.processInput(input);
    expect(day08.screen.getNumberOfLitPixels()).to.equal(6);
  });

});