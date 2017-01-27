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

/* 
  for rules change to work, this should change to work with the following function:
  (myPosition + floor (numPositions/2)) % numPositions
  id is separate from position and positions should be reassigned starting with lowest ID after every removal
  so, at start:

  ID | myPosition | position across table function 
  ------------------------------------------------
  1  |     0      | (0 + floor(5/2)) % 5 = 2
  2  |     1      | (1 + floor(5/2)) % 5 = 3
  3  |     2      | (2 + floor(5/2)) % 5 = 4
  4  |     3      | (3 + floor(5/2)) % 5 = 0
  5  |     4      | (4 + floor(5/2)) % 5 = 1 

  and after 3 is removed...

  ID | myPosition | position across table function 
  ------------------------------------------------
  1  |     0      | (0 + floor(4/2)) % 4 = 2
  2  |     1      | (1 + floor(4/2)) % 4 = 3
  4  |     2      | (2 + floor(4/2)) % 4 = 0
  5  |     3      | (3 + floor(4/2)) % 4 = 1 

  and after 5 is removed...

  ID | myPosition | position across table function 
  ------------------------------------------------
  1  |     0      | (0 + floor(3/2)) % 3 = 1
  2  |     1      | (1 + floor(3/2)) % 3 = 2
  4  |     2      | (2 + floor(3/2)) % 3 = 0

  and after 1 is removed...

  ID | myPosition | position across table function 
  ------------------------------------------------
  2  |     0      | (0 + floor(2/2)) % 2 = 1
  4  |     1      | (1 + floor(2/2)) % 2 = 0

*/

  it('After the rules change, Elf in position 2 has all the presents', function () {
    expect(day19.getNewWinningElfPosition()).to.equal(2);
  });

});