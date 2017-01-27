"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day19 = function () {
  this.positionOffset = 1;
  this.elfCircle = [];
};

AOC.Day19.prototype.processInput = function (input) {
  var elfCount = Number(input);
  for (var i = 0; i < elfCount; i++) {
    this.elfCircle.push(1);
  };
}

AOC.Day19.prototype.getPresentsInPosition = function (position) {
  return this.elfCircle[position - this.positionOffset];
};

AOC.Day19.prototype.getPositionOfNextElfWithPresents = function (myPosition) {
    for (var index = 0; index <= this.elfCircle.length; index++) {
      var position = (myPosition + index + 1) % this.elfCircle.length;
      var possNextElf = this.elfCircle[position];
      if (possNextElf > 0) { //does the next elf have presents?
        return position;
      }
    }
};

AOC.Day19.prototype.getPositionOfElfAcrossTable = function (myPosition) {
  
    for (var index = 0; index <= this.elfCircle.length; index++) {
      var position = (myPosition + index + 1) % this.elfCircle.length;
      var possNextElf = this.elfCircle[position];
      if (possNextElf > 0) { //does the next elf have presents?
        return position;
      }
    }
};

AOC.Day19.prototype.getWinningElfPosition = function () {
  var elfWon = false;
  var winningElfPosition = 0;
  // until one elf has all the presents...
  while (!elfWon) {
    for (var elfPosition = 0; elfPosition < this.elfCircle.length; elfPosition++) {
      // if the elf has presents...
      var myPresents = this.elfCircle[elfPosition];
      if (myPresents > 0) { // if I have presents, but not all presents...
        if (myPresents === this.elfCircle.length) {
          elfWon = true;
          winningElfPosition = elfPosition;
          break;
        } else {
          // elf take presents to left (could propagate)...
          var nextElf = this.getPositionOfNextElfWithPresents(elfPosition);
          this.elfCircle[elfPosition] = myPresents + this.elfCircle[nextElf];
          this.elfCircle[nextElf] = 0;
        }
      }
    }
  }
  return winningElfPosition + this.positionOffset;
};

AOC.Day19.prototype.getNewWinningElfPosition = function () {
  var elfWon = false;
  var winningElfPosition = 0;
  // until one elf has all the presents...
  while (!elfWon) {
    for (var elfPosition = 0; elfPosition < this.elfCircle.length; elfPosition++) {
      // if the elf has presents...
      var myPresents = this.elfCircle[elfPosition];
      if (myPresents > 0) { // if I have presents, but not all presents...
        if (myPresents === this.elfCircle.length) {
          elfWon = true;
          winningElfPosition = elfPosition;
          break;
        } else {
          // elf take presents to left (could propagate)...
          var nextElf = this.getPositionOfElfAcrossTable(elfPosition);
          this.elfCircle[elfPosition] = myPresents + this.elfCircle[nextElf];
          this.elfCircle[nextElf] = 0;
        }
      }
    }
  }
  return winningElfPosition + this.positionOffset;
};

module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day19Input.txt', { encoding: 'utf8' });

// // initialize the object
// var day19 = new AOC.Day19();
// day19.processInput(rawInput);
// console.log(`Elf in position ${day19.getWinningElfPosition()} is the Elf that gets all the presents.`);

// // initialize the second object
// var day1902 = new AOC.Day19();
// day1902.processInput(rawInput);
// console.log(`After the rule change Elf in position ${day19.getNewWinningElfPosition()} is the Elf that gets all the presents.`);

