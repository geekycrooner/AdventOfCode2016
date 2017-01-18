"use strict";

var chai = require('chai');
var expect = chai.expect;
var AOC = require('./../day17');

describe('AOC', function () {
  // turn off timeouts 
  this.timeout(0);

  var passcode = 'hijkl';

  var day17 = new AOC.Day17(passcode);
  var startingLocation = new AOC.Location(0, 0);
  startingLocation.passcode = passcode;
  startingLocation.pathToHere = '';
  day17.potentialPaths.push(startingLocation);

  it('At the start, my path is empty', function () {
    var day17 = new AOC.Day17(passcode);
    var startingLocation = new AOC.Location(0, 0);
    startingLocation.passcode = passcode;
    startingLocation.pathToHere = '';
    day17.potentialPaths.push(startingLocation);
    expect(day17.potentialPaths.pop().pathToHere.length).to.equal(0);
  });

  it('At the start, given the passcode, hijkl, the door states are ced9', function () {
    expect(day17.getDoorStates(day17.getPasscode())).to.equal('ced9');
  });

  it('At the start position (upper left) the only valid doors are DR', function () {
    expect(day17.getValidDoors(0, 0)).to.equal('DR');
  });

  it('At position 0,1 the only valid doors are UDR', function () {
    expect(day17.getValidDoors(0, 1)).to.equal('UDR');
  });

  it('At position 0,2 the only valid doors are UDR', function () {
    expect(day17.getValidDoors(0, 2)).to.equal('UDR');
  });

  it('At position 0,3 the only valid doors are UDR', function () {
    expect(day17.getValidDoors(0, 3)).to.equal('UR');
  });

  it('At position 1,0 the only valid doors are DLR', function () {
    expect(day17.getValidDoors(1, 0)).to.equal('DLR');
  });

  it('At position 2,0 the only valid doors are DLR', function () {
    expect(day17.getValidDoors(2, 0)).to.equal('DLR');
  });

  it('At position 3,0 the only valid doors are DL', function () {
    expect(day17.getValidDoors(3, 0)).to.equal('DL');
  });

  it('At position 3,3 the only valid doors are UL', function () {
    expect(day17.getValidDoors(3, 3)).to.equal('UL');
  });

  it('At the start, given the original passcode, hijkl, the open doors are D', function () {
    var loc = day17.potentialPaths.pop();
    var validDoors = day17.getValidDoors(loc.x, loc.y);
    var openDoors = day17.whatDoorsAreOpen('hijkl');
    var result = '';
    for (var index = 0; index < openDoors.length; index++) {
      var element = openDoors[index].toString();
      if (validDoors.indexOf(element) > -1) {
        result = result + element;
      }
    }
    expect(result).to.equal('D');
  });

  it('After moving down from the first room given the original passcode, hijkl, the new door states are f2bc', function () {
    expect(day17.getDoorStates('hijklD')).to.equal('f2bc');
  });

});