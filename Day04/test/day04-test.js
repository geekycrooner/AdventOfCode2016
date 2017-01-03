var chai = require('chai');
var expect = chai.expect;
var Day04 = require('./../day04');

describe('Day04', function () {

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; encrypted name is: aaaaa-bbb-z-y-x', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.encryptedName).to.equal('aaaaa-bbb-z-y-x');
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; sector ID is: 123', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.sectorID).to.equal(123);
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; checksum is: abxyz', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.checksum).to.equal('abxyz');
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; contains 5 "a"s', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.letterCounts['a']).to.equal(5);
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; contains 3 "b"s', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.letterCounts['b']).to.equal(3);
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; contains 1 "z"s', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.letterCounts['z']).to.equal(1);
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; contains 1 "y"s', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.letterCounts['y']).to.equal(1);
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; contains 1 "x"s', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.letterCounts['x']).to.equal(1);
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; most common letter is "a"', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.mostCommonLetter()).to.equal('a');
    });

    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; second most common letter is "b"', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.nthCommonLetter(1)).to.equal('b');
    });
 
    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; computed checksum is abxyz', function () {
        var input = 'aaaaa-bbb-z-y-x-123[abxyz]';
        var room = new Day04.Room(input);
        expect(room.computeChecksum()).to.equal('abxyz');
    });
 
    it('Input: a-b-c-d-e-f-g-h-987[abcde]; computed checksum is abcde', function () {
        var input = 'a-b-c-d-e-f-g-h-987[abcde]';
        var room = new Day04.Room(input);
        expect(room.computeChecksum()).to.equal('abcde');
    });
 
    it('Input: not-a-real-room-404[oarel]; computed checksum is oarel', function () {
        var input = 'not-a-real-room-404[oarel]';
        var room = new Day04.Room(input);
        expect(room.computeChecksum()).to.equal('oarel');
    });
 
    it('Input: totally-real-room-200[decoy]; computed checksum is NOT decoy', function () {
        var input = 'totally-real-room-200[decoy]';
        var room = new Day04.Room(input);
        expect(room.computeChecksum()).to.not.equal('decoy');
    });
    
    it('Input: aaaaa-bbb-z-y-x-123[abxyz]; sum of real sector IDs is 123', function () {
        var input = ['aaaaa-bbb-z-y-x-123[abxyz]'];
        var day04 = new Day04.Day04(input);
        expect(day04.computeSumOfRealSectorIDs()).to.equal(123);
    });
 
    it('Given rooms above, the sum of the sector IDs of the real rooms is 1514', function () {
        var input = [
          'aaaaa-bbb-z-y-x-123[abxyz]'
          ,'a-b-c-d-e-f-g-h-987[abcde]'
          ,'not-a-real-room-404[oarel]'
          ,'totally-real-room-200[decoy]'
        ];
        var day04 = new Day04.Day04(input);
        expect(day04.computeSumOfRealSectorIDs()).to.equal(1514);
    });
 
    it('Input: qzmt-zixmtkozy-ivhz-343; decrypted name is \'very encrypted name\'', function () {
        var input = ['qzmt-zixmtkozy-ivhz-343[zimth]'];
        var day04 = new Day04.Day04(input);
        expect(day04.roomList[0].decryptName()).to.equal('very encrypted name');
    });
    

});

