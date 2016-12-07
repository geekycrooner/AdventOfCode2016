var fs = require('fs');

function Day01() {
    this.facing = 'N';
    this.x = 0;
    this.y = 0;
    this.positionList = ['(0,0)'];
    this.firstPositionVisitedTwice;
};

Day01.prototype.getFacing = function () {
    return this.facing;
};

Day01.prototype.getPosition = function () {
    return '(' + this.x + ',' + this.y + ')';
};

Day01.prototype.addPositionAndDetermineIfDuplicated = function (position) {
  if (this.positionList.indexOf(position) >= 0 && this.firstPositionVisitedTwice === undefined) {
      this.firstPositionVisitedTwice = position;
  }
  this.positionList.push(position);
};

Day01.prototype.move = function (turnAndMove) {
  this.turn(turnAndMove.substring(0,1));
  this.goForward(turnAndMove.substring(1));
};

Day01.prototype.goForward = function (distance) {
    var dist = Number(distance);
    if (this.getFacing() === 'E') {
      for (var index = 1; index < dist + 1; index++) {
        this.x += 1;
        this.addPositionAndDetermineIfDuplicated('(' + this.x + ',' + this.y + ')');
      }
    } else if (this.getFacing() === 'W') {
      for (var index = 1; index < dist + 1; index++) {
        this.x -= 1;
        this.addPositionAndDetermineIfDuplicated('(' + this.x + ',' + this.y + ')');
      }
    } else if (this.getFacing() === 'N') {
      for (var index = 1; index < dist + 1; index++) {
        this.y += 1;
        this.addPositionAndDetermineIfDuplicated('(' + this.x + ',' + this.y + ')');
      }
    } else if (this.getFacing() === 'S') {
      for (var index = 1; index < dist + 1; index++) {
        this.y -= 1;
        this.addPositionAndDetermineIfDuplicated('(' + this.x + ',' + this.y + ')');
      }
    }
};

Day01.prototype.turn = function (direction) {
    if (this.facing === 'N') {
        if (direction === 'R') {
          this.facing = 'E';
        } else if (direction === 'L') {
          this.facing = 'W';
        }
    } else if (this.facing === 'E') {
        if (direction === 'R') {
          this.facing = 'S';
        } else if (direction === 'L') {
          this.facing = 'N';
        }
    } else if (this.facing === 'S') {
        if (direction === 'R') {
          this.facing = 'W';
        } else if (direction === 'L') {
          this.facing = 'E';
        }
    } else if (this.facing === 'W') {
        if (direction === 'R') {
          this.facing = 'N';
        } else if (direction === 'L') {
          this.facing = 'S';
        }
    }
};

Day01.prototype.numberOfBlocksAway = function(originString) {
    var origin = originString.substring(1, originString.length - 1).split(',');
    var originX = Number(origin[0]);
    var originY = Number(origin[1]);
    return Math.abs(originX) + Math.abs(originY);
};

module.exports = Day01;

var Input = [];

// get input file as a string
var input = fs.readFileSync('.\\Day01Input.txt', {encoding: 'utf8'});
//var input = 'R8, R4, R4, R8';

// add input string onto Input array
Input = input.split(', ');

var day01 = new Day01([]);

Input.forEach(function(value) {
    day01.move(value);
    });
    
console.log('Part 1: How many blocks away is Easter Bunny HQ? ' + day01.numberOfBlocksAway('(' + day01.x + ',' + day01.y + ')'));

// console.log('First position visited twice: ' + day01part01.firstPositionVisitedTwice);

console.log('Part 2: How many blocks away is the first location you visit twice? ' + day01.numberOfBlocksAway(day01.firstPositionVisitedTwice));