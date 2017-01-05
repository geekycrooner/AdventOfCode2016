"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day10 = function () {
  this.BotMap = new Map();
  this.OutBinArray = [];
  this.InstructionArray = [];
};

AOC.Day10.prototype.readInstructionsFromInputArray = function (input) {
  for (var index = 0; index < input.length; index++) {
    this.InstructionArray.push(input[index]);
  }
};

AOC.Day10.prototype.getBot = function (id) {
  return this.BotMap.get(id);
};



AOC.Day10.prototype.processInputInstructions = function () {
  for (var index = 0; index < this.InstructionArray.length; index++) {
    var currentInstruction = this.InstructionArray[index].split(' ');
    var type = currentInstruction[0];
    // if it starts with bot...
    if (type === 'bot') {
      var botID = Number(currentInstruction[1]);
      var givesLowTo = Number(currentInstruction[6]);
      var givesHightTo = Number(currentInstruction[11]);
      // find or create the Bot
      var currentBot = this.getBot(botID);
      if (!currentBot) {
        this.BotMap.set(botID, new AOC.Bot(botID));
        currentBot = this.getBot(botID);
      }
      // set low and high destinations
      currentBot.givesLowTo = givesLowTo;
      currentBot.givesHighTo = givesHightTo;
    } else if (type === 'value') {
      var value = Number(currentInstruction[1]);
      var toBot = Number(currentInstruction[5]);
      // find or create the Bot
      var currentBot = this.getBot(toBot);
      if (!currentBot) {
        this.BotMap.set(toBot, new AOC.Bot(toBot));
        currentBot = this.getBot(toBot);
      }
      currentBot.chips.push(value);
    }
  }
};

AOC.Bot = function (id) {
  this.id = id;
  this.givesLowTo;
  this.givesHighTo;
  this.chips = [];
};

AOC.Bot.prototype.getChipsAsString = function () {
  return this.chips.sort().toString();
};

AOC.Bot.prototype.hasTwoChips = function () {
  return (this.chips.length === 2);
};

AOC.Day10.prototype.getCountOfBotsWithTwoChips = function () {
  var count = 0;
  for (var [key, value] of this.BotMap.entries()) {
    if (this.getBot(key).hasTwoChips())
      count += 1;
  }
  return count;
};

AOC.Day10.prototype.processBotInstructions = function () {
  while (this.getCountOfBotsWithTwoChips() > 0) {
    for (var [key, value] of this.BotMap.entries()) {
      var sourceBot = this.getBot(key);
      var lowBot, highBot;
      if (sourceBot.hasTwoChips()) {
        var lowBot = this.getBot(sourceBot.givesLowTo);
        var highBot = this.getBot(sourceBot.givesHighTo);
        highBot.chips.push(sourceBot.chips.sort(function (a, b) { return a - b; }).pop());
        lowBot.chips.push(sourceBot.chips.pop());
      }
    }
  }
}
module.exports = AOC;

// // get input file as a string
// var rawInput = fs.readFileSync('.\\Day10Input.txt', { encoding: 'utf8' });
// var inputArray = rawInput.split('\r\n');

// // initialize the object
// var day10 = new AOC.Day10();
// day10.readInstructionsFromInputArray(inputArray);

// console.log('The bot responsible for comparing value-61 microchips with value-17 microchips is ' + day10.getBotFromCompares(61,17));
