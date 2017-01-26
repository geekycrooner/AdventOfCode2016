"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day18 = function () {
  this.MAP = [];
};

AOC.Day18.prototype.processInput = function (input) {
  this.MAP.push(input);
};

AOC.Day18.prototype.isTrap = function (trapString) {
  return (trapString === '^');
};

AOC.Day18.prototype.calculateTile = function (left, center, right) {
  var isTrap = this.isTrap;
  if ((isTrap(left) && isTrap(center) && !isTrap(right)) ||
    (!isTrap(left) && isTrap(center) && isTrap(right)) ||
    (isTrap(left) && !isTrap(center) && !isTrap(right)) ||
    (!isTrap(left) && !isTrap(center) && isTrap(right)))
    return '^';
  else
    return '.';
};

AOC.Day18.prototype.calculateNextRow = function (row) {
  var tempRow = row.split('');
  // add right wall
  tempRow.push('.');
  tempRow.reverse();
  // add left wall
  tempRow.push('.');
  tempRow.reverse();
  var nextRow = tempRow.map((val, ind, arr) => {
    if (ind < arr.length - 2)
      return this.calculateTile(arr[ind], arr[ind + 1], arr[ind + 2]);
  }, this);
  return nextRow.join('');
};

AOC.Day18.prototype.buildMap = function (numRows) {
  var rowCount = 0;
  while (numRows > this.MAP.length) {
    this.MAP.push(this.calculateNextRow(this.MAP[rowCount]));
    rowCount++;
  }
};

AOC.Day18.prototype.printMap = function () {
  this.MAP.map((val) => { console.log(val); });
};

AOC.Day18.prototype.getSafeTileRowCount = function (row) {
  return row.replace(/\^/g, '').length;
};

AOC.Day18.prototype.getSafeTileCount = function () {
  var safeCount = 0, test;
  this.MAP.map((val, ind, arr) => {
    safeCount += this.getSafeTileRowCount(val);
  }, this);
  return safeCount;
};

module.exports = AOC;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day18Input.txt', { encoding: 'utf8' });

// initialize the object
var day18 = new AOC.Day18();
day18.processInput(rawInput);
day18.buildMap(40);
console.log(`There are ${day18.getSafeTileCount()} safe tiles in the first 40 rows.`);

// initialize the object
var day1802 = new AOC.Day18();
day1802.processInput(rawInput);
day1802.buildMap(400000);
console.log(`There are ${day1802.getSafeTileCount()} safe tiles in the first 400000 rows.`);