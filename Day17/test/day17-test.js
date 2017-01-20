"use strict";

var chai = require('chai');
var expect = chai.expect;
var AOC = require('./../day17');

describe('AOC', function () {
  // turn off timeouts 
  // this.timeout(0);

  // var passcode = 'hijkl';

  // var day17 = new AOC.Day17(passcode);
  // var startingLocation = new AOC.Location(0, 0);
  // startingLocation.passcode = passcode;
  // startingLocation.pathToHere = '';
  // day17.potentialPaths.push(startingLocation);

  // it('At the start, my path is empty', function () {
  //   var day17 = new AOC.Day17(passcode);
  //   var startingLocation = new AOC.Location(0, 0);
  //   startingLocation.passcode = passcode;
  //   startingLocation.pathToHere = '';
  //   day17.potentialPaths.push(startingLocation);
  //   expect(day17.potentialPaths.pop().pathToHere.length).to.equal(0);
  // });

  // it('At the start, given the passcode, hijkl, the door states are ced9', function () {
  //   expect(day17.getDoorStates(day17.getPasscode())).to.equal('ced9');
  // });

  // it('At the start position (upper left) the only valid doors are DR', function () {
  //   expect(day17.getValidDoors(0, 0)).to.equal('DR');
  // });

  // it('At position 0,1 the only valid doors are UDR', function () {
  //   expect(day17.getValidDoors(0, 1)).to.equal('UDR');
  // });

  // it('At position 0,2 the only valid doors are UDR', function () {
  //   expect(day17.getValidDoors(0, 2)).to.equal('UDR');
  // });

  // it('At position 0,3 the only valid doors are UDR', function () {
  //   expect(day17.getValidDoors(0, 3)).to.equal('UR');
  // });

  // it('At position 1,0 the only valid doors are DLR', function () {
  //   expect(day17.getValidDoors(1, 0)).to.equal('DLR');
  // });

  // it('At position 2,0 the only valid doors are DLR', function () {
  //   expect(day17.getValidDoors(2, 0)).to.equal('DLR');
  // });

  // it('At position 3,0 the only valid doors are DL', function () {
  //   expect(day17.getValidDoors(3, 0)).to.equal('DL');
  // });

  // it('At position 3,3 the only valid doors are UL', function () {
  //   expect(day17.getValidDoors(3, 3)).to.equal('UL');
  // });

  // it('At the start, given the original passcode, hijkl, the open doors are D', function () {
  //   var loc = day17.potentialPaths.pop();
  //   var validDoors = day17.getValidDoors(loc.x, loc.y);
  //   var openDoors = day17.whatDoorsAreOpen('hijkl');
  //   var result = '';
  //   for (var index = 0; index < openDoors.length; index++) {
  //     var element = openDoors[index].toString();
  //     if (validDoors.indexOf(element) > -1) {
  //       result = result + element;
  //     }
  //   }
  //   expect(result).to.equal('D');
  // });

  // it('After moving down from the first room given the original passcode, hijkl, the new door states are f2bc', function () {
  //   expect(day17.getDoorStates('hijklD')).to.equal('f2bc');
  // });

  // it('At the start, the only potential next path is hijklD', function () {
  //   day17.calculatePotentialPaths(0, 0, 'hijkl');
  //   expect(day17.getPotentialPaths()).to.equal('hijklD');
  // });

  // it('From the initial state and then taking the only open door, the only potential next path is hijklDU,hijklDR', function () {
  //   var day17 = new AOC.Day17(passcode);
  //   day17.curX = 0;
  //   day17.curY = 0;
  //   day17.calculatePotentialPaths(day17.curX, day17.curY, day17.passcode);

  //   var pc = day17.potentialPaths.pop();
  //   // var dir = pc.slice(-1);
  //   // if (dir === 'U') day17.curY -= 1;
  //   // else if (dir === 'D') day17.curY += 1;
  //   // else if (dir === 'L') day17.curX -= 1;
  //   // else if (dir === 'R') day17.curX += 1;
  //   // day17.calculatePotentialPaths(day17.curX, day17.curY, pc);
  //   day17.calculatePotentialPaths(pc.x, pc.y, pc.passcode);

  //   expect(day17.getPotentialPaths()).to.equal('hijklDU,hijklDR');
  // });

  // it('After the previous step and taking the Right door, the only potential next path is hijklDU', function () {
  //   var day17 = new AOC.Day17(passcode);
  //   day17.curX = 0;
  //   day17.curY = 0;
  //   day17.calculatePotentialPaths(day17.curX, day17.curY, day17.passcode);

  //   for (var i = 0; i < 2; i++) {
  //     var pc = day17.potentialPaths.pop();
  //     day17.calculatePotentialPaths(pc.x, pc.y, pc.passcode);
  //   }

  //   expect(day17.getPotentialPaths()).to.equal('hijklDU');
  // });

  // it('After the previous step and taking the Up door, the only potential next path is hijklDUR', function () {
  //   var day17 = new AOC.Day17(passcode);
  //   day17.curX = 0;
  //   day17.curY = 0;
  //   day17.calculatePotentialPaths(day17.curX, day17.curY, day17.passcode);

  //   for (var i = 0; i < 3; i++) {
  //     var pc = day17.potentialPaths.pop();
  //     day17.calculatePotentialPaths(pc.x, pc.y, pc.passcode);
  //   }

  //   expect(day17.getPotentialPaths()).to.equal('hijklDUR');
  // });


  it('After the previous step, using passcode hijkl, and taking the Right door, DURR, the only potential next path is \'\'', function () {
    var day17 = new AOC.Day17('hijkl');
    day17.checkPasscodeAndMoveOnce(2, 0, day17.passcode + 'DURR')
    expect(day17.getPotentialPaths()).to.equal('');
  });

  it('If your passcode were ihgpwlah, the shortest path would be DDRRRD.', function () {
    var day17 = new AOC.Day17('ihgpwlah');
    day17.checkPasscodeAndMove(0, 0, day17.passcode);
    expect(day17.getShortestVaultPath()).to.equal('DDRRRD');
  });

  it('If your passcode were kglvqrro, the shortest path would be DDUDRLRRUDRD.', function () {
    var day17 = new AOC.Day17('kglvqrro');
    day17.checkPasscodeAndMove(0, 0, day17.passcode);
    expect(day17.getShortestVaultPath()).to.equal('DDUDRLRRUDRD');
  });

  it('If your passcode were ulqzkmiv, the shortest path would be DRURDRUDDLLDLUURRDULRLDUUDDDRR.', function () {
    var day17 = new AOC.Day17('ulqzkmiv');
    day17.checkPasscodeAndMove(0, 0, day17.passcode);
    expect(day17.getShortestVaultPath()).to.equal('DRURDRUDDLLDLUURRDULRLDUUDDDRR');
  });

  it('If your passcode were ihgpwlah, the longest path would take 370 steps.', function () {
    var day17 = new AOC.Day17('ihgpwlah');
    day17.checkPasscodeAndMove(0, 0, day17.passcode);
    expect(day17.getLongestVaultPath().length).to.equal(370);
  });

  it('If your passcode were kglvqrro, the longest path would be 492 steps long.', function () {
    var day17 = new AOC.Day17('kglvqrro');
    day17.checkPasscodeAndMove(0, 0, day17.passcode);
    expect(day17.getLongestVaultPath().length).to.equal(492);
  });

  it('If your passcode were ulqzkmiv, the longest path would be 830 steps long.', function () {
    var day17 = new AOC.Day17('ulqzkmiv');
    day17.checkPasscodeAndMove(0, 0, day17.passcode);
    expect(day17.getLongestVaultPath().length).to.equal(830);
  });

});