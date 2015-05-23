'use strict';
var fs = require('fs');
var path = require('path');
var test = require('ava');
var imgurUploader = require('../');
var buf = fs.readFileSync(path.join(__dirname, 'fixtures/test.png'));

test(function (t) {
	t.plan(3);

	imgurUploader(buf, function (err, res) {
		t.assert(!err, err);
		t.assert(res, res);
		t.assert(res.data.type === 'image/png', res.data.type);
	});
});
