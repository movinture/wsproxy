// Created By Abhijit
// Created on 26th Aug 2015

var bunyan = require('bunyan');
var live    = require("bunyan-live-logger");
var logger = bunyan.createLogger({
	name: 'wsProxy',
	streams: [
		{
			level: 'info',
			stream: process.stdout,
		},
		{
			level: 'error',
			stream: process.stdout,
		}
	]
});

module.exports = logger;
