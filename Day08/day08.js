"use strict";

var fs = require('fs');

// global namespace
var DAY08 = DAY08 || {};

DAY08.Day08 = function (w, h) {
  this.screen = new DAY08.Screen(w, h);
};

DAY08.Day08.prototype.processInput = function (inputArray) {
  // read input word by word, line by line
  for (var index = 0; index < inputArray.length; index++) {
    this.screen.processCommand(inputArray[index]);
  }
};

DAY08.Screen = function (w, h) {
  this.width = w;
  this.height = h;
  this.rows = new Array(h);
  for (var rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
    this.rows[rowIndex] = new Array(w);
    for (var colIndex = 0; colIndex < this.rows[rowIndex].length; colIndex++) {
      this.rows[rowIndex][colIndex] = 0;
    }
  }
}

DAY08.Screen.prototype.getNumberOfLitPixels = function () {
  var count = 0;
  for (var rowIndex = 0; rowIndex < this.height; rowIndex++) {
    for (var colIndex = 0; colIndex < this.width; colIndex++) {
      if (this.rows[rowIndex][colIndex] === 1)
        count++;
    }
  }
  return count;
};

DAY08.Screen.prototype.processCommand = function (cmd) {
  // check first word of command
  var words = cmd.split(' ');
  if (words[0] === 'rect') {
    this.processRect(words[1]);
  }
};

DAY08.Screen.prototype.processRect = function (dim) {
  //split width and height
  var dimensions = dim.split('x');
  var w = Number(dimensions[0]);
  var h = Number(dimensions[1]);
  for (var rowIndex = 0; rowIndex < h; rowIndex++) {
    for (var colIndex = 0; colIndex < w; colIndex++) {
      this.rows[rowIndex][colIndex] = 1;
    }
  }
};

module.exports = DAY08;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day08Input.txt', { encoding: 'utf8' });

// // split it into an input array
// var inputArray = rawInput.split('\r\n');

// // initialize the object
// var day08 = new DAY08.Day08();
// day08.processInput(inputArray);

// console.log('The number of IPs supporting TLS is ' + day07.getCountOfTLSSupportingIPs());
// console.log('The number of IPs supporting SSL is ' + day07.getCountOfSSLSupportingIPs());
