"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day13 = function () {
  this.favoriteNumber;
};

AOC.Day13.prototype.processInput = function (input) {
  this.favoriteNumber = Number(input[0]);
};

AOC.Day13.prototype.getLocation = function (x, y) {
  var decimal1 = (x * x) + (3 * x) + (2 * x * y) + y + (y * y);
  var decimal2 = decimal1 + this.favoriteNumber;
  var binary = decimal2.toString(2);
  var numberOfOnes = 0;
  for (var index = 0; index < binary.length; index++) {
    if (binary[index] === '1') numberOfOnes++;
  }
  if (numberOfOnes % 2 === 0)
    return '.';
  else
    return '#';
};

module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day13Input.txt', { encoding: 'utf8' });
// var inputArray = rawInput.split('\r\n');

// // initialize the object
// var day13 = new AOC.Day13();
// day13.readInstructions(inputArray);
// console.log('The fewest number of steps to reach 31,39 is ' + day13.getNumberOfSteps(31,39));
