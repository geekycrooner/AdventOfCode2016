"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};


AOC.Day11 = function () {
  this.FloorOrdinals = ['first', 'second', 'third', 'fourth'];
  this.FloorMap = new Map();
  this.elevatorLocation = 0;
};

AOC.Day11.prototype.numFromOrdinal = function (input) {
  return this.FloorOrdinals.findIndex(function (element) {
    return element === input;
  });
};

AOC.Day11.prototype.processInstructions = function (instructionArray) {
  instructionArray.forEach(function (element) {
    // split instruction into a floor part and a contents part
    var instructionParts = element.split('contains');
    // deal with the floor part to get the floor number
    var floorOrdinal = instructionParts[0].split(' ')[1];
    var floorNum = this.numFromOrdinal(floorOrdinal);
    // get the current floor (or create it)
    var currentFloor;
    if (!this.FloorMap.get(floorNum))
      this.FloorMap.set(floorNum, new AOC.Floor(floorNum));
    currentFloor = this.FloorMap.get(floorNum);

    // deal with the contents part
    var rawContents = instructionParts[1].replace(' and ', ' ').split(' a ');
    // take care of any empty first cells
    if (!rawContents[0]) {
      rawContents.reverse();
      rawContents.pop();
      rawContents.reverse();
    }
    // skip empty floor contents and handle non empty contents
    if (rawContents[0].trim() !== 'nothing relevant.') {

      for (var index = 0; index < rawContents.length; index++) {
        // handle generators
        var element = rawContents[index];
        if (element.indexOf('generator') > 0)
          currentFloor.contents.push(element[0].toUpperCase() + 'G');
        if (element.indexOf('microchip') > 0)
          currentFloor.contents.push(element[0].toUpperCase() + 'M');
      }
    }
  }, this);
};

AOC.Day11.prototype.isFloorEmpty = function (floorOrdinal) {
  return (this.FloorMap.get(this.numFromOrdinal(floorOrdinal)).contents.length === 0);
};

AOC.Day11.prototype.getFloorContents = function (floorOrdinal) {
  return (this.FloorMap.get(this.numFromOrdinal(floorOrdinal)).contents.sort(function(a,b){return b-a;}).toString());
};

AOC.Day11.prototype.getElevatorLocation = function () {
  return this.FloorOrdinals[this.elevatorLocation].toString();
};

AOC.Floor = function (floorNum) {
  this.id = floorNum;
  this.contents = [];
};

module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day10Input.txt', { encoding: 'utf8' });
// var inputArray = rawInput.split('\r\n');

// // initialize the object
// var day10 = new AOC.Day10();
// day10.readInstructionsFromInputArray(inputArray);
// day10.processInputInstructions();
// day10.processBotInstructions();
// console.log('The bot responsible for comparing value-61 microchips with value-17 microchips is ' + day10.getBotIDThatCompared(61,17));
// console.log('The output values are ' + day10.getOutputBinsAsString());
// console.log('The value of outputs 0, 1, and 2 multiplied together is ' + day10.multiplyOutputs([0,1,2]));
