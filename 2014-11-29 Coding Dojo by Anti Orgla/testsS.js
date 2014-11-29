var soccer = require('./soccer');
var assert = require('assert');

describe('Soccer', function() {
	
	it('should read the file', function() {
		
		assert(soccer.read('data/soccer.dat'))
	});
	
	it('should return valid types of properties of object', function(){
		var entry = soccer.read('data/soccer.dat')[0];
		assert(typeof entry.club === 'string');
		assert(typeof entry.gf === 'number');
		assert(!isNaN(entry.gf));
		assert(typeof entry.ga === 'number');
	});
	
	it('should return valid difference', function(){
		assert(soccer.difference(30, 11), 19);
		assert(soccer.difference(11, 30), -19);
	});
	
	it('should return add valid difference', function(){
		
		var entry = { club: 'Chelsea', gf: 30, ga: 11 };
		
		assert(soccer.calculateDifference(entry).difference, 19);
	});
	
	it('should find worst difference', function(){
		
		var soccers = [
			{ club: 'Chelsea', gf: 30, ga: 11, difference: 19 },
			{ club: 'Southampton', gf: 24, ga: 6, difference: 18 }
		];
		
		assert(soccer.findWorst(soccers), soccers[1]);
	});

	it('should return the valid club name', function(){
		
		var soccers = [
			{ club: 'Chelsea', gf: 30, ga: 11, difference: 19 },
			{ club: 'Southampton', gf: 24, ga: 6, difference: 18 }
		];
		
		assert(soccer.findWorstClub(soccers), 'Southampton');
	});
});
