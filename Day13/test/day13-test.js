"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day13');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var testFavoriteNumber = '10';
  var startX = 1, startY = 1;
  var day13 = new AoC.Day13(startX, startY);
  day13.processInput(testFavoriteNumber);

  it('Location 0,0 is open', function () {
    expect(day13.isOpen(0, 0)).to.equal(true);
  });

  it('Location 0,1 is open', function () {
    expect(day13.isOpen(0, 1)).to.equal(true);
  });

  it('Location 1,0 is a wall', function () {
    expect(day13.isWall(1, 0)).to.equal(true);
  });

  it('Location 1,1 is open', function () {
    expect(day13.isOpen(1, 1)).to.equal(true);
  });

  it('Location 9,6 is a wall', function () {
    expect(day13.isWall(9, 6)).to.equal(true);
  });

  it('Given the favoriteNumber = 10, the shortest path to 1,1 is 0 steps', function () {
    expect(day13.computeShortestPath(1, 1)).to.equal(0);
  });

  it('Given the favoriteNumber = 10, the shortest path to 0,1 is 1 step', function () {
    expect(day13.computeShortestPath(0, 1)).to.equal(1);
  });

  it('Given the favoriteNumber = 10, cannot reach 2, 1', function () {
    expect(day13.computeShortestPath(2, 1)).to.equal(undefined);
  });

  it('Given the favoriteNumber = 10, the shortest path to 2,1 is 1 step', function () {
    expect(day13.computeShortestPath(2, 1)).to.equal(1);
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