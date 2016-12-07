var chai = require ('chai');
var expect = chai.expect;
var Day01 = require('./../day01');

describe('Day01Part01', function() {
    it('At start, facing should be North', function () {
        var day01 = new Day01([]);
        expect(day01.getFacing()).to.equal('N');
    });

    it('After turning right, facing should be East', function () {
        var day01 = new Day01([]);
        day01.turn('R');
        expect(day01.getFacing()).to.equal('E');
    });
    
    it('After turning right twice, facing should be South', function () {
        var day01 = new Day01([]);
        day01.turn('R');
        day01.turn('R');
        expect(day01.getFacing()).to.equal('S');
    });

    it('After turning right thrice, facing should be West', function () {
        var day01 = new Day01([]);
        day01.turn('R');
        day01.turn('R');
        day01.turn('R');
        expect(day01.getFacing()).to.equal('W');
    });

    it('After turning right four times, facing should be North', function () {
        var day01 = new Day01([]);
        day01.turn('R');
        day01.turn('R');
        day01.turn('R');
        day01.turn('R');
        expect(day01.getFacing()).to.equal('N');
    });

    it('After turning left, facing should be West', function () {
        var day01 = new Day01([]);
        day01.turn('L');
        expect(day01.getFacing()).to.equal('W');
    });

    it('After turning left twice, facing should be South', function () {
        var day01 = new Day01([]);
        day01.turn('L');
        day01.turn('L');
        expect(day01.getFacing()).to.equal('S');
    });

    it('After turning left thrice, facing should be East', function () {
        var day01 = new Day01([]);
        day01.turn('L');
        day01.turn('L');
        day01.turn('L');
        expect(day01.getFacing()).to.equal('E');
    });

    it('After turning left four times, facing should be North', function () {
        var day01 = new Day01([]);
        day01.turn('L');
        day01.turn('L');
        day01.turn('L');
        day01.turn('L');
        expect(day01.getFacing()).to.equal('N');
    });

    it('After turning left and right, facing should be North', function () {
        var day01 = new Day01([]);
        day01.turn('L');
        day01.turn('R');
        expect(day01.getFacing()).to.equal('N');
    });

    it('After turning right and left, facing should be North', function () {
        var day01 = new Day01([]);
        day01.turn('R');
        day01.turn('L');
        expect(day01.getFacing()).to.equal('N');
    });

    it('At start, position should be (0,0)', function () {
        var day01 = new Day01([]);
        expect(day01.getPosition()).to.equal('(0,0)');
    });

    it('After following R2 facing should be East', function () {
        var day01 = new Day01([]);
        day01.move('R2');
        expect(day01.getFacing()).to.equal('E');
    });

    it('After following R2 position should be (2,0)', function () {
        var day01 = new Day01([]);
        day01.move('R2');
        expect(day01.getPosition()).to.equal('(2,0)');
    });

    it('After following R2 numberOfBlocksAway should be 2', function () {
        var day01 = new Day01([]);
        day01.move('R2');
        expect(day01.numberOfBlocksAway('(' + day01.x + ',' + day01.y + ')')).to.equal(2);
    });

    it('After following R2, R2, R2 numberOfBlocksAway should be 2', function () {
        var day01 = new Day01([]);
        day01.move('R2');
        day01.move('R2');
        day01.move('R2');
        expect(day01.numberOfBlocksAway('(' + day01.x + ',' + day01.y + ')')).to.equal(2);
    });

    it('After following R2, L3 position should be (2,3)', function () {
        var day01 = new Day01([]);
        day01.move('R2');
        day01.move('L3');
        expect(day01.getPosition()).to.equal('(2,3)');
    });

    it('After following R2, L3 numberOfBlocksAway should be 5', function () {
        var day01 = new Day01([]);
        day01.move('R2');
        day01.move('L3');
        expect(day01.numberOfBlocksAway('(' + day01.x + ',' + day01.y + ')')).to.equal(5);
    });

    it('After following R5, L5, R5, R3 position should be (10,2)', function () {
        var day01 = new Day01([]);
        day01.move('R5');
        day01.move('L5');
        day01.move('R5');
        day01.move('R3');
        expect(day01.getPosition()).to.equal('(10,2)');
    });

    it('After following R5, L5, R5, R3 numberOfBlocksAway should be 12', function () {
        var day01 = new Day01([]);
        day01.move('R5');
        day01.move('L5');
        day01.move('R5');
        day01.move('R3');
        expect(day01.numberOfBlocksAway('(' + day01.x + ',' + day01.y + ')')).to.equal(12);
    });

});