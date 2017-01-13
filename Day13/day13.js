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
  var stepCount = 0;
  var destinationReached = false;
  // create root path node
  var root = new AOC.PathNode(this.startingPoint, stepCount);
  // if the root path node is not the destination, 
  this.pathTree.push(root);
  while (!pathTree.contains(destination))
  {
    // add pathTree 
  }



};

AOC.Day13.computeFewestSteps = function (x, y) {
  var fewestSteps = 0;
  if (this.startingPoint.x !== x && this.startingPoint.y !== y) {
    fewestSteps = Number.MAX_SAFE_INTEGER;
    this.validPaths.forEach(function (v, i, a) {
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
  this.distanceFromStart;
};

// AOC.Location = function (x, y, favorite) {
//   this.x = x;
//   this.y = y;
//   this.favoriteNumber = favorite;
// };

AOC.Day13.prototype.calculateBaseFormula = function (x, y) {
  return x * x + 3 * x + 2 * x * y + y + y * y;
};

AOC.Location.prototype.eq = function (location) {
  return (this.x === location.x && this.y === location.y);
};

AOC.Day13.prototype.processInput = function (input) {
  this.favoriteNumber = Number(input);
};

AOC.Day13.prototype.isOpen = function (x, y) {
  var baseFormula = this.calculateBaseFormula(x, y);
  var baseFormulaPlusFavoriteNumber = baseFormula + this.favoriteNumber;
  var binaryResult = baseFormulaPlusFavoriteNumber.toString(2);
  var numberOfOnes = 0;
  for (var index = 0; index < binaryResult.length; index++) {
    if (binaryResult[index] === '1') numberOfOnes++;
  }
  if (numberOfOnes % 2 === 0)
    return true;
  else
    return false;
};

AOC.Day13.prototype.isWall = function (x, y) {
  return !this.isOpen(x, y);
};

AOC.Day13.prototype.computeOpenNeighbors = function (x, y) {
  var possibleNeighbors = [new AOC.Location(x, y - 1), new AOC.Location(x + 1, y), new AOC.Location(x, y + 1), new AOC.Location(x - 1, y)];
  var openNeighbors = [];
  possibleNeighbors.forEach(function (val, ind, arr) {
    if (this.isOpen(val.x, val.y))
      openNeighbors.push(val);
  }, this);
  return openNeighbors;
};

// given the array of locations and their distances, see if the destination is among them
AOC.Day13.prototype.distanceToDestination = function (destX, destY) {
  var distance;
  var destination = new AOC.Location(destX, destY);
  this.locations.forEach(function (val, ind, arr) {
    if (val.eq(destination))
      distance = val.distanceFromStart;
  });
  return distance;
};

AOC.Day13.prototype.computeShortestPath = function (destX, destY, startX = this.startingPoint.x, startY = this.startingPoint.y) {
  var path = [];
  var stepCount = 0;
  if (destX === startX && destY === startY) {
    return stepCount;
  } else {
    var destinationReached = false;
    while (!destinationReached) {
      var possibleNextSteps = this.computeOpenNeighbors(startX, startY);
      var destinationLocation = new AOC.Location(destX, destY);
      for (var index = 0; index < possibleNextSteps.length; index++) {
        var location = possibleNextSteps[index];
        location.distanceFromStart = ++stepCount;
        if (location.eq(destinationLocation)){
          path.push(destinationLocation);
          destinationReached = true;
        }
      }
    }
    return stepCount;
  }

};

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

// // initialize the object
// var day13 = new AOC.Day13();
// day13.readInstructions(rawInput);
// console.log('The fewest number of steps to reach 31,39 is ' + day13.getNumberOfSteps(31,39));
