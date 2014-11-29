var births = require('./births');
var assert = require('assert');

describe('Kata#1', function(){
	it('should read the file', function(){
		assert(births.read('data/births.dat'));
	});
	
	it('should return valid types of properties of object', function(){
		var birth = births.read('data/births.dat')[0];
		assert(typeof birth.year === 'number');
		assert(typeof birth.boys === 'number');
		assert(typeof birth.girls === 'number');
	});
	
	it('should return valid result of division', function(){
		var numberOfBoys = 1000;
		var numberOfGirtls = 10;
		
		assert(numberOfBoys / numberOfGirtls === 100);
		assert(births.doDivision(numberOfBoys, numberOfGirtls) === 100);
	});
	
	it('should add coef property', function(){
		var birth = {year: 2000, boys: 1000, girls: 10};
		
		assert(births.calculateCoef(birth).coef === 100);
	});
	
	it('should return the largest coef', function(){
		var array = [{year: 2000, boys: 1000, girls: 10, coef: 100}, {year: 2001, boys: 2000, girls: 10, coef: 200}];
		
		assert(births.largestCoef(array) === array[1]);
	});
	
	it('should return the valid year', function(){
		var array = [{year: 2000, boys: 1000, girls: 10, coef: 100}, {year: 2001, boys: 2000, girls: 10, coef: 200}];
		
		assert(births.findYear(array) === 2001);
	});
	
});