var fs = require('fs');

var Day04 = function () { 
    this.sectorIDSum = 0;
};


module.exports = Day04;

var day04 = new Day04();
// var Input = [];
// get input file as a string
var input = fs.readFileSync('.\\Day04Input.txt', {encoding: 'utf8'});
var inputArray = input.split('\n');

// add input string onto Input array
// Input = input.split(', ');

console.log('Sum of the Sector IDs of the real rooms: ' + day04.sectorIDSum);
