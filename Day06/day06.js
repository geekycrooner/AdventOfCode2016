"use strict";

var fs = require('fs');

// global namespace
var DAY06 = DAY06 || {};

DAY06.Day06 = function () {
  this.mapArray = [];
};

// for each row of input
// look up the letter into a key-value data structure (one per position), adding one to the appropriate value
DAY06.Day06.prototype.processInput = function (input) {    
  // set up a map for each column of input
    for (var index = 0; index < 8; index++) {
      this.mapArray.push(new Map());
    }
    // process input into maps
    for (var rowIndex = 0; rowIndex < input.length; rowIndex++) {
      var row = input[rowIndex];
      for (var colIndex = 0; colIndex < row.length; colIndex++) {
        var letter = row[colIndex];
        if (!this.mapArray[colIndex].has(letter)) {
          this.mapArray[colIndex].set(letter, 1);
        } else {
          this.mapArray[colIndex].set(letter, this.mapArray[colIndex].get(letter) + 1);
        }
      }
    }
}

DAY06.Day06.prototype.getMostCommonEntries = function () {
  var mostCommonEntries = '';
  for (var index = 0; index < this.mapArray.length; index++) {
    var map = this.mapArray[index];
    var maxEntry = '';
    map.forEach(function (value, key, map) {
      if (maxEntry === '') { 
        maxEntry = key; 
      } else {
        if (value > map.get(maxEntry))
        { 
          maxEntry = key;
        }
      }
    });
    mostCommonEntries += maxEntry;
  }
  return mostCommonEntries;
}

DAY06.Day06.prototype.getLeastCommonEntries = function () {
  var leastCommonEntries = '';
  for (var index = 0; index < this.mapArray.length; index++) {
    var map = this.mapArray[index];
    var minEntry = '';
    map.forEach(function (value, key, map) {
      if (minEntry === '') { 
        minEntry = key; 
      } else {
        if (value < map.get(minEntry))
        { 
          minEntry = key;
        }
      }
    });
    leastCommonEntries += minEntry;
  }
  return leastCommonEntries;
}

module.exports = DAY06;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day06Input.txt', { encoding: 'utf8' });

// split it into an input array
var inputArray = rawInput.split('\r\n');

// initialize the object
var day06 = new DAY06.Day06();
day06.processInput(inputArray);

console.log('The error corrected version of the message is ' + day06.getMostCommonEntries());
console.log('The original message is ' + day06.getLeastCommonEntries());