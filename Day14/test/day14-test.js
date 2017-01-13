"use strict";

var chai = require('chai');
var expect = chai.expect;
var AoC = require('./../day14');

describe('AoC', function () {
  // turn off timeouts 
  this.timeout(0);

  var preArrangedSalt = 'abc';

  var day14 = new AoC.Day14(preArrangedSalt);

  it('The MD5 hash of the preArrangedSalt is 900150983cd24fb0d6963f7d28e17f72', function () {
    expect(day14.getMD5Hash()).to.equal('900150983cd24fb0d6963f7d28e17f72');
  });

  it('The first index that has a triple is 18', function () {
    var index = 0;
    while (!day14.hasTriple(day14.getMD5Hash(preArrangedSalt + index))) {
      index++;
    }
    expect(index).to.equal(18);
  });

  it('The MD5 hash of the preArrangedSalt + 18 is 0034e0923cc38887a57bd7b1d4f953df', function () {
    expect(day14.getMD5Hash('abc18')).to.equal('0034e0923cc38887a57bd7b1d4f953df');
  });

  it('The MD5 hash of the preArrangedSalt + 18, 0034e0923cc38887a57bd7b1d4f953df, has the first triple of 888', function () {
    expect(day14.getFirstTriple('0034e0923cc38887a57bd7b1d4f953df')).to.equal('888');
  });

  it('No indices through 1018 contain the quintuple 88888', function () {
    var hasQuint = false;
    var testDigit = day14.getFirstTriple('0034e0923cc38887a57bd7b1d4f953df')[0];
    for (var index = 19; index < 1018; index++) {
      var input = 'abc' + index;
      if (day14.hasQuintuple(testDigit, day14.getMD5Hash(input)))
        hasQuint = true;
    }
    expect(hasQuint).to.equal(false);
  });

  it('The second index that has a triple is 39', function () {
    var index = 19;
    while (!day14.hasTriple(day14.getMD5Hash(preArrangedSalt + index))) {
      index++;
    }
    expect(index).to.equal(39);
  });

  it('The MD5 hash of the preArrangedSalt + 39, has the first triple of eee', function () {
    expect(day14.getFirstTriple(day14.getMD5Hash(preArrangedSalt + '39'))).to.equal('eee');
  });

  it('The hash at index 816 contains eeeee', function () {
    var returnval;
    for (var index = 38; index < 100; index++) {
      if (day14.hasTriple(day14.getMD5Hash(preArrangedSalt + index))) {
        var tripleDigit = day14.getFirstTriple(day14.getMD5Hash(preArrangedSalt + index))[1];
        for (var ind = 0; ind < 1000; ind++) {
          if (day14.hasQuintuple(tripleDigit, day14.getMD5Hash(preArrangedSalt + (index + ind)))) {
            returnval = ind + index;
            break;
          }
        }
        break;
      }
    }
    expect(returnval).to.equal(816);
  });

  it('The second key index is 92', function () {
    var keys = [];
    for (var index = 0; index < 100; index++) {
      if (day14.hasTriple(day14.getMD5Hash(preArrangedSalt + index))) {
        var tripleDigit = day14.getFirstTriple(day14.getMD5Hash(preArrangedSalt + index))[1];
        for (var ind = 0; ind < 1000; ind++) {
          if (day14.hasQuintuple(tripleDigit, day14.getMD5Hash(preArrangedSalt + (index + ind)))) {
            keys.push(index);
            break;
          }
        }
      }
    }
    expect(keys[1]).to.equal(92);
  });

  // it('The 64th key index is 22728', function () {
  //   var keys = [];
  //   var index = 0;
  //   while (keys.length < 64) {
  //     if (day14.hasTriple(day14.getMD5Hash(preArrangedSalt + index))) {
  //       var tripleDigit = day14.getFirstTriple(day14.getMD5Hash(preArrangedSalt + index))[1];
  //       for (var ind = 1; ind < 1001; ind++) {
  //         if (day14.hasQuintuple(tripleDigit, day14.getMD5Hash(preArrangedSalt + (index + ind)))) {
  //           keys.push(index);
  //           break;
  //         }
  //       }
  //     }
  //     index++;
  //   }
  //   expect(keys[63]).to.equal(22728);
  // });

  it('The MD5 key-stretched hash of the preArrangedSalt + 0 is a107ff634856bb300138cac6568c0f24', function () {
    expect(day14.getKeyStretchedMD5Hash('abc0')).to.equal('a107ff634856bb300138cac6568c0f24');
  });

  it('The first index of key-stretched MD5 that has a triple is 5', function () {
    var index = 0;
    while (!day14.hasTriple(day14.getKeyStretchedMD5Hash(preArrangedSalt + index))) {
      index++;
    }
    expect(index).to.equal(5);
  });

  it('The first key index is 10', function () {
    var keys = [];
    for (var index = 0; index < 11; index++) {
      if (day14.hasTriple(day14.getKeyStretchedMD5Hash(preArrangedSalt + index))) {
        var tripleDigit = day14.getFirstTriple(day14.getKeyStretchedMD5Hash(preArrangedSalt + index))[1];
        for (var ind = 0; ind < 1000; ind++) {
          if (day14.hasQuintuple(tripleDigit, day14.getKeyStretchedMD5Hash(preArrangedSalt + (index + ind)))) {
            keys.push(index);
            break;
          }
        }
      }
    }
    expect(keys[0]).to.equal(10);
  });

  it('The 64th key index is 22551', function () {
    var keys = [];
    var index = 0;
    while (keys.length < 64) {
      console.log('Index: ' + index + '\tKeys: ' + keys.length);
      if (day14.hasTriple(day14.getKeyStretchedMD5Hash(preArrangedSalt + index))) {
        var tripleDigit = day14.getFirstTriple(day14.getKeyStretchedMD5Hash(preArrangedSalt + index))[1];
        for (var ind = 1; ind < 1001; ind++) {
          if (day14.hasQuintuple(tripleDigit, day14.getKeyStretchedMD5Hash(preArrangedSalt + (index + ind)))) {
            keys.push(index);
            break;
          }
        }
      }
      index++;
    }
    expect(keys[63]).to.equal(22551);
  });
});