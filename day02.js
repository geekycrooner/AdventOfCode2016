var fs = require('fs');

var Day02 = function (number) {
  this.number = number || 5;
};

Day02.prototype.displayFancyKeypadCode = function (instructions) {
  var lines = instructions.split('\n');
  var code = '';
  for (var index = 0; index < lines.length; index++) {
    code += this.processFancyKeypadInstructions(lines[index]).toString();
  }
  return code;
};

Day02.prototype.displayStandardKeypadCode = function (instructions) {
  var lines = instructions.split('\n');
  var code = '';
  for (var index = 0; index < lines.length; index++) {
    code += this.processStandardKeypadInstructions(lines[index]).toString();
  }
  return code;
};

Day02.prototype.processFancyKeypadInstructions = function (instructions) {
  var index, instruction;
  var buttonPress = this.number;
  if (instructions) {
    for (index = 0; index < instructions.length; index++) {
      instruction = instructions[index];
      
      switch (instruction) {
        case 'D':
        if (buttonPress + 3 < 10) {
          buttonPress += 3;
        }
        break;
        case 'L':
        if (buttonPress % 3 !== 1) {
          buttonPress -= 1;
        }
        break;
        case 'R':
        if (buttonPress % 3 !== 0) {
          buttonPress += 1;
        }
        break;
        case 'U':
        if (buttonPress - 3 > 0) {
          buttonPress -= 3;
        }
        break;
      }
    }
  }
  this.number = buttonPress;
  return buttonPress;
};

Day02.prototype.processStandardKeypadInstructions = function (instructions) {
  var index, instruction;
  var buttonPress = this.number;
  if (instructions) {
    for (index = 0; index < instructions.length; index++) {
      instruction = instructions[index];
      
      switch (instruction) {
        case 'D':
        if (buttonPress + 3 < 10) {
          buttonPress += 3;
        }
        break;
        case 'L':
        if (buttonPress % 3 !== 1) {
          buttonPress -= 1;
        }
        break;
        case 'R':
        if (buttonPress % 3 !== 0) {
          buttonPress += 1;
        }
        break;
        case 'U':
        if (buttonPress - 3 > 0) {
          buttonPress -= 3;
        }
        break;
      }
    }
  }
  this.number = buttonPress;
  return buttonPress;
};

module.exports = Day02;

var Input = [];

// get input file as a string
var input = fs.readFileSync('.\\Day02Input.txt', {encoding: 'utf8'});
//var input = 'ULL\r\nRRDDD\r\nLURDL\r\nUUUUD';

// add input string onto Input array
//Input = input.split('\r\n');

var day02 = new Day02();

console.log('Part 1: What is the bathroom code? ' + day02.displayStandardKeypadCode(input));

console.log('Part 2: What is the fancy bathroom code? ' + day02.displayFancyKeypadCode(input));
