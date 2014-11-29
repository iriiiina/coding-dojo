var fs = require('fs');
var functions = require('./functions');

var read = exports.read = function(file) {
	
	return functions.splitLines(file, /;/).map(function(line) {
		
		return {
				
				year: parseInt(line[0], 10),
				boys: parseInt(line[1], 10),
				girls: parseInt(line[2], 10)
			};
	});
};

exports.doDivision = function(boys, girls) {
	
	return boys/girls;
};

var calculateCoef = exports.calculateCoef = function(birth) {

	birth.coef = exports.doDivision(birth.boys, birth.girls);
	
	return birth;
};

var largestCoef = exports.largestCoef = function(array) {
	
	var copy = array.slice(0);
	
	copy.sort(function(a, b) {
		
		return a.coef === b.coef ? 0 : (a.coef < b.coef ? 1 : -1);
	
	});
	
	return copy[0];
};

var findYear = exports.findYear = function(births) {
	for (var i = 0; i < births.length; i++) {
		calculateCoef(births[i]);
	}
	
	
	
	return largestCoef(births).year;
	
};

console.log(findYear(read('data/births.dat')));