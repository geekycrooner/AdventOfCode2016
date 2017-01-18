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
    disc.startPosition = Number(words[11].replace('.', ''));
    this.discs.push(disc);
  }, this);
};

AOC.Day15.prototype.getDisc = function (id) {
  return this.discs[id - 1];
};

AOC.Day15.prototype.getDiscPositionAtTime = function (discId, time) {
  var disc = this.getDisc(discId);
  if (time === 0)
    return disc.startPosition;
  else
    return (disc.startPosition + disc.getDiscTimeOffset(time) + time) % disc.positions;
};

AOC.Day15.prototype.isDiscSlotOpen = function (discId, time) {
  return this.getDiscPositionAtTime(discId, time) === 0;
};

AOC.Day15.prototype.getFirstTimeAllSlotsOpen = function () {
  var allSlotsOpen = false;
  var startTime = -1;
  while (!allSlotsOpen) {
    startTime++;
    allSlotsOpen = true;
    this.discs.forEach(function (disc, index, arr) {
      allSlotsOpen = allSlotsOpen && disc.isSlotOpenAt(disc.getTimeAtDiscGivenStartTime(startTime));
    }, this);
  }
  return startTime;
};

AOC.Disc = function (id) {
  this.id = Number(id);
  this.positions;
  this.startPosition;
};

AOC.Disc.prototype.getDiscTimeOffset = function () {
  return this.id;
};

AOC.Disc.prototype.isSlotOpenAt = function (time) {
  return (this.startPosition + time) % this.positions === 0;
};

AOC.Disc.prototype.getTimeAtDiscGivenStartTime = function (startTime) {
  return startTime + this.getDiscTimeOffset();
};

module.exports = AOC;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day15Input.txt', { encoding: 'utf8' });
var inputArray = rawInput.split('\r\n');

// initialize the object
var day15 = new AOC.Day15();
day15.processInput(inputArray);
console.log('The first time you can press the button to get a capsule is ' + day15.getFirstTimeAllSlotsOpen());

// initialize the object
var day1502 = new AOC.Day15();
inputArray.push('Disc #7 has 11 positions; at time=0, it is at position 0.');
day1502.processInput(inputArray);

console.log('The first time you can press the button to get a capsule is ' + day1502.getFirstTimeAllSlotsOpen());
