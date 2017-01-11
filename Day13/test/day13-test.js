"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day13');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var input = [
    10
  ];

  var day13 = new AoC.Day13(1,1);
  day13.processInput(input);

  it('Location 0,0 is open', function () {
    expect(day13.getLocation(0,0)).to.equal('.');
  });

  it('Location 0,1 is open', function () {
    expect(day13.getLocation(0,1)).to.equal('.');
  });

  it('Location 1,0 is a wall', function () {
    expect(day13.getLocation(1,0)).to.equal('#');
  });

  it('Location 1,1 is open', function () {
    expect(day13.getLocation(1,1)).to.equal('.');
  });

  it('Location 9,6 is a wall', function () {
    expect(day13.getLocation(9,6)).to.equal('#');
  });

  it('Given the favoriteNumber = 10, the shortest path to 1,1 is 0 steps', function () {
    var day13 = new AoC.Day13(1,1);
    day13.favoriteNumber = 10;
    expect(day13.computeShortestPath(1,1)).to.equal(0);
  });

/* 
ideas...
have a paths array
compute orthoganal neighboring locations
if those locations are the goal location, add that location to the path and stop computing paths
if not, calculate open/wall for each of the four locations
add a new path to the paths array starting with each of the open locations
for each path, calculate next steps
would a tree structure be better than this? then, the shortest path to the goal is the optimal path...
also, need to handle back-tracking...i.e. stop if you're backtracking...
 */


});