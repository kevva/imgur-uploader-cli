'use strict';
var execFile = require('child_process').execFile;
var path = require('path');
var test = require('ava');

test('show help screen', function (t) {
	t.plan(2);

	execFile(path.join(__dirname, 'cli.js'), ['--help'], function (err, stdout) {
		t.assert(!err, err);
		t.assert(/Upload images to imgur/.test(stdout), stdout);
	});
});
