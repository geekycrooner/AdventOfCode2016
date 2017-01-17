"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day15 = function () {
  this.discs = [];
};

AOC.Day15.prototype.processInput = function (input) {
  input.forEach(function (val, ind, arr) {
    var words = val.split(' ');
    var discID = Number(words[1][1]);
    var disc = new AOC.Disc(discID);
    disc.positions = Number(words[3]);
    this.discs.push(disc);
  }, this);
};

AOC.Day15.prototype.getDisc = function (id) {
  return this.discs[id - 1];
};

AOC.Disc = function (id) {
   this.id = id;
   this.positions;
};

module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day15Input.txt', { encoding: 'utf8' });
// var inputArray = rawInput.split('\r\n');

// // initialize the object
// var day15 = new AOC.Day15();
// day15.processInput(inputArray);
// console.log('The first time you can press the button to get a capsule is ' + day15.getFirstTimeToPressButton());
