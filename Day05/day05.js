"use strict";

var fs = require('fs');
var crypto = require('crypto');

// global namespace
var DAY05 = DAY05 || {};

DAY05.Day05 = function (input) {
  this.doorID = '';
  this.password = '';
  this.firstDoorHashList = [];
  this.firstDoorIndexList = [];
  this.secondDoorHashList = [];
  this.secondDoorIndexList = [];
  this.secondDoorPassword = new Array(8);
  if (input) {
    this.doorID = input;
    this.generateHashesThatStartWithNZeroes(5);
    // this.generateSecondDoorPassword();
  }
};

DAY05.Day05.prototype.generateHashesThatStartWithNZeroes = function (nZeroes) {
  var salt = 0;
  var hash = crypto.createHash('md5').update(this.doorID.toString() + salt.toString()).digest('hex');
  // for (var hashCount = 0; hashCount < 8; hashCount++) {
  while (this.secondDoorHashList.length < 8) {
    while (hash.slice(0, nZeroes) !== '0'.repeat(nZeroes)) {
      salt += 1;
      hash = crypto.createHash('md5').update(this.doorID.toString() + salt.toString()).digest('hex');
    }
    this.firstDoorHashList.push(hash);
    this.firstDoorIndexList.push(salt);
    if (this.isHashValid(hash)) {
      if (this.secondDoorPassword[Number(hash[5])] === undefined) {
        this.secondDoorHashList.push(hash);
        this.secondDoorIndexList.push(salt);
        this.secondDoorPassword[Number(hash[5])] = hash[6].toString();
      }
    };
    hash = '';
  }
};

DAY05.Day05.prototype.isHashValid = function (hash) {
  if (!isNaN(Number(hash[5])) && Number(hash[5]) < 8) 
      return true;
  else 
    return false;
};

DAY05.Day05.prototype.getNthIndexForHashWith5Zeros = function (n) {
  return this.firstDoorIndexList[n];
};

DAY05.Day05.prototype.getNthCharacterOfPassword = function (n) {
  return this.firstDoorHashList[n][5];
};

DAY05.Day05.prototype.getFirstDoorPassword = function () {
  var password = '';
  for (var index = 0; index < 8; index++) {
    var element = this.firstDoorHashList[index];
    password += element[5].toString();
  }
  return password;
};

DAY05.Day05.prototype.getSecondDoorPassword = function () {
  return this.secondDoorPassword.join('');
};

DAY05.Day05.prototype.generateSecondDoorPassword = function () {
  for (var index = 0; index < this.secondDoorHashList.length; index++) {
    var element = this.secondDoorHashList[index];
    this.secondDoorPassword[element[5]] = element[6].toString();
  }
};

module.exports = DAY05;

// get input file as a string
var input = fs.readFileSync('.\\Day05Input.txt', { encoding: 'utf8' });

var day05 = new DAY05.Day05(input);

console.log('Given the door ID of : ' + day05.doorID + ', the password to the first door is ' + day05.getFirstDoorPassword());
console.log('Given the door ID of : ' + day05.doorID + ', the password to the second door is ' + day05.getSecondDoorPassword());


