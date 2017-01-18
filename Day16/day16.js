"use strict";

var fs = require('fs');
var crypto = require('crypto');

// global namespace
var AOC = AOC || {};

AOC.Day16 = function (input) {
  this.initialState = input;
};

AOC.Day16.prototype.getInitialState = function () {
  return this.initialState;
};

AOC.Day16.prototype.getB = function (a) {
  var b = [];
  for (var index = 0; index < a.length; index++) {
    var bit = a[index];
    if (bit === '0')
      b.push('1');
    else if (bit === '1')
      b.push('0');
  };
  return b.reverse().join('');
};

AOC.Day16.prototype.getResultingData = function (a) {
  return a + '0' + this.getB(a);
};

AOC.Day16.prototype.getChecksum = function (data) {
  var dataArray = data.split('');
  var checksumArray = [];
  // get pairs
  // for each pair, get the negation of the xor
  for (var index = 0; index < dataArray.length; index += 2) {
    if (dataArray[index] === dataArray[index + 1])
      checksumArray.push('1');
    else
      checksumArray.push('0');
  }
  // if the length is even, perform the same steps on the result
  if (checksumArray.length % 2 === 0)
    return this.getChecksum(checksumArray.join(''));
  else
    return checksumArray.join('');
};

AOC.Day16.prototype.fillDisk = function (diskSize) {
  var result = this.initialState;
  while (result.length < diskSize) {
    result = this.getResultingData(result);
  } 
  return result.substr(0, diskSize);
};

module.exports = AOC;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day16Input.txt', { encoding: 'utf8' });

// initialize the object
var day16 = new AOC.Day16(rawInput);
var diskSize = 272;
console.log(`Given the initial state ${day16.initialState}, and a disk of size ${diskSize}, the correct checksum is ${day16.getChecksum(day16.fillDisk(272))}`);
diskSize = 35651584;
console.log(`Given the initial state ${day16.initialState}, and a disk of size ${diskSize}, the correct checksum is ${day16.getChecksum(day16.fillDisk(35651584))}`);
