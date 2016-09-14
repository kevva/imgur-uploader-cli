#!/usr/bin/env node
'use strict';
const fs = require('fs');
const meow = require('meow');
const imgurUploader = require('imgur-uploader');
const pify = require('pify');

const cli = meow(`
	Example
	  $ imgur-uploader unicorn.png --title 'My fantastic unicorn'
	  $ cat unicorn.png | imgur-uploader
`);

if (cli.input.length === 0 && process.stdin.isTTY) {
	console.error('Expected an image');
	process.exit(1);
}

if (cli.input.length) {
	pify(fs.readFile)(cli.input[0], cli.flags).then(buf => {
		imgurUploader(buf).then(res => console.log(res.link));
	});
} else {
	const stream = imgurUploader.stream();
	stream.on('upload', res => process.stdout.write(res.link));
	process.stdin.pipe(stream);
}
