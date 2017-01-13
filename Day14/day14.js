"use strict";

var fs = require('fs');
var crypto = require('crypto');

// global namespace
var AOC = AOC || {};

AOC.Day14 = function (input) {
  this.preArrangedSalt = input;
};

AOC.Day14.prototype.getMD5Hash = function (input = this.preArrangedSalt) {
  var hash = crypto.createHash('md5');
  hash.update(input);
  return hash.digest('hex').toLowerCase();
};

AOC.Day14.prototype.getKeyStretchedMD5Hash = function (input) {
  var currentHash = this.getMD5Hash(input);
  var hashCount = 1;
  while (hashCount < 2017) {
    currentHash = this.getMD5Hash(currentHash);
    hashCount++;
  }
  return currentHash;
};


AOC.Day14.prototype.hasTriple = function (input) {
  var tripleRegEx = /(.)\1\1/;
  return tripleRegEx.test(input);
};

AOC.Day14.prototype.getFirstTriple = function (input) {
  var tripleRegEx = /(.)\1\1/;
  return tripleRegEx.exec(input)[0];
};

AOC.Day14.prototype.hasQuintuple = function (char, input) {
  var quintuple = char.repeat(5);
  var quintupleRegEx = new RegExp(quintuple);
  // return (quintupleRegEx.exec(input)[0] === quintuple);
  return quintupleRegEx.test(input);
};

module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day14Input.txt', { encoding: 'utf8' });

// // initialize the object
// var day14 = new AOC.Day14(rawInput);

// var keys = [];
// var index = 0;
// while (keys.length < 64) {
//   if (day14.hasTriple(day14.getMD5Hash(day14.preArrangedSalt + index))) {
//     var tripleDigit = day14.getFirstTriple(day14.getMD5Hash(day14.preArrangedSalt + index))[1];
//     for (var ind = 1; ind < 1001; ind++) {
//       if (day14.hasQuintuple(tripleDigit, day14.getMD5Hash(day14.preArrangedSalt + (index + ind)))) {
//         keys.push(index);
//         break;
//       }
//     }
//   }
//   index++;
// }


// console.log('The index that produces my 64th one-time pad key is ' + keys[63]);

// get input file as a string
var rawInput = fs.readFileSync('.\\Day14Input.txt', { encoding: 'utf8' });

// initialize the object
var day14 = new AOC.Day14(rawInput);

var keys = [];
var index = 0;
while (keys.length < 64) {
  console.log('Index: ' + index + '\tKeys: ' + keys.length);
  if (day14.hasTriple(day14.getKeyStretchedMD5Hash(day14.preArrangedSalt + index))) {
    var tripleDigit = day14.getFirstTriple(day14.getKeyStretchedMD5Hash(day14.preArrangedSalt + index))[1];
    for (var ind = 1; ind < 1001; ind++) {
      if (day14.hasQuintuple(tripleDigit, day14.getKeyStretchedMD5Hash(day14.preArrangedSalt + (index + ind)))) {
        keys.push(index);
        break;
      }
    }
  }
  index++;
}


console.log('The index that produces my 64th one-time pad key is ' + keys[63]);

// This takes forever to run!!!! I got to Index 611 with NO keys found... need to improve efficiency...
