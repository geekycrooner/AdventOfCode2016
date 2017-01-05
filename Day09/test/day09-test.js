"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day09');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var day09 = new AoC.Day09();

  it('The decompressed version of ADVENT is ADVENT', function () {
    var compressedInputFile = 'ADVENT';
    expect(day09.decompressFile(compressedInputFile)).to.equal('ADVENT');
  });

  it('The decompressed version of ADVENT has length 6', function () {
    var compressedInputFile = 'ADVENT';
    expect(day09.getDecompressedFileLength(compressedInputFile)).to.equal(6);
  });

  it('The decompressed version of A(1x5)BC is ABBBBBC', function () {
    var compressedInputFile = 'A(1x5)BC';
    expect(day09.decompressFile(compressedInputFile)).to.equal('ABBBBBC');
  });

  it('The decompressed version of A(1x5)BC has length 7', function () {
    var compressedInputFile = 'A(1x5)BC';
    expect(day09.getDecompressedFileLength(compressedInputFile)).to.equal(7);
  });

  it('The decompressed version of (3x3)XYZ is XYZXYZXYZ', function () {
    var compressedInputFile = '(3x3)XYZ';
    expect(day09.decompressFile(compressedInputFile)).to.equal('XYZXYZXYZ');
  });

  it('The decompressed version of (3x3)XYZ has length 9', function () {
    var compressionVersion = 1;
    var compressedInputFile = '(3x3)XYZ';
    expect(day09.getDecompressedFileLength(compressedInputFile)).to.equal(9);
  });

  it('The decompressed version of A(2x2)BCD(2x2)EFG is ABCBCDEFEFG', function () {
    var compressedInputFile = 'A(2x2)BCD(2x2)EFG';
    expect(day09.decompressFile(compressedInputFile)).to.equal('ABCBCDEFEFG');
  });

  it('The decompressed version of A(2x2)BCD(2x2)EFG has length 11', function () {
    var compressedInputFile = 'A(2x2)BCD(2x2)EFG';
    expect(day09.getDecompressedFileLength(compressedInputFile)).to.equal(11);
  });

  it('The decompressed version of (6x1)(1x3)A is (1x3)A', function () {
    var compressedInputFile = '(6x1)(1x3)A';
    expect(day09.decompressFile(compressedInputFile)).to.equal('(1x3)A');
  });

  it('The decompressed version of (6x1)(1x3)A has length 6', function () {
    var compressedInputFile = '(6x1)(1x3)A';
    expect(day09.getDecompressedFileLength(compressedInputFile)).to.equal(6);
  });

  it('The decompressed version of X(8x2)(3x3)ABCY is X(3x3)ABC(3x3)ABCY', function () {
    var compressedInputFile = 'X(8x2)(3x3)ABCY';
    expect(day09.decompressFile(compressedInputFile)).to.equal('X(3x3)ABC(3x3)ABCY');
  });

  it('The decompressed version of X(8x2)(3x3)ABCY has length 18', function () {
    var compressedInputFile = 'X(8x2)(3x3)ABCY';
    expect(day09.getDecompressedFileLength(compressedInputFile)).to.equal(18);
  });

  it('The decompressed version of (3x3)XYZ is XYZXYZXYZ', function () {
    var compressedInputFile = '(3x3)XYZ';
    expect(day09.decompressFileRecursive(compressedInputFile)).to.equal('XYZXYZXYZ');
  });

  it('The decompressed version of (3x3)XYZ has length 9', function () {
    var compressedInputFile = '(3x3)XYZ';
    expect(day09.getDecompressedFileRecursiveLength(compressedInputFile)).to.equal(9);
  });

  it('The decompressed version of X(8x2)(3x3)ABCY is XABCABCABCABCABCABCY', function () {
    var compressedInputFile = 'X(8x2)(3x3)ABCY';
    expect(day09.decompressFileRecursive(compressedInputFile)).to.equal('XABCABCABCABCABCABCY');
  });

  it('The decompressed version of X(8x2)(3x3)ABCY has length 20', function () {
    var compressedInputFile = 'X(8x2)(3x3)ABCY';
    expect(day09.getDecompressedFileRecursiveLength(compressedInputFile)).to.equal(20);
  });

  it('The decompressed version of (27x12)(20x12)(13x14)(7x10)(1x12)A is A repeated 241920 times', function () {
    var compressedInputFile = '(27x12)(20x12)(13x14)(7x10)(1x12)A';
    expect(day09.decompressFileRecursive(compressedInputFile)).to.equal('A'.repeat(241920));
  });

  it('The decompressed version of (27x12)(20x12)(13x14)(7x10)(1x12)A has length 241920', function () {
    var compressedInputFile = '(27x12)(20x12)(13x14)(7x10)(1x12)A';
    expect(day09.getDecompressedFileRecursiveLength(compressedInputFile)).to.equal(241920);
  });

  it('The decompressed version of (25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN is 445 characters long', function () {
    var compressedInputFile = '(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN';
    expect(day09.getDecompressedFileRecursiveLength(compressedInputFile)).to.equal(445);
  });




});