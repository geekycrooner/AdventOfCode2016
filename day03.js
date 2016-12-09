var fs = require('fs');

var Day03 = function () { };

Day03.prototype.isPossibleTriangle = function (sides) {//(sidesAsString) {
    var possible;

    // var input = sidesAsString;
    // var possible;
    // var sides = [];
    // //var spaces = /\s/;
    // var pattern = /(\w+)\s+(\w+)\s+(\w+)/;
    // //input = input.replace(/\s*/,' ');
    // input = input.trim().replace(pattern, "$1,$2,$3");

    // sides = input.split(',');
    // //convert strings as numbers to numbers
    // for (var index = 0; index < sides.length; index++) {
    //     sides[index] = parseInt(sides[index]);
    // };

    if (sides[0] + sides[1] > sides[2]) {
        if (sides[0] + sides[2] > sides[1]) {
            if (sides[1] + sides[2] > sides[0]) {
                possible = true;
            } else {
                possible = false;
            }
        } else {
            possible = false;
        }
    } else {
        possible = false;
    }
    return possible;
};

Day03.prototype.processInput = function (inputString) {
    // given a line of input text, return an array of sides
    var input = inputString;
    var sides = [];
    //var spaces = /\s/;
    var pattern = /(\w+)\s+(\w+)\s+(\w+)/;
    //input = input.replace(/\s*/,' ');
    input = input.trim().replace(pattern, "$1,$2,$3");

    sides = input.split(',');
    //convert strings as numbers to numbers
    for (var index = 0; index < sides.length; index++) {
        sides[index] = parseInt(sides[index]);
    };
  return sides;
};

Day03.prototype.getPossibleTriangleCount = function (input) {
    var possibleTriangleCount = 0;
    var inputArray = input.split('\n');
    var sideArray;
    for (var index = 0; index < inputArray.length; index++) {
        sideArray = this.processInput(inputArray[index]);
        if (this.isPossibleTriangle(sideArray))
            possibleTriangleCount++;
    }
    return possibleTriangleCount;
};

module.exports = Day03;

var day03 = new Day03();

console.log(day03.isPossibleTriangle("  810  679   10"));