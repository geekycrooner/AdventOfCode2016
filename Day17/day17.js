"use strict";

var fs = require('fs');
var crypto = require('crypto');

// global namespace
var AOC = AOC || {};

AOC.Day17 = function (input) {
  this.passcode = input;
  this.potentialPaths = [];
  this.goodPaths = [];
};

AOC.Day17.prototype.getPasscode = function () {
  return this.passcode;
};

AOC.Day17.prototype.getShortestPath = function () {
  var value = '0'.repeat(Number.MAX_SAFE_INTEGER);
  for (var index = 0; index < this.goodPaths.length; index++) {
    var element = this.goodPaths[index];
    if (element.length < value.length) value = element;
  }
  if (value[0] === '0')
    return 'No valid paths reach the vault.';
  else
    return value;
};

AOC.Day17.prototype.getDoorStates = function (input) {
  var hash = crypto.createHash('md5');
  hash.update(input);
  return hash.digest('hex').toLowerCase().substr(0, 4);
};

AOC.Day17.prototype.whatDoorsAreOpen = function (input) {
  var openStates = 'bcdef';
  var openDoors = '';
  var doorStates = this.getDoorStates(input);
  if (openStates.indexOf(doorStates[0]) >= 0) //door open 
    openDoors += 'U';
  if (openStates.indexOf(doorStates[1]) >= 0) //door open 
    openDoors += 'D';
  if (openStates.indexOf(doorStates[2]) >= 0) //door open 
    openDoors += 'L';
  if (openStates.indexOf(doorStates[3]) >= 0) //door open 
    openDoors += 'R';
  return openDoors;
};

AOC.Day17.prototype.getValidDoors = function (x, y) {
  var possibleDoors = '';
  if (y > 0) possibleDoors += 'U';
  if (y < 3) possibleDoors += 'D';
  if (x > 0) possibleDoors += 'L';
  if (x < 3) possibleDoors += 'R';
  return possibleDoors;
};

AOC.Location = function (x, y) {
  this.x = x;
  this.y = y;
  this.passcode;
  this.pathToHere;
};


module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day17Input.txt', { encoding: 'utf8' });

// // initialize the object
// var day17 = new AOC.Day17(rawInput);

//initialize: add starting point to possiblePaths
// pop location off of possiblePaths
// get possibleDoors for location
// for each of the possibleDoors, see if they're open using current passcode
// if they're open add the corresponding location to the potentialPaths

// console.log(`Given the passcode ${day17.passcode}, the shortest path to reach the vault is ${day17.getShortestPath()}.`);
