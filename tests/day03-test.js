var chai = require('chai');
var expect = chai.expect;
var Day03 = require('./../day03');

describe('Day03', function () {

    it('Triangle 5 10 25 is impossible', function () {
        var input = '5 10 25';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Triangle 5 25 10 is impossible', function () {
    var input = '5 25 10';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Triangle 10 5 25 is impossible', function () {
    var input = '10 5 25';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Triangle 10 25 5 is impossible', function () {
    var input = '10 25 5';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Triangle 25 10 5 is impossible', function () {
    var input = '25 10 5';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Triangle 25 5 10 is impossible', function () {
    var input = '25 5 10';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });
    
    it('Triangle 5 5 5 is possible', function () {
    var input = '5 5 5';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });

    it('Triangle 1 1 1 is possible', function () {
    var input = '1 1 1';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });

    it('Triangle 0 0 0 is impossible', function () {
    var input = '0 0 0';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Triangle 0 1 2 is impossible', function () {
        var input = '0 1 2';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });
    it('Triangle 0 2 1 is impossible', function () {
        var input = '0 2 1';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });
    it('Triangle 1 2 0 is impossible', function () {
        var input = '1 2 0';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });
    it('Triangle 1 0 2 is impossible', function () {
        var input = '1 0 2';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });
    it('Triangle 2 1 0 is impossible', function () {
        var input = '2 1 0';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });
    it('Triangle 2 0 1 is impossible', function () {
        var input = '2 0 1';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Triangle 3 4 5 is possible', function () {
        var input = '3 4 5';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });

    it('Triangle 3 5 4 is possible', function () {
        var input = '3 5 4';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });
    it('Triangle 4 3 5 is possible', function () {
        var input = '4 3 5';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });
    it('Triangle 4 5 3 is possible', function () {
        var input = '4 5 3';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });
    it('Triangle 5 3 4 is possible', function () {
        var input = '5 3 4';
        var day03 = new Day03();
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });
    it('Triangle 5 4 3 is possible', function () {
        var day03 = new Day03();
        var input = '5 4 3';
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(true);
    });

    it('Triangle "  810  679   10" is impossible', function () {
        var day03 = new Day03();
        var input = "  810  679   10";
        expect(day03.isPossibleTriangle(day03.processInput(input))).to.equal(false);
    });

    it('Input "      810  679   10\n783  255  616" contains 1 possible triangle.', function () {
        var day03 = new Day03();
        var input = "      810  679   10\n783  255  616";
        expect(day03.getPossibleTriangleCount(input)).to.equal(1);
    });
    
});