// other module dependcies
var csv = require('csv-to-json');

// local file/module dependencies
var config = require('./config.js'),
		keys = require('./keys.js'),
		distance = require('./lib/distance.js')
		;

var stops = csv.parse('./stops.txt');

var start = [35.034374, -85.302557]; // starting point for search
var radius = 300; // maximum distance in meters

var closeStops = [];
for (var i = 0; i < stops.length; i++) {
	if (distance.haversine(start, [stops[i].stop_lat, stops[i].stop_lon]) <= radius) {
		closeStops.push(stops[i]);
	}
}
for (var j = 0; j < closeStops.length; j++) {
	var stop = [closeStops[j].stop_lat, closeStops[j].stop_lon];
	console.log(closeStops[j].stop_name + ': ' + distance.haversine(start, stop) + ' meters');
}