"use strict";

var chai = require('chai');
var expect = chai.expect;
var Day07 = require('./../day07');

describe('Day07', function () {

  var input = [
    'abba[mnop]qrst'
    , 'abcd[bddb]xyyx'
    , 'aaaa[qwer]tyui'
    , 'ioxxoj[asdfgh]zxcvbn'
  ];

  var input2 = [
    'aba[bab]xyz'
    , 'xyx[xyx]xyx'
    , 'aaa[kek]eke'
    , 'zazbz[bzb]cdb'
  ];

  var day0701 = new Day07.Day07();
  day0701.processInput(input);

  var day0702 = new Day07.Day07();
  day0702.processInput(input2);

  it('abba[mnop]qrst supports TLS', function () {
    expect(day0701.ipList[0].supportsTLS()).to.equal(true);
  });

  it('abcd[bddb]xyyx does not support TLS', function () {
    expect(day0701.ipList[1].supportsTLS()).to.equal(false);
  });

  it('aaaa[qwer]tyui does not support TLS', function () {
    expect(day0701.ipList[2].supportsTLS()).to.equal(false);
  });

  it('ioxxoj[asdfgh]zxcvbn supports TLS', function () {
    expect(day0701.ipList[3].supportsTLS()).to.equal(true);
  });

  it('Given the first test input, there are 2 addresses that support TLS', function () {
    expect(day0701.getCountOfTLSSupportingIPs()).to.equal(2);
  });

  it('aba[bab]xyz supports SSL', function () {
    expect(day0702.ipList[0].supportsSSL()).to.equal(true);
  });

  it('xyx[xyx]xyx does not support SSL', function () {
    expect(day0702.ipList[1].supportsSSL()).to.equal(false);
  });

  it('aaa[kek]eke supports SSL', function () {
    expect(day0702.ipList[2].supportsSSL()).to.equal(true);
  });

  it('zazbz[bzb]cdb supports SSL', function () {
    expect(day0702.ipList[3].supportsSSL()).to.equal(true);
  });

  it('Given the second test input, there are 3 addresses that support SSL', function () {
    expect(day0702.getCountOfSSLSupportingIPs()).to.equal(3);
  });


});