"use strict";

var fs = require('fs');

// global namespace
var DAY07 = DAY07 || {};

DAY07.Day07 = function () {
  this.ipList = [];
};

DAY07.Day07.prototype.processInput = function (input) {
  // for each row of input, add an IPAddress
  for (var index = 0; index < input.length; index++) {
    this.ipList.push(new DAY07.IP(input[index]));
  }
};

DAY07.Day07.prototype.getCountOfTLSSupportingIPs = function () {
  var count = 0;
  for (var index = 0; index < this.ipList.length; index++) {
    var ip = this.ipList[index];
    if (ip.supportsTLS()) count += 1;
  }
  return count;
};

DAY07.Day07.prototype.getCountOfSSLSupportingIPs = function () {
  var count = 0;
  for (var index = 0; index < this.ipList.length; index++) {
    var ip = this.ipList[index];
    if (ip.supportsSSL()) count += 1;
  }
  return count;
};

DAY07.IP = function (address) {
  this.address = address;
};

DAY07.IP.prototype.supportsTLS = function () {
  var hypernetSequenceMarker = /\[\w*\]/g;
  var hypernetSequences;
  // if any hypernetSequence contains an ABBA, address doesn't support TLS
  while ((hypernetSequences = hypernetSequenceMarker.exec(this.address)) !== null) {
    var hypernetSequence = hypernetSequences[0].substr(1, (hypernetSequences[0]).length - 2);
    if (this.hasABBA(hypernetSequence)) return false;
  }
  // otherwise...
  if (this.hasABBA(this.address))
    return true;
  else
    return false;
};

DAY07.IP.prototype.hasABBA = function (sequence) {
  // for each set of two characters, check to see if the next two characters are their inverses
  var result = false;
  for (var index = 0; index < sequence.length - 3; index++) {
    var a = sequence[index];
    var b = sequence[index + 1];
    if (a !== b && sequence[index + 2] === b && sequence[index + 3] === a) {
      result = true;
    }
  }
  return result;
};

DAY07.IP.prototype.supportsSSL = function () {
  //has ABA outside square brackets
  for (var index = 0; index < this.address.length - 2; index++) {
    var element = this.address.slice(index, index + 3); // get a three-character substr
    if (!this.isInsideHypernet(index)) {
      if (this.isABA(element)) {
        if (this.hasBAB(element)) {
          return true;
        }
      }
    }
  }
  return false;
};

DAY07.IP.prototype.isInsideHypernet = function (index) {
  var hypernetSequenceMarker = /\[\w*\]/g;
  var hypernetSequences;
  // if any hypernetSequence contains bab, address supports ssl
  while ((hypernetSequences = hypernetSequenceMarker.exec(this.address)) !== null) {
    if (index >= hypernetSequences.index && index < hypernetSequenceMarker.lastIndex)
      return true;
  };
  return false;
};

DAY07.IP.prototype.isABA = function (text) {
  if (text[0] === text[2] && text[0] !== text[1] && !/\[/g.test(text) && !/\]/g.test(text)) {
    return true;
  } else {
    return false;
  }
};

DAY07.IP.prototype.hasBAB = function (aba) {
  var bab = aba[1] + aba[0] + aba[1];
  var hypernetSequenceMarker = /\[\w*\]/g;
  var hypernetSequences;
  // if any hypernetSequence contains bab, address supports ssl
  while ((hypernetSequences = hypernetSequenceMarker.exec(this.address)) !== null) {
    var hypernetSequence = hypernetSequences[0].substr(1, (hypernetSequences[0]).length - 2);
    if (hypernetSequence.indexOf(bab) !== -1) return true;
  }
  return false;
};

module.exports = DAY07;

// get input file as a string
var rawInput = fs.readFileSync('.\\Day07Input.txt', { encoding: 'utf8' });

// split it into an input array
var inputArray = rawInput.split('\r\n');

// initialize the object
var day07 = new DAY07.Day07();
day07.processInput(inputArray);

console.log('The number of IPs supporting TLS is ' + day07.getCountOfTLSSupportingIPs());
console.log('The number of IPs supporting SSL is ' + day07.getCountOfSSLSupportingIPs());
