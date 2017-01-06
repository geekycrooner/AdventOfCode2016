"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day11');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var day11 = new AoC.Day11();

  var instructions = [
'The first floor contains a hydrogen-compatible microchip and a lithium-compatible microchip.'
,'The second floor contains a hydrogen generator.'
,'The third floor contains a lithium generator.'
,'The fourth floor contains nothing relevant.'
  ];
    day11.processInstructions(instructions);

  it('The Initial State of the fourth is empty.', function () {
    expect(day11.isFloorEmpty('fourth')).to.equal(true);
  });

  it('The Initial State of the third floor is LG.', function () {
    expect(day11.getFloorContents('third')).to.equal('LG');
  });

  it('The Initial State of the second floor is HG.', function () {
    expect(day11.getFloorContents('second')).to.equal('HG');
  });

  it('The Initial State of the first floor is HM,LM.', function () {
    expect(day11.getFloorContents('first')).to.equal('HM,LM');
  });

  it('The goal state is HG,HM,LG,LM.', function () {
    expect(day11.getGoalState()).to.equal('HG,HM,LG,LM');
  });

});