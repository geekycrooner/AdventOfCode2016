"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day11 = function () {
  this.goalState;
  this.FloorOrdinals = ['', 'first', 'second', 'third', 'fourth'];
  this.statesList = [];
  this.successStates = [];
};

AOC.Day11.prototype.getMinimumStepsToGoal = function () {
  this.generatePossibleStates();
  var minSteps;
  this.successStates.forEach(function (element) {
    if (element.count < minSteps) minSteps = element.count;
  }, this);
  return minSteps;
};

AOC.Day11.prototype.numFromOrdinal = function (input) {
  return this.FloorOrdinals.findIndex(function (element) {
    return element === input;
  });
};

AOC.State = function (count, map) {
  this.count = count;
  this.map = map;
};

AOC.State.prototype.displayState = function () {
  var result = '';
  var keys = [];
  for (var key of this.map.keys()) {
    keys.push(key);
  }
  keys.sort();
  for (var index = 0; index < keys.length; index++) {
    result += ((index !== 0) ? ',' : '') + keys[index] + this.map.get(keys[index]);
  }
  return result;
};

AOC.Day11.prototype.isFloorValid = function (floorArray) {
  var mPrefixes = [], gPrefixes = [];
  // for each floor, every M has a G OR there are NO Gs or NO Ms
  // get the things on that floor (except the elevator)
  // Therefore, it is assumed that you will keep chips connected to their corresponding RTG when they're in the same room, and away from other RTGs otherwise.
  if (floorArray.toString().indexOf('M') < 0 || floorArray.toString().indexOf('G') < 0)
    return true;
  else {
    // get all the prefixes for the Ms
    for (var index = 0; index < floorArray.length; index++) {
      var element = floorArray[index];
      if (element[1] === 'M') mPrefixes.push(element[0]);
      if (element[1] === 'G') gPrefixes.push(element[0]);
    }
    for (var index = 0; index < mPrefixes.length; index++) {
      if (gPrefixes.toString().indexOf(mPrefixes[index]) < 0)
        return false;

    }
    return true;
  };
};

AOC.Day11.prototype.isValidState = function (state) {
  // if a chip is ever left in the same area as another RTG, and it's not connected to its own RTG, the chip will be fried. 
  var floors = [];
  for (var index = 0; index < 4; index++) {
    floors[index] = new Array();
  };

  state.map.forEach(function (val, key, map) {
    if (key !== 'E') {
      floors[val - 1].push(key);
    }
  }, this);

  for (var index = 0; index < 4; index++) {
    if (!this.isFloorValid(floors[index]))
      return false;
  }
  return true;
};

AOC.Day11.prototype.generatePossibleStates = function () {
  // var stepCount;
  while (this.statesList.length > 0) {
    var currentState = this.statesList.pop();
    // if not the goal state....
    if (currentState.displayState() !== this.goalState.displayState()) {
      // is the state valid?
      if (this.isValidState(currentState)) {
        // find the elevator's floor in the state and get possibleEs
        var elevatorLocation = currentState.map.get('E');
        var possibleNextFloors;
        if (elevatorLocation === 1) possibleNextFloors = [2];
        if (elevatorLocation === 2) possibleNextFloors = [1, 3];
        if (elevatorLocation === 3) possibleNextFloors = [2, 4];
        if (elevatorLocation === 4) possibleNextFloors = [3];
        // for each possible floor, generate maps
        possibleNextFloors.forEach(function (newFloor) {
          var tempMap = new Map();
          // for each item in the stateMap that are equal to state.e, make a new state after changing that item to equal possibleE and add to statesList
          for (var [key, value] of currentState.map.entries()) {
            tempMap.set(key, (value === elevatorLocation) ? newFloor : value);
          }
          this.statesList.push(new AOC.State(currentState.count + 1, tempMap));
        }, this);
        // for all combinations of two items in the stateMap that are equal to state.e, make a new state after changing both to equal possibleE and add to statesList

        // // maybe use this? from https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
        // function combinations(str) {
        //     var fn = function(active, rest, a) {
        //         if (!active && !rest)
        //             return;
        //         if (!rest) {
        //             a.push(active);
        //         } else {
        //             fn(active + rest[0], rest.slice(1), a);
        //             fn(active, rest.slice(1), a);
        //         }
        //         return a;
        //     }
        //     return fn("", str, []);
        // }

        //get the permutations of items that are on element floor...

      }
    } else {
      this.successStates.push(currentState);
    }
  }
}

AOC.Day11.prototype.createStartAndGoalStates = function (instructionArray) {
  var startStateMap = new Map();
  var goalStateMap = new Map();
  // handle elevator
  startStateMap.set('E', 1);
  goalStateMap.set('E', 4);

  instructionArray.forEach(function (element) {
    // split instruction into a floor part and a contents part
    var instructionParts = element.split('contains');
    // deal with the floor part to get the floor number
    var floorOrdinal = instructionParts[0].split(' ')[1];
    var floorNum = this.numFromOrdinal(floorOrdinal);

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
        if (element.indexOf('generator') > 0) {
          //currentFloor.contents.push(element[0].toUpperCase() + 'G');
          startStateMap.set(element[0].toUpperCase() + 'G', floorNum);
          goalStateMap.set(element[0].toUpperCase() + 'G', 4);
        }

        if (element.indexOf('microchip') > 0) {
          //currentFloor.contents.push(element[0].toUpperCase() + 'M');
          startStateMap.set(element[0].toUpperCase() + 'M', floorNum);
          goalStateMap.set(element[0].toUpperCase() + 'M', 4);
        }
      }
    }
  }, this);
  this.statesList.push(new AOC.State(0, startStateMap));
  //this.goalStateMap = goalStateMap;
  this.goalState = new AOC.State(0, goalStateMap);
};

AOC.Day11.prototype.isFloorEmpty = function (floorOrdinal) {
  return (this.FloorMap.get(this.numFromOrdinal(floorOrdinal)).contents.length === 0);
};

AOC.Day11.prototype.getFloorContents = function (floorOrdinal) {
  return (this.FloorMap.get(this.numFromOrdinal(floorOrdinal)).contents.sort(function (a, b) { return b - a; }).toString());
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

