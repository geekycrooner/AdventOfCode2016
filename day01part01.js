var fs = require('fs');


function Day01Part01() {
    this.facing = 'N';
    this.x = 0;
    this.y = 0;
};

Day01Part01.prototype.getFacing = function () {
    return this.facing;
};

Day01Part01.prototype.getPosition = function () {
    return '(' + this.x + ',' + this.y + ')';
};

Day01Part01.prototype.move = function (turnAndMove) {
  this.turn(turnAndMove.substring(0,1));
  this.goForward(turnAndMove.substring(1));
};

Day01Part01.prototype.goForward = function (distance) {
    var dist = Number(distance);
    if (this.getFacing() === 'E')
    this.x += dist;
    else if(this.getFacing() === 'W')
    this.x -= dist;
    else if(this.getFacing() === 'N')
    this.y += dist;
    else if(this.getFacing() === 'S')
    this.y -= dist;
};

Day01Part01.prototype.turn = function (direction) {
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

Day01Part01.prototype.numberOfBlocksAway = function(){
    return Math.abs(this.x) + Math.abs(this.y);
}




module.exports = Day01Part01;