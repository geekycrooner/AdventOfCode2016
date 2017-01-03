var fs = require('fs');

var Button = function (value) {
  this.value = value;
  this.u = this;
  this.d = this;
  this.l = this;
  this.r = this;
};

var Keypad = function (startingButton, keypadType) {
  var hexNum, startingIndex;
  hexNum = parseInt(startingButton, 16);
  if (isNaN(hexNum)) hexNum = 5;
  startingIndex = hexNum - 1;
  this.keypadType = keypadType || 'standard';
  this.currentButtonIndex = startingIndex;
  this.buttons = [];
  this.createKeypad(this.keypadType);
};

Keypad.prototype.createKeypad = function (keypadType) {
  var btn;
  var standardButtonValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var fancyButtonValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D'];
  if (keypadType === 'fancy') {
    for (var index = 0; index < fancyButtonValues.length; index++) {
      var element = fancyButtonValues[index];
      this.buttons.push(new Button(element));
    }
    this.buttons[0].d = this.buttons[2];  //    1     
    this.buttons[1].r = this.buttons[2];  //  2 3 4   
    this.buttons[1].d = this.buttons[5];  //5 6 7 8 9 
    this.buttons[2].u = this.buttons[0];  //  A B C   
    this.buttons[2].r = this.buttons[3];  //    D    
    this.buttons[2].d = this.buttons[6];
    this.buttons[2].l = this.buttons[1];
    this.buttons[3].d = this.buttons[7];
    this.buttons[3].l = this.buttons[2];
    this.buttons[4].r = this.buttons[5];
    this.buttons[5].u = this.buttons[1];
    this.buttons[5].r = this.buttons[6];
    this.buttons[5].d = this.buttons[9];
    this.buttons[5].l = this.buttons[4];
    this.buttons[6].u = this.buttons[2];
    this.buttons[6].r = this.buttons[7];
    this.buttons[6].d = this.buttons[10];
    this.buttons[6].l = this.buttons[5];
    this.buttons[7].u = this.buttons[3];
    this.buttons[7].r = this.buttons[8];
    this.buttons[7].d = this.buttons[11];
    this.buttons[7].l = this.buttons[6];
    this.buttons[8].l = this.buttons[7];
    this.buttons[9].u = this.buttons[5];
    this.buttons[9].r = this.buttons[10];
    this.buttons[10].u = this.buttons[6];
    this.buttons[10].r = this.buttons[11];
    this.buttons[10].d = this.buttons[12];
    this.buttons[10].l = this.buttons[9];
    this.buttons[11].u = this.buttons[7];
    this.buttons[11].l = this.buttons[10];
    this.buttons[12].u = this.buttons[10];
  } else {
    for (var index = 0; index < standardButtonValues.length; index++) {
      var element = standardButtonValues[index];
      this.buttons.push(new Button(element));
    }
    this.buttons[0].r = this.buttons[1];  //  1 2 3    
    this.buttons[0].d = this.buttons[3];  //  4 5 6  
    this.buttons[1].r = this.buttons[2];  //  7 8 9   
    this.buttons[1].d = this.buttons[4];
    this.buttons[1].l = this.buttons[0];
    this.buttons[2].d = this.buttons[5];
    this.buttons[2].l = this.buttons[1];
    this.buttons[3].u = this.buttons[0];
    this.buttons[3].r = this.buttons[4];
    this.buttons[3].d = this.buttons[6];
    this.buttons[4].u = this.buttons[1];
    this.buttons[4].r = this.buttons[5];
    this.buttons[4].d = this.buttons[7];
    this.buttons[4].l = this.buttons[3];
    this.buttons[5].u = this.buttons[2];
    this.buttons[5].d = this.buttons[8];
    this.buttons[5].l = this.buttons[4];
    this.buttons[6].u = this.buttons[3];
    this.buttons[6].r = this.buttons[7];
    this.buttons[7].u = this.buttons[4];
    this.buttons[7].r = this.buttons[8];
    this.buttons[7].l = this.buttons[6];
    this.buttons[8].u = this.buttons[5];
    this.buttons[8].l = this.buttons[7];
  };
};

Keypad.prototype.displayCode = function (instructionsString) {
  var instructionsArray, code = '';
  if (instructionsString) {
    instructionsArray = instructionsString.split('\n');
    for (var index = 0; index < instructionsArray.length; index++) {
      var instructions = instructionsArray[index];
      code += this.processInstructions(instructions);
    }
  }
  return code;
};

Keypad.prototype.processInstructions = function (instructions) {
  var currentButton = this.buttons[this.currentButtonIndex];
  if (instructions) {
    for (var index = 0; index < instructions.length; index++) {
      var instruction = instructions[index];
      switch (instruction) {
        case 'U':
          currentButton = currentButton.u;
          break;
        case 'R':
          currentButton = currentButton.r;
          break;
        case 'D':
          currentButton = currentButton.d;
          break;
        case 'L':
          currentButton = currentButton.l;
          break;
      }
    }
    this.currentButtonIndex = this.buttons.indexOf(currentButton);
  }
  return this.buttons[this.currentButtonIndex].value;
};

var Day02 = function (startingButton, keypadType) {
  this.keypad = new Keypad(startingButton + '', keypadType);
};

module.exports = Day02;

var Input = [];

// get input file as a string
var input = fs.readFileSync('.\\Day02Input.txt', { encoding: 'utf8' });
//var input = 'ULL\r\nRRDDD\r\nLURDL\r\nUUUUD';

// add input string onto Input array
//Input = input.split('\r\n');

var day02Standard = new Day02();
var day02Fancy = new Day02(5, 'fancy');

console.log('Part 1: What is the standard bathroom code? ' + day02Standard.keypad.displayCode(input));

console.log('Part 2: What is the fancy bathroom code? ' + day02Fancy.keypad.displayCode(input));
