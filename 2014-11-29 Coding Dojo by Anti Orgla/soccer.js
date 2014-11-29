var fs = require('fs');
var functions = require('./functions');

var read = exports.read = function(file) {

	var soccers = [];
	
	functions.lines(file).forEach(function(line, i) {
		
		var match = line.split(/\s/);
		
		if (match.length === 8 && i > 0) {
			
			soccers.push({
				
				club: match[1],
				gf: parseInt(match[6], 10),
				ga: parseInt(match[7], 10)
			});
		}
	});
	
	return soccers;
};

var difference = exports.difference = function(a, b) {
	
	return a - b;
	
};

var calculateDifference = exports.calculateDifference = function(soccer) {
	
	soccer.difference = difference(soccer.gf, soccer.ga);
	
	return soccer;
	
};

var findWorst = exports.findWorst = function(soccers) {
	
	var copy = soccers.slice(0);
	
	copy.sort(function(a, b) {
		
		return a.diffrence === b.difference ? 0 : (a.difference > b.difference ? 1 : -1);
	
	});
	
	return copy[0];
	
};

var findWorstClub = exports.findWorstClub = function(soccers) {
	
	for (var i = 0; i < soccers.length; i++) {
		calculateDifference(soccers[i]);
	}
	
	return findWorst(soccers).club;
	
};

console.log(findWorstClub(read('data/soccer.dat')));
