var fs = require('fs');

// global namespace
var DAY04 = DAY04 || {};

DAY04.Day04 = function (input) {
  this.roomList = [];
  this.sumOfRealSectorIDs = 0;
  if (input && (Array.prototype).isPrototypeOf(input)) {
    for (var index = 0; index < input.length; index++) {
      var element = input[index];
      this.roomList.push(new DAY04.Room(element));
    }
    this.sumOfRealSectorIDs = this.computeSumOfRealSectorIDs();
  };
};

DAY04.Room = function (designator) {
  this.letterCounts = {};
  this.letterCountArray = [];
  this.letters = [];
  if (designator) {
    this.encryptedName = this.getEncryptedName(designator);
    this.sectorID = Number(this.getSectorID(designator));
    this.checksum = this.getChecksum(designator);
    this.computeLetterCounts(this.encryptedName);
    this.countLetters(this.encryptedName);
    this.isRealRoom = (this.checksum == this.computeChecksum(designator));
  }

};

DAY04.Room.prototype.getEncryptedName = function (input) {
  return input.substring(0, input.lastIndexOf('-'));
};

DAY04.Room.prototype.getSectorID = function (input) {
  return input.substring(input.lastIndexOf('-') + 1, input.indexOf('['));
};

DAY04.Room.prototype.getChecksum = function (input) {
  return input.substring(input.indexOf('[') + 1, input.indexOf(']'));
};

DAY04.Room.prototype.computeLetterCounts = function (input) {
  var counts = {};
  var currentLetterCount;
  for (var index = 0; index < input.length; index++) {
    var element = input[index];
    if (element !== '-') {
      if (!this.letterCounts.hasOwnProperty(element)) {
        Object.defineProperty(this.letterCounts, element, { value: 1, writable: true });
      } else {
        currentLetterCount = this.letterCounts[element];
        Object.defineProperty(this.letterCounts, element, { value: currentLetterCount + 1, writable: true });
      }
    }
  };
};

DAY04.Room.prototype.countLetters = function (input) {
  // zero out the array
  for (var letterIndex = 0; letterIndex < 26; letterIndex++) {
    this.letterCountArray.push(0);
  };

  // add 1 to each index "matched" by the input letters
  for (var index = 0; index < input.length; index++) {
    var element = input[index];
    this.letterCountArray[element.charCodeAt() - 97]++;
  };
};

DAY04.Room.prototype.mostCommonLetter = function () {
  var highestCountSoFar = 0;
  var highestLetterSoFar = 0;
  for (var index = 0; index < this.letterCounts.length; index++) {
    var element = this.letterCounts[index];
    if (element >= highestCountSoFar) {
      highestLetterSoFar = index;
      highestCountSoFar = element;
    }
  };
  return String.fromCharCode(highestLetterSoFar + 97);
};

DAY04.Room.prototype.totalArray = function (arr) {
  var total = 0;
  for (var index = 0; index < arr.length; index++) {
    total += arr[index];
  }
  return total;
}

DAY04.Room.prototype.nthCommonLetter = function (n) {
  return this.computeChecksum()[n];
};

DAY04.Room.prototype.computeChecksum = function () {
  var highestCountSoFar = -1;
  var highestLetterSoFar = -1;
  var letterCounts = this.letterCountArray.slice();
  var lettersInOrder = '';
  var totalLetters = this.totalArray(letterCounts);
  while (totalLetters > 0) {
    for (var index = 0; index < letterCounts.length; index++) {
      var element = letterCounts[index];
      if (element > 0 && element > highestCountSoFar) {
        highestLetterSoFar = index;
        highestCountSoFar = element;
      }
    };
    letterCounts[highestLetterSoFar] = 0;
    lettersInOrder += String.fromCharCode(highestLetterSoFar + 97);
    highestCountSoFar = 0;
    highestLetterSoFar = 0;
    totalLetters = this.totalArray(letterCounts);
  };
  return lettersInOrder.slice(0, 5);
};

DAY04.Room.prototype.lettersInOrder = function () {
  var orderedList = [];
  for (var key in this.letterCounts) {
    if (this.letterCounts.hasOwnProperty(key))
      orderedList[key.value].push(key);
  }
  return orderedList;
};

DAY04.Room.prototype.decryptName = function () {
  var decryptedName = '';
  for (var index = 0; index < this.encryptedName.length; index++) {
    var element = this.encryptedName[index];
    if (element === '-')
      decryptedName += ' ';
    else
      decryptedName += String.fromCharCode(((element.charCodeAt(0) - 97 + this.sectorID) % 26) + 97);
  }
  return decryptedName;
};

DAY04.Day04.prototype.computeSumOfRealSectorIDs = function () {
  var sumOfRealSectorIDs = 0;
  for (var index = 0; index < this.roomList.length; index++) {
    var element = this.roomList[index];
    if (element.isRealRoom)
      sumOfRealSectorIDs += element.sectorID;
  }
  return sumOfRealSectorIDs;
};

module.exports = DAY04;

var Input = [];

// get input file as a string
var input = fs.readFileSync('.\\Day04Input.txt', { encoding: 'utf8' });
var inputArray = input.split('\n');

var day04 = new DAY04.Day04(inputArray);

console.log('Sum of the Sector IDs of the real rooms: ' + day04.sumOfRealSectorIDs);

for (var index = 0; index < day04.roomList.length; index++) {
  var element = day04.roomList[index];
  if (element.isRealRoom)
  {
    if (element.decryptName().indexOf('north') !== -1)
      console.log('Sector ID ' + element.sectorID + ' is where ' + element.decryptName() + ' are stored.');
  }
}


