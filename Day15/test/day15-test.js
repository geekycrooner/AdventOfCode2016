"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day15');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var testInput = [
    'Disc #1 has 5 positions; at time=0, it is at position 4.'
    , 'Disc #2 has 2 positions; at time=0, it is at position 1.'
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

  it('At Time = 0, Disc 1 is at position 4', function () {
    expect(day15.getDiscPositionAtTime(1, 0)).to.equal(4);
  });

  it('At Time = 0, Disc 2 is at position 1', function () {
    expect(day15.getDiscPositionAtTime(2, 0)).to.equal(1);
  });

  it('If button pressed at time 0, capsule would fall through disc 1', function () {
    var disc = day15.getDisc(1);
    expect(disc.isSlotOpenAt(disc.getTimeAtDiscGivenStartTime(0))).to.equal(true);
  });

  it('If button pressed at time 0, capsule would not fall through disc 2', function () {
    var disc = day15.getDisc(2);
    expect(disc.isSlotOpenAt(disc.getTimeAtDiscGivenStartTime(0))).to.equal(false);
  });

  it('If button pressed at time 5, capsule would fall through disc 1', function () {
    var disc = day15.getDisc(1);
    expect(disc.isSlotOpenAt(disc.getTimeAtDiscGivenStartTime(5))).to.equal(true);
  });

  it('If button pressed at time 5, capsule would fall through disc 2', function () {
    var disc = day15.getDisc(2);
    expect(disc.isSlotOpenAt(disc.getTimeAtDiscGivenStartTime(5))).to.equal(true);
  });

  it('The first time button can be pressed to get a capsule is 5', function () {
    expect(day15.getFirstTimeAllSlotsOpen()).to.equal(5);
  });

});