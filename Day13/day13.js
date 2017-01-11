"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day13 = function (x, y, favorite) {
  this.startingPoint = new AOC.Location(x, y);
  this.favoriteNumber = favorite;
  //this.destinationReached = false;
  this.pathTree;
};

AOC.Day13.prototype.calculateValidPaths = function (destX, destY) {
  // create root path node
  var root = new AOC.PathNode(this.startingPoint);

};

AOC.Day13.computeFewestSteps = function (x, y) {
  var fewestSteps = 0;
  if (this.startingPoint.x !== x && this.startingPoint.y !== y) {
    fewestSteps = Number.MAX_SAFE_INTEGER;
    this.validPaths.forEach(function (v,i,a) {
      if (v.length < fewestSteps) fewestSteps = v.length;
    });
  }
  return fewestSteps;
};

AOC.PathNode = function (loc) {
  this.location = loc;
  this.parent;
  this.children = []; //calculateOpenChildNodes(); // array of PathNodes
};

AOC.PathNode.prototype.inPathToRoot = function (loc) {
  if (this.parent === undefined)
    return false;
  else if (this.parent.eq(loc))
    return true;
  else
    return this.parent.inPathToRoot(loc);
};

AOC.PathNode.prototype.calculateOpenChildNodes = function () {
  var potentialChildren = [new AOC.Location(this.x, this.y - 1), new AOC.Location(this.x + 1, this.y), new AOC.Location(this.x, this.y + 1), new AOC.Location(this.x - 1, this.y)];
  potentialChildren.forEach(function (val, ind, arr) {
    if (val.x > 0 && val.y > 0 && val.isOpen()) {
      if (!this.inPathToRoot(val))
        this.children.push(val);
    }
  }, this);
};

AOC.Location = function (x, y) {
  this.x = x;
  this.y = y;
};

// AOC.Location = function (x, y, favorite) {
//   this.x = x;
//   this.y = y;
//   this.favoriteNumber = favorite;
// };

// AOC.Location.prototype.isOpen = function () {
//   var decimal1 = (this.x * this.x) + (3 * this.x) + (2 * this.x * this.y) + this.y + (this.y * this.y);
//   var decimal2 = decimal1 + this.favoriteNumber;
//   var binary = decimal2.toString(2);
//   var numberOfOnes = 0;
//   for (var index = 0; index < binary.length; index++) {
//     if (binary[index] === '1') numberOfOnes++;
//   }
//   if (numberOfOnes % 2 === 0)
//     return true;
//   else
//     return false;
// };

// AOC.Location.prototype.eq = function (location) {
//   return (this.x === location.x && this.y === location.y);
// };

// AOC.Day13.prototype.processInput = function (input) {
//   this.favoriteNumber = Number(input[0]);
// };

// AOC.Day13.prototype.getLocation = function (x, y) {
//   var decimal1 = (x * x) + (3 * x) + (2 * x * y) + y + (y * y);
//   var decimal2 = decimal1 + this.favoriteNumber;
//   var binary = decimal2.toString(2);
//   var numberOfOnes = 0;
//   for (var index = 0; index < binary.length; index++) {
//     if (binary[index] === '1') numberOfOnes++;
//   }
//   if (numberOfOnes % 2 === 0)
//     return '.';
//   else
//     return '#';
// };

// AOC.Day13.prototype.computeShortestPath = function (destX, destY) {
//   // calculate all valid paths to destination
//   // pick the length of the shortest one - 1

//   var destination = new AOC.Location(x, y);
//   var numberOfSteps = currentCount;
//   if (destination.eq(this.startingPoint)) {
//     this.destinationReached = true;
//     return numberOfSteps;
//   } else {
//     this.startingPoint.computeOpenNeighbors().forEach(function (neighbor) {
//       if (this.destinationReached !== true)
//         this.computeShortestPath(neighbor, numberOfSteps + 1);
//     }, this);
//   }
// };

module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day13Input.txt', { encoding: 'utf8' });
// var inputArray = rawInput.split('\r\n');

// // initialize the object
// var day13 = new AOC.Day13();
// day13.readInstructions(inputArray);
// console.log('The fewest number of steps to reach 31,39 is ' + day13.getNumberOfSteps(31,39));
