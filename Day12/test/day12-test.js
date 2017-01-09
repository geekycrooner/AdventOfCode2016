"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day12');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var input = [
    'cpy 41 a'
    , 'inc a'
    , 'inc a'
    , 'dec a'
    , 'jnz a 2'
    , 'dec a'
  ];

  it('After instruction cpy 41 a, register a will be 41', function () {
    var day12 = new AoC.Day12();
    day12.readInstructions(['cpy 41 a']); 
    day12.run();
    expect(day12.getRegister('a')).to.equal(41);
  });

  it('After instruction inc a, register a will be 1', function () {
    var day12 = new AoC.Day12();
    day12.readInstructions(['inc a']); 
    day12.run();
    expect(day12.getRegister('a')).to.equal(1);
  });

  it('After instruction dec a, register a will be -1', function () {
    var day12 = new AoC.Day12();
    day12.readInstructions(['dec a']);
    day12.run();
    expect(day12.getRegister('a')).to.equal(-1);
  });

  it('After instruction jnz 0 2, next instruction will be current instruction + 1', function () {
    var day12 = new AoC.Day12();
    day12.readInstructions(['jnz 0 2']);
    day12.run();
    expect(day12.getCurrentInstructionIndex()).to.equal(1);
  });

 it('Given the problem instructions, the value of a would be 42', function () {
    var day12 = new AoC.Day12();
    day12.readInstructions(input);
    day12.run();
    expect(day12.getRegister('a')).to.equal(41);
  });
});