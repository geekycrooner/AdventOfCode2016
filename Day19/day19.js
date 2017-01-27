"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day19 = function () {
  this.elfCircle = new Map();
};

AOC.Elf = function (id) {
  this.id = id;
  this.presents = 1;
};

AOC.Day19.prototype.processInput = function (input) {
  var elfCount = Number(input);
  var elf;
  for (var i = 1; i <= elfCount; i++) {
    elf = new AOC.Elf(i);
    this.elfCircle.set(i, elf);
  };
};

AOC.Day19.prototype.getPresentsInPosition = function (position) {
  return this.elfCircle.get(position).presents;
};

AOC.Day19.prototype.setPresentsInPosition = function (position, presents) {
  return this.elfCircle.get(position).presents = presents;
};

AOC.Day19.prototype.getPositionOfNextElfWithPresents = function (myPosition) {
  for (var index = 0; index < this.elfCircle.size; index++) {
    var position = ((myPosition + index) % this.elfCircle.size) + 1;
    if (this.getPresentsInPosition(position) > 0) { //does the next elf have presents?
      return position;
    }
  }
};

AOC.Day19.prototype.getPositionOfElfAcrossTable = function (myPosition) {
  /*
    ID | myPosition | position across table function 
    ------------------------------------------------
    1  |     0      | (0 + floor(5/2)) % 5 = 2
    2  |     1      | (1 + floor(5/2)) % 5 = 3
    3  |     2      | (2 + floor(5/2)) % 5 = 4
    4  |     3      | (3 + floor(5/2)) % 5 = 0
    5  |     4      | (4 + floor(5/2)) % 5 = 1 
  */
  var circleSize = this.elfCircle.size;
  var preliminaryPosition = (myPosition + Math.floor(circleSize / 2)) % circleSize
  return (preliminaryPosition === 0) ? circleSize : preliminaryPosition;
};

AOC.Day19.prototype.getWinningElfPosition = function () {
  var elfWon = false;
  var winningElfPosition = 0;
  // until one elf has all the presents...
  while (!elfWon) {
    for (var elfPosition = 1; elfPosition <= this.elfCircle.size; elfPosition++) {
      // if the elf has presents...
      var myPresents = this.getPresentsInPosition(elfPosition);
      if (myPresents > 0) { // if I have presents, but not all presents...
        if (myPresents === this.elfCircle.size) {
          elfWon = true;
          winningElfPosition = elfPosition;
          break;
        } else {
          // elf take presents to left (could propagate)...
          var nextElfPosition = this.getPositionOfNextElfWithPresents(elfPosition);
          this.setPresentsInPosition(elfPosition, myPresents + this.getPresentsInPosition(nextElfPosition));
          this.setPresentsInPosition(nextElfPosition, 0);
        }
      }
    }
  }
  return winningElfPosition;
};

AOC.Day19.prototype.getElfById = function (id) {
  var elf;
  this.elfCircle.forEach((val) => {
    if (val.id === id) elf = val;
  });
};

AOC.Day19.prototype.getNewWinningElfPosition = function () {
  var elfWon = false;
  var winningElfPosition = 0;
  var maxElfId = this.elfCircle.size;
  // until one elf has all the presents...
  while (!elfWon) {
    // for (var elfPosition = 1; elfPosition <= this.elfCircle.size; elfPosition++) {
    for (var elfId = 1; elfId <= maxElfId; elfId++) {
     // get the elf if it's still in the circle
      var elf = this.getElfById(elfId);
      if (elf) {
      // if the elf has presents...
        // var myPresents = this.getPresentsInPosition(elfPosition);
        var myPresents = elf.presents;
        if (myPresents > 0) { // if I have presents, but not all presents...
          // if (myPresents === this.elfCircle.size) {
          if (myPresents === maxElfId) {
            elfWon = true;
            winningElfPosition = elf.id;
            break;
          } else {
            // elf take presents to left (could propagate)...
            var nextElfPosition = this.getPositionOfElfAcrossTable(elf);
            this.setPresentsInPosition(elfPosition, myPresents + this.getPresentsInPosition(nextElfPosition));
            this.setPresentsInPosition(nextElfPosition, 0);
            this.elvesMoveIn();
          }
        }
      }
    }
  }
  return winningElfPosition;
};

AOC.Day19.prototype.elvesMoveIn = function () {
  // create a new map, inserting elves with presents 
  var newCircle = new Map();
  var newKey = 1;
  this.elfCircle.forEach((val) => {
    if (val.presents > 0) {
      newCircle.set(newKey, val);
      newKey++;
    }
  });
  // reassign new map to elfCircle
  this.elfCircle = newCircle;
};

module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day19Input.txt', { encoding: 'utf8' });

// // initialize the object
// var day19 = new AOC.Day19();
// day19.processInput(rawInput);
// console.log(`Elf in position ${day19.getWinningElfPosition()} is the Elf that gets all the presents.`);

/* 
  for rules change to work, this should change to work with the following function:
  (myPosition + floor (numPositions/2)) % numPositions
  id is separate from position and positions should be reassigned starting with lowest ID after every removal
  so, at start:

  ID | myPosition | position across table function 
  ------------------------------------------------
  1  |     0      | (0 + floor(5/2)) % 5 = 2
  2  |     1      | (1 + floor(5/2)) % 5 = 3
  3  |     2      | (2 + floor(5/2)) % 5 = 4
  4  |     3      | (3 + floor(5/2)) % 5 = 0
  5  |     4      | (4 + floor(5/2)) % 5 = 1 

  and after 3 is removed...

  ID | myPosition | position across table function 
  ------------------------------------------------
  1  |     0      | (0 + floor(4/2)) % 4 = 2
  2  |     1      | (1 + floor(4/2)) % 4 = 3
  4  |     2      | (2 + floor(4/2)) % 4 = 0
  5  |     3      | (3 + floor(4/2)) % 4 = 1 

  and after 5 is removed...

  ID | myPosition | position across table function 
  ------------------------------------------------
  1  |     0      | (0 + floor(3/2)) % 3 = 1
  2  |     1      | (1 + floor(3/2)) % 3 = 2
  4  |     2      | (2 + floor(3/2)) % 3 = 0

  and after 1 is removed...

  ID | myPosition | position across table function 
  ------------------------------------------------
  2  |     0      | (0 + floor(2/2)) % 2 = 1
  4  |     1      | (1 + floor(2/2)) % 2 = 0

*/

// // initialize the second object
// var day1902 = new AOC.Day19();
// day1902.processInput(rawInput);
// console.log(`After the rule change Elf in position ${day19.getNewWinningElfPosition()} is the Elf that gets all the presents.`);

