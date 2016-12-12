var fs = require('fs');

var Day03 = function () { };

Day03.prototype.isPossibleTriangle = function (sides) {
    var possible;
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

Day03.prototype.getArrayOfSides = function (inputString) {
    // given a line of input text, return an array of sides
    var input = inputString;
    var sides = [];
    var pattern = /(\w+)\s+(\w+)\s+(\w+)/;
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
        sideArray = this.getArrayOfSides(inputArray[index]);
        if (this.isPossibleTriangle(sideArray))
            possibleTriangleCount++;
    }
    return possibleTriangleCount;
};

Day03.prototype.getColumnarTriangleCount = function (input) {
    var possibleTriangleCount = 0;
    for (var index = 0; index < input.length; index++) {
        if (this.isPossibleTriangle(input[index]))
            possibleTriangleCount++;
    }
    return possibleTriangleCount;
};


Day03.prototype.convertToColumnarInput = function (inputInRows) {
    var firstColumnArray = [], secondColumnArray = [], thirdColumnArray = [];
    var triangleArray = [];
    for (var triCount = 0; triCount < inputInRows.length; triCount += 3) {
      for (var index = triCount; index < triCount + 3; index++) {
        var row = inputInRows[index];
        var rowArray = this.getArrayOfSides(row);
          firstColumnArray.push(rowArray[0]);
          secondColumnArray.push(rowArray[1]);
          thirdColumnArray.push(rowArray[2]);  
        }
        triangleArray.push(firstColumnArray);
        triangleArray.push(secondColumnArray);
        triangleArray.push(thirdColumnArray);
        firstColumnArray = [];
        secondColumnArray = [];
        thirdColumnArray = [];  
    }
    return triangleArray;
}

module.exports = Day03;

var day03 = new Day03();
// var Input = [];
// get input file as a string
var input = fs.readFileSync('.\\Day03Input.txt', {encoding: 'utf8'});
var inputArray = input.split('\n');

// add input string onto Input array
// Input = input.split(', ');

// console.log(day03.isPossibleTriangle("  810  679   10"));

console.log('With input in rows, number of possible triangles: ' + day03.getPossibleTriangleCount(input));

console.log('With input in columns, number of possible triangles: ' + day03.getColumnarTriangleCount(day03.convertToColumnarInput(inputArray)));