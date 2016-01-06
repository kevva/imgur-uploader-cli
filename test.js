import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	const ret = await execa('./cli.js', ['--help']);
	t.regexTest(/Upload images to imgur/, ret.stdout);
});

test('upload image', async t => {
	const ret = await execa('./cli.js', ['fixtures/test.png']);
	t.regexTest(/imgur\.com/, ret.stdout);
});
