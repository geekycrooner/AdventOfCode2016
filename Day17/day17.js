"use strict";

var fs = require('fs');
var crypto = require('crypto');

// global namespace
var AOC = AOC || {};

AOC.RIGHT = 1; // 0001
AOC.LEFT = 2; // 0010
AOC.DOWN = 4; // 0100
AOC.UP = 8; // 1000

AOC.Day17 = function (input) {
  this.passcode = input;
  //   this.potentialPaths = [];
  //   this.goodPaths = [];

  //   this.paths = [];

  this.vaultPaths = [];
};

AOC.Day17.prototype.getLongestVaultPath = function () {
    var longestPath = '';
    this.vaultPaths.forEach(function (path) {
      if (path.length > longestPath.length)
        longestPath = path;
    });
    return longestPath;
}

AOC.Day17.prototype.getShortestVaultPath = function () {
    var shortestPath = 'x'.repeat(100000);
    this.vaultPaths.forEach(function (path) {
      if (path.length < shortestPath.length)
        shortestPath = path;
    });
    return shortestPath;
}


// AOC.Day17.prototype.getPasscode = function () {
//   return this.passcode;
// };

// AOC.Day17.prototype.getPotentialPaths = function () {
//   // return this.potentialPaths.toString();
//   var result = '';
//   this.potentialPaths.forEach(function (val, ind, arr) {
//     if (result !== '') result += ',';
//     result += val.passcode;
//   });
//   return result;
// };

AOC.Day17.prototype.calculatePotentialPaths = function (x, y, passcode) {
  // compute possible doors 
  var possibleDoors = this.getValidDoorsBin(x, y);

  var openDoors = this.whatDoorsAreOpenBin(passcode);
  // check against open doors 
  var doors = openDoors & possibleDoors;
  if (doors & UP) {
    var loc = new AOC.Location(x, y - 1);
    loc.passcode = passcode + 'U';
    this.potentialPaths.push(loc);
  }
  if (doors & DOWN) {
    var loc = new AOC.Location(x, y + 1);
    loc.passcode = passcode + 'D';
    this.potentialPaths.push(loc);
  }
  if (doors & LEFT) {
    var loc = new AOC.Location(x - 1, y);
    loc.passcode = passcode + 'L';
    this.potentialPaths.push(loc);
  }
  if (doors & RIGHT) {
    var loc = new AOC.Location(x + 1, y);
    loc.passcode = passcode + 'R';
    this.potentialPaths.push(loc);
  }
  // sort by passcode length in descending order
  this.potentialPaths.sort(function (a, b) {
    return b.passcode.length - a.passcode.length;
  });

  //this.potentialPaths.push((openDoors & possibleDoors).toString(2));
};

// AOC.Day17.prototype.getShortestPath = function () {
//   var value = '0'.repeat(Number.MAX_SAFE_INTEGER);
//   for (var index = 0; index < this.goodPaths.length; index++) {
//     var element = this.goodPaths[index];
//     if (element.length < value.length) value = element;
//   }
//   if (value[0] === '0')
//     return 'No valid paths reach the vault.';
//   else
//     return value;
// };

AOC.Day17.prototype.getDoorStates = function (input) {
  var hash = crypto.createHash('md5');
  hash.update(input);
  return hash.digest('hex').toLowerCase().substr(0, 4);
};

// AOC.Day17.prototype.whatDoorsAreOpen = function (input) {
//   var openStates = 'bcdef';
//   var openDoors = '';
//   var doorStates = this.getDoorStates(input);
//   if (openStates.indexOf(doorStates[0]) >= 0) //door open 
//     openDoors += 'U';
//   if (openStates.indexOf(doorStates[1]) >= 0) //door open 
//     openDoors += 'D';
//   if (openStates.indexOf(doorStates[2]) >= 0) //door open 
//     openDoors += 'L';
//   if (openStates.indexOf(doorStates[3]) >= 0) //door open 
//     openDoors += 'R';
//   return openDoors;
// };

AOC.Day17.prototype.getOpenDoors = function (input) {
  var openStates = 'bcdef';
  var openDoors = 0;
  var doorStates = this.getDoorStates(input);
  if (openStates.indexOf(doorStates[0]) >= 0) openDoors |= AOC.UP;
  if (openStates.indexOf(doorStates[1]) >= 0) openDoors |= AOC.DOWN;
  if (openStates.indexOf(doorStates[2]) >= 0) openDoors |= AOC.LEFT;
  if (openStates.indexOf(doorStates[3]) >= 0) openDoors |= AOC.RIGHT;
  return openDoors;
};

// AOC.Day17.prototype.getValidDoors = function (x, y) {
//   var possibleDoors = '';
//   if (y > 0) possibleDoors += 'U';
//   if (y < 3) possibleDoors += 'D';
//   if (x > 0) possibleDoors += 'L';
//   if (x < 3) possibleDoors += 'R';
//   return possibleDoors;
// };

// AOC.Day17.prototype.getValidDoorsBin = function (x, y) {
//   var RIGHT = 1; // 0001
//   var LEFT = 2; // 0010
//   var DOWN = 4; // 0100
//   var UP = 8; // 1000
//   var possibleDoors = 0x0000;
//   if (y > 0) possibleDoors |= UP;
//   if (y < 3) possibleDoors |= DOWN;
//   if (x > 0) possibleDoors |= LEFT;
//   if (x < 3) possibleDoors |= RIGHT;
//   return possibleDoors;
// };

AOC.Day17.prototype.checkPasscodeAndMove = function (x, y, passcode) {
  var openDoors;
  if (x === 3 && y === 3)
    this.vaultPaths.push(passcode.substring(this.passcode.length));
  else if (x < 0 || y < 0 || x > 3 || y > 3)
    return;
  else {
    openDoors = this.getOpenDoors(passcode);
    if (openDoors & AOC.UP) this.checkPasscodeAndMove(x, y - 1, passcode + 'U');
    if (openDoors & AOC.DOWN) this.checkPasscodeAndMove(x, y + 1, passcode + 'D');
    if (openDoors & AOC.LEFT) this.checkPasscodeAndMove(x - 1, y, passcode + 'L');
    if (openDoors & AOC.RIGHT) this.checkPasscodeAndMove(x + 1, y, passcode + 'R');
  }
};

// AOC.Location = function (x, y) {
//   this.x = x;
//   this.y = y;
//   this.passcode;
//   this.pathToHere;
// };


module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day17Input.txt', { encoding: 'utf8' });

// // initialize the object
// var day17 = new AOC.Day17(rawInput);

// // var shortestPath;
// // day17.calculatePotentialPaths(0, 0, day17.passcode);

// // while (day17.potentialPaths.length > 0) {
// //   var pc = day17.potentialPaths.pop();
// //   if (pc.x === 3 && pc.y === 3) {
// //     day17.goodPaths.push(pc);
// //     shortestPath = pc.passcode.substring(day17.passcode.length);
// //     break;
// //   }
// //   day17.calculatePotentialPaths(pc.x, pc.y, pc.passcode);
// // }


// // //initialize: add starting point to possiblePaths
// // // pop location off of possiblePaths
// // // get possibleDoors for location
// // // for each of the possibleDoors, see if they're open using current passcode
// // // if they're open add the corresponding location to the potentialPaths

// // console.log(`Given the passcode ${day17.passcode}, the shortest path to reach the vault is ${shortestPath}.`);


// var paths = [];

// day17.takeAStep(0, 0, day17.passcode);

// var longestPath = '';

// day17.paths.forEach(function (path) {
//   if (path.length > longestPath.length)
//     longestPath = path;
// });

// console.log(`Given the passcode ${day17.passcode}, the longest path to reach the vault is ${longestPath.substring(rawInput.length).length} steps.`);
