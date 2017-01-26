"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day18');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var testInput = '..^^.';

  var day18 = new AoC.Day18();
  day18.processInput(testInput);

  it('The ^ tile is a trap', function () {
    expect(day18.isTrap('^')).to.equal(true);
  });

  it('The . tile is safe', function () {
    expect(day18.isTrap('.')).to.equal(false);
  });

  it('Given ^^., the resulting tile is ^', function () {
    expect(day18.calculateTile('^','^','.')).to.equal('^');
  });

  it('Given .^^, the resulting tile is ^', function () {
    expect(day18.calculateTile('.','^','^')).to.equal('^');
  });

  it('Given ^.., the resulting tile is ^', function () {
    expect(day18.calculateTile('^','.','.')).to.equal('^');
  });

  it('Given ..^, the resulting tile is ^', function () {
    expect(day18.calculateTile('.','.','^')).to.equal('^');
  });

  it('Given ..^^., the next row is .^^^^', function () {
    expect(day18.calculateNextRow('..^^.')).to.equal('.^^^^');
  });

  it('Given ..^^., the next next row is ^^..^', function () {
    day18.buildMap(3);
    day18.printMap();
    expect(day18.MAP[2]).to.equal('^^..^');
  });

  it('Given .^^.^.^^^^, the 10th row is ^^.^^^..^^', function () {
    var day18 = new AoC.Day18();
    day18.processInput('.^^.^.^^^^');
    day18.buildMap(10);
    day18.printMap();
    expect(day18.MAP[9]).to.equal('^^.^^^..^^');
  });

  it('Given .^^.^.^^^^, in 10 rows, there are 38 safe tiles.', function () {
    var day18 = new AoC.Day18();
    day18.processInput('.^^.^.^^^^');
    day18.buildMap(10);
    expect(day18.getSafeTileCount()).to.equal(38);
  });

});