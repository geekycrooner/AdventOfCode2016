var fs = require('fs');

// var Day04 = function () {
var Day04 = function (input) {
    this.letterCounts = {};
    if (input) {
        this.computeLetterCounts(input);
    };
};

Day04.prototype.Day04 = function (input) {
    this.letterCounts = {};
    this.computeLetterCounts(input);
}

Day04.prototype.getEncryptedName = function (input) {
    return input.substring(0, input.lastIndexOf('-'));
};

Day04.prototype.getSectorID = function (input) {
    return input.substring(input.lastIndexOf('-') + 1, input.indexOf('['));
};

Day04.prototype.getChecksum = function (input) {
    return input.substring(input.indexOf('[') + 1, input.indexOf(']'));
};

Day04.prototype.computeLetterCounts = function (input) {
    var counts = {};
    var currentLetterCount;
    for (var index = 0; index < input.length; index++) {
        var element = input[index];
        if (element !== '-') {
            if (!this.letterCounts.hasOwnProperty(element)) {
                Object.defineProperty(this.letterCounts, element, { value: 1, writable: true });
            } else {
                // currentLetterCount = this.letterCounts.valueOf(element);
                currentLetterCount = this.letterCounts[element];
                Object.defineProperty(this.letterCounts, element, { value: currentLetterCount + 1, writable: true });
            }
        }
    };
    //    return Object.create(this.lettercounts._proto_,);
};

Day04.prototype.isRealRoom = function (input) {
    // get encrypted name
    // get checksum
    // calculate most common letters
};

module.exports = Day04;

//var day04 = new Day04();
// var Input = [];
// get input file as a string
//var input = fs.readFileSync('.\\Day04Input.txt', { encoding: 'utf8' });
//var inputArray = input.split('\n');

// add input string onto Input array
// Input = input.split(', ');

var input = 'aaaaa-bbb-z-y-x';
// var day04 = new Day04();
var day04 = new Day04(input);
// console.log(day04.getLetterCounts(input)['a']);
console.log(day04.letterCounts['a']);


//console.log('Sum of the Sector IDs of the real rooms: ' + day04.sectorIDSum);
