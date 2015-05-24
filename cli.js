#!/usr/bin/env node
'use strict';
var fs = require('fs');
var meow = require('meow');
var imgurUploader = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ imgur-uploader unicorn.png',
		'  $ cat unicorn.png | imgur-uploader'
	].join('\n')
});

if (!cli.input.length && process.stdin.isTTY) {
	console.error('Expected an image');
	process.exit(1);
}

if (cli.input.length) {
	fs.readFile(cli.input[0], function (err, buf) {
		if (err) {
			console.error(err.message);
			process.exit(1);
		}

		imgurUploader(buf, function (err, res) {
			if (err) {
				console.error(err.message);
				process.exit(1);
			}

			console.log(res.link);
		});
	});
} else {
	var stream = imgurUploader.stream();

	stream.on('upload', function (res) {
		process.stdout.write(res.link);
	});

	process.stdin.pipe(stream);
}

