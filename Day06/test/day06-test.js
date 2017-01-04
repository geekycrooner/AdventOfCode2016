"use strict";

var chai = require('chai');
var expect = chai.expect;
var Day06 = require('./../day06');

describe('Day06', function () {

  var input = [
    'eedadn'
    , 'drvtee'
    , 'eandsr'
    , 'raavrd'
    , 'atevrs'
    , 'tsrnev'
    , 'sdttsa'
    , 'rasrtv'
    , 'nssdts'
    , 'ntnada'
    , 'svetve'
    , 'tesnvt'
    , 'vntsnd'
    , 'vrdear'
    , 'dvrsen'
    , 'enarar'
  ];

  var day06 = new Day06.Day06();
  day06.processInput(input);
  var mostCommonEntries = day06.getMostCommonEntries();
  var leastCommonEntries = day06.getLeastCommonEntries();

  it('The most common character in the first column of input is e', function () {
    expect(mostCommonEntries[0]).to.equal('e');
  });

  it('The most common character in the second column of input is a', function () {
    expect(mostCommonEntries[1]).to.equal('a');
  });

  it('The most common character in the third column of input is s', function () {
    expect(mostCommonEntries[2]).to.equal('s');
  });

  it('The error corrected message is easter', function () {
    expect(mostCommonEntries).to.equal('easter');
  });

  it('The original message is advent', function () {
    expect(leastCommonEntries).to.equal('advent');
  });

});