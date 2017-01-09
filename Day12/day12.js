"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day12 = function () {
  this.instructions = [];
  this.registers = new Map();
  this.currentInstruction = 0;
  this.initializeRegisters();
  //this.printRegisters();
};

AOC.Day12.prototype.initializeRegisters = function () {
  this.registers.set('a', 0);
  this.registers.set('b', 0);
  this.registers.set('c', 0);
  this.registers.set('d', 0);
};

AOC.Day12.prototype.printRegisters = function () {
  console.log(
    'a: ' + this.registers.get('a')
    + '\tb: ' + this.registers.get('b')
    + '\tc: ' + this.registers.get('c')
    + '\td: ' + this.registers.get('d'));
};

AOC.Day12.prototype.getRegister = function (registerId) {
  return this.registers.get(registerId);
};

AOC.Day12.prototype.getCurrentInstructionIndex = function () {
  return this.currentInstruction;
};

AOC.Day12.prototype.readInstructions = function (instructions) {
  for (var index = 0; index < instructions.length; index++) {
    this.instructions.push(instructions[index]);
  }
};

AOC.Day12.prototype.run = function () {
  while (this.currentInstruction < this.instructions.length) {
    this.runInstruction();
    // this.printRegisters();
    this.currentInstruction += 1;
  }
};

AOC.Day12.prototype.runInstruction = function () {
  var inst = this.instructions[this.currentInstruction];
  var instWords = inst.split(' ');
  switch (instWords[0]) {
    case 'cpy':
      this.cpy(instWords[1], instWords[2]);
      break;
    case 'inc':
      this.inc(instWords[1]);
      break;
    case 'dec':
      this.dec(instWords[1]);
      break;
    case 'jnz':
      this.jnz(instWords[1], instWords[2]);
      break;
  }
};

AOC.Day12.prototype.cpy = function (x, registerId) {
  if (!isNaN(Number(x)))
    this.registers.set(registerId, Number(x));
  else
    this.cpy(this.getRegister(x), registerId);
};

AOC.Day12.prototype.inc = function (registerId) {
  this.registers.set(registerId, this.registers.get(registerId) + 1);
};

AOC.Day12.prototype.dec = function (registerId) {
  this.registers.set(registerId, this.registers.get(registerId) - 1);
};

AOC.Day12.prototype.jnz = function (test, incrementString) {
  var increment = Number(incrementString);
  var testNum = !isNaN(Number(test)) ? Number(test) : this.registers.get(test);
  if (testNum > 0)
    this.currentInstruction = this.currentInstruction + increment - 1;
};

module.exports = AOC;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day12Input.txt', { encoding: 'utf8' });
var inputArray = rawInput.split('\r\n');

// initialize the object
var day1201 = new AOC.Day12();
day1201.readInstructions(inputArray);
day1201.run();
console.log('The value in register a is ' + day1201.getRegister('a'));

// part 2
var day1202 = new AOC.Day12();
day1202.registers.set('c',1);
day1202.readInstructions(inputArray);
day1202.run();
console.log('If c is initialized to 1, the value in register a is ' + day1202.getRegister('a'));

