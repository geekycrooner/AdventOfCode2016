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

DAY08.Day08.prototype.displayScreen = function () {
  var screenAsString = '';
  for (var rowIndex = 0; rowIndex < this.screen.rows.length; rowIndex++) {
    for (var colIndex = 0; colIndex < this.screen.rows[rowIndex].length; colIndex++) {
      screenAsString += (this.screen.rows[rowIndex][colIndex] === 0) ? '. ' : '# ';
    }
    screenAsString += '\r\n';
  }
  console.log(screenAsString);
};

DAY08.Day08.prototype.getScreenAsString = function () {
  var screenAsString = '';
  for (var rowIndex = 0; rowIndex < this.screen.rows.length; rowIndex++) {
    for (var colIndex = 0; colIndex < this.screen.rows[rowIndex].length; colIndex++) {
      screenAsString += this.screen.rows[rowIndex][colIndex];
    }
  }
  return screenAsString;
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
  var type, direction, index, amount;
  if (words[0] === 'rect') {
    this.processRect(words[1]);
  } else if (words[0] === 'rotate') {
    type = words[1];
    direction = words[2].split('=')[0];
    index = words[2].split('=')[1];
    amount = words[4];
    this.processRotate(type, direction, index, amount);
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

DAY08.Screen.prototype.processRotate = function (type, direction, index, amount) {
  var colArray = [], rowArray = [];
  if (type === 'column') {
    // get column as array
    for (var rowIndex = 0; rowIndex < this.height; rowIndex++) {
      colArray.push(this.rows[rowIndex][index]);
    }
    // rotate it some number of times = to amount
    for (var i = 0; i < amount; i++) {
      colArray.reverse();
      colArray.push(colArray[0]);
      colArray.reverse();
      colArray.pop();
    }
    // assign values back to screen
    for (var rowIndex = 0; rowIndex < this.height; rowIndex++) {
      this.rows[rowIndex][index] = colArray[rowIndex];
    }
  } else if (type === 'row') {
    // get row as array
    for (var colIndex = 0; colIndex < this.width; colIndex++) {
      rowArray.push(this.rows[index][colIndex]);
    }
    // rotate it some number of times = to amount
    for (var i = 0; i < amount; i++) {
      rowArray.reverse();
      rowArray.push(rowArray[0]);
      rowArray.reverse();
      rowArray.pop();
    }
    // assign values back to screen
    for (var colIndex = 0; colIndex < this.width; colIndex++) {
      this.rows[index][colIndex] = rowArray[colIndex];
    }
  }
};

module.exports = DAY08;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day08Input.txt', { encoding: 'utf8' });

// split it into an input array
var inputArray = rawInput.split('\r\n');

// initialize the object
var screenWidth = 50;
var screenHeight = 6;
var day08 = new DAY08.Day08(screenWidth, screenHeight);

day08.processInput(inputArray);
day08.displayScreen();
console.log('The number of lit pixels is ' + day08.screen.getNumberOfLitPixels());
