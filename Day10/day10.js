"use strict";

var fs = require('fs');

// global namespace
var AOC = AOC || {};

AOC.Day10 = function () {
  this.BotMap = new Map();
  this.OutputMap = new Map();
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
      var givesLowTo = [currentInstruction[5], Number(currentInstruction[6])];
      var givesHightTo = [currentInstruction[10], Number(currentInstruction[11])];
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
      currentBot.chipCache.push(value);
    }
  }
};

AOC.Bot = function (id) {
  this.id = id;
  this.givesLowTo = [];
  this.givesHighTo = [];
  this.chips = [];
  this.chipCache = [];
};

AOC.Bot.prototype.getChipsAsString = function () {
  return this.chips.sort().toString();
};

AOC.Day10.prototype.getOutputBinsAsString = function () {
  var output = [];
  var count = 0;
  for (var [key, value] of this.OutputMap.entries()) {
    count += 1;
  }
  for (var index = 0; index < count; index++) {
    output.push(this.OutputMap.get(index));
  }
  return output.toString();
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
      var lowDestination, highDestination;
      if (sourceBot.hasTwoChips()) {
        if (sourceBot.givesHighTo[0] === 'output') {
          this.OutputMap.set(sourceBot.givesHighTo[1], sourceBot.chips.sort(function (a, b) { return a - b; }).pop());
        } else if (sourceBot.givesHighTo[0] === 'bot') {
          var chipToPush = sourceBot.chips.sort(function (a, b) { return a - b; }).pop();
          this.getBot(sourceBot.givesHighTo[1]).chips.push(chipToPush);
          this.getBot(sourceBot.givesHighTo[1]).chipCache.push(chipToPush);
        };

        if (sourceBot.givesLowTo[0] === 'output') {
          this.OutputMap.set(sourceBot.givesLowTo[1], sourceBot.chips.pop());
        } else if (sourceBot.givesLowTo[0] === 'bot') {
          var chipToPush = sourceBot.chips.pop();
          this.getBot(sourceBot.givesLowTo[1]).chips.push(chipToPush);
          this.getBot(sourceBot.givesLowTo[1]).chipCache.push(chipToPush);
        }
      }
    }
  }
}

AOC.Day10.prototype.getBotIDThatCompared = function (chip1, chip2) {
  var sortedChipsToCompare = [];
  var compareBotId;
  sortedChipsToCompare.push(chip1);
  sortedChipsToCompare.push(chip2);
  sortedChipsToCompare.sort(function (a, b) { return a-b; });
  this.BotMap.forEach(function(val,key,map) {
    var sortedCache = val.chipCache.sort(function(a, b){ return a-b; });
    if (sortedCache.toString() === sortedChipsToCompare.toString()) compareBotId = key;
  });
  return compareBotId;
};

AOC.Day10.prototype.multiplyOutputs = function (outputBinIdArray) {
  var result=1;
  for (var index = 0; index < outputBinIdArray.length; index++) {
    result *= this.OutputMap.get(outputBinIdArray[index]);
  }
  return result;
};

module.exports = AOC;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day10Input.txt', { encoding: 'utf8' });
var inputArray = rawInput.split('\r\n');

// initialize the object
var day10 = new AOC.Day10();
day10.readInstructionsFromInputArray(inputArray);
day10.processInputInstructions();
day10.processBotInstructions();
console.log('The bot responsible for comparing value-61 microchips with value-17 microchips is ' + day10.getBotIDThatCompared(61,17));
console.log('The output values are ' + day10.getOutputBinsAsString());
console.log('The value of outputs 0, 1, and 2 multiplied together is ' + day10.multiplyOutputs([0,1,2]));
