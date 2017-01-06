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
    , 'The second floor contains a hydrogen generator.'
    , 'The third floor contains a lithium generator.'
    , 'The fourth floor contains nothing relevant.'
  ];
  day11.createStartAndGoalStates(instructions);
 
  it('The start state is E1,HG2,HM1,LG3,LM1', function () {
    expect(day11.statesList[0].displayState()).to.equal('E1,HG2,HM1,LG3,LM1');
  });

  it('The goal state is E4,HG4,HM4,LG4,LM4.', function () {
    expect(day11.goalState.displayState()).to.equal('E4,HG4,HM4,LG4,LM4');
  });

  it('The minimum number of steps to reach the goal state is 11', function () {
    expect(day11.getMinimumStepsToGoal()).to.equal('11');
  });



  // it('The Initial State of the third floor is LG.', function () {
  //   expect(day11.getFloorContents('third')).to.equal('LG');
  // });

  // it('The Initial State of the second floor is HG.', function () {
  //   expect(day11.getFloorContents('second')).to.equal('HG');
  // });

  // it('The Initial State of the first floor is HM,LM.', function () {
  //   expect(day11.getFloorContents('first')).to.equal('HM,LM');
  // });

  // while currentState !== goalState
  // generateLegalMoves
  // for each legal move, recurse


});