"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day20 = function (ip) {
  this.maxValidIP = ip;
  this.ranges = [];
  this.openIPs = [];
};

AOC.Range = function (start, end) {
  this.start = start;
  this.end = end;
};

AOC.Day20.prototype.processInput = function (input) {
  input.forEach(function (val, ind, arr) {
    var [start, end] = val.split('-');
    var newRange = new AOC.Range(start, end);
    // if there are no ranges, just add it and be done.
  if (this.ranges.length === 0) 
    this.ranges.push(newRange);
  else
// test each one of the non-overlapping ranges in this.ranges for overlap
    this.ranges.forEach((val, ind, arr) => {
      if (newRange.start >= val.start && newRange.start <= val.end)  {// start is in the range
        if (newRage.end > val.end) { // end is outside the range
        //do nothing
        }
    }
    });
// if start or end is inside a range, combine the ranges and then test the combined range with the remaining ranges

    this.ranges.push(new AOC.Range(start, end));
  }, this);
};

AOC.Day20.prototype.getLowestNonBlockedIP = function () {
  for (var ip = 0; ip <= this.maxValidIP; ip++) {
    var blocked = false;
    // probe each range... if it's not in the range, do nothing, if it is in the range turn blocked to true.
    this.ranges.forEach((val, ind, arr) => {
      if (ip >= val.start && ip <= val.end) 
        blocked = true;   
    });
    if (!blocked) this.openIPs.push(ip);
  }
  return this.openIPs.sort()[0];
};

module.exports = AOC;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day20Input.txt', { encoding: 'utf8' });
var inputArray = rawInput.split('\r\n');

// initialize the object
var day20 = new AOC.Day20(4294967295);
day20.processInput(inputArray);
console.log('The lowest-valued IP that is not blocked is ' + day20.getLowestNonBlockedIP());