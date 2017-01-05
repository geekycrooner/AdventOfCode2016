"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day09 = function () {
};

AOC.Day09.prototype.decompressFile = function (compressedInputFile) {
  var decompressedFile = '';
  for (var index = 0; index < compressedInputFile.length; index++) {
    var letter = compressedInputFile[index];
    if (letter !== '(') {
      decompressedFile += letter;
    } else {
      //read to the next closing parenthesis to get the tag
      var closingTagIndex = compressedInputFile.indexOf(')', index);
      var tag = compressedInputFile.substring(index + 1, closingTagIndex);
      // process the tag
      var tagComponents = tag.split('x');
      var numCharsToRepeat = Number(tagComponents[0]);
      var numRepetitions = Number(tagComponents[1]);
      var charsToRepeat = compressedInputFile.substr(closingTagIndex + 1, numCharsToRepeat);
      decompressedFile += charsToRepeat.repeat(numRepetitions);
      // continue decompressing
      index = closingTagIndex + numCharsToRepeat;
    }
  }
  return decompressedFile;
};

AOC.Day09.prototype.getDecompressedFileLength = function (compressedInputFile) {
  return this.decompressFile(compressedInputFile).length;
};

AOC.Day09.prototype.decompressFileRecursive = function (compressedInputFile) {
  var decompressedFile = '';
  for (var index = 0; index < compressedInputFile.length; index++) {
    var letter = compressedInputFile[index];
    if (letter !== '(') {
      decompressedFile += letter;
    } else {
      //read to the next closing parenthesis to get the tag
      var closingTagIndex = compressedInputFile.indexOf(')', index);
      var tag = compressedInputFile.substring(index + 1, closingTagIndex);
      // process the tag
      var tagComponents = tag.split('x');
      var numCharsToRepeat = Number(tagComponents[0]);
      var numRepetitions = Number(tagComponents[1]);
      var charsToRepeat = compressedInputFile.substr(closingTagIndex + 1, numCharsToRepeat);
      // process charsToRepeat
      decompressedFile += this.decompressFileRecursive(charsToRepeat.repeat(numRepetitions));
      // continue decompressing
      index = closingTagIndex + numCharsToRepeat;
    }
  }

  return decompressedFile;
};

AOC.Day09.prototype.getDecompressedFileRecursiveLength = function (compressedInputFile) {
  var decompressedFileLength = 0;
  for (var index = 0; index < compressedInputFile.length; index++) {
    var letter = compressedInputFile[index];
    if (letter !== '(') {
      decompressedFileLength += 1;
    } else {
      //read to the next closing parenthesis to get the tag
      var closingTagIndex = compressedInputFile.indexOf(')', index);
      var tag = compressedInputFile.substring(index + 1, closingTagIndex);
      // process the tag
      var tagComponents = tag.split('x');
      var numCharsToRepeat = Number(tagComponents[0]);
      var numRepetitions = Number(tagComponents[1]);
      var charsToRepeat = compressedInputFile.substr(closingTagIndex + 1, numCharsToRepeat);
      // process charsToRepeat
      decompressedFileLength += this.getDecompressedFileRecursiveLength(charsToRepeat.repeat(numRepetitions));
      // continue decompressing
      index = closingTagIndex + numCharsToRepeat;
    }
  }

  return decompressedFileLength;
};

module.exports = AOC;

// get input file as a string
var compressedInputFile = fs.readFileSync('.\\Day09Input.txt', { encoding: 'utf8' });

// initialize the object
var day09 = new AOC.Day09();

console.log('The decompressed length of the file is ' + day09.getDecompressedFileLength(compressedInputFile));
console.log('The recursively decompressed length of the file is ' + day09.getDecompressedFileRecursiveLength(compressedInputFile));