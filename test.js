import {execFile} from 'child_process';
import path from 'path';
import pify from 'pify';
import test from 'ava';

test('show help screen', async t => {
	const stdout = await pify(execFile)(path.join(__dirname, 'cli.js'), ['--help']);
	t.regexTest(/Upload images to imgur/, stdout);
});
