import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Upload images to imgur/);
});

test('upload image', async t => {
	t.regex(await execa.stdout('./cli.js', ['fixtures/test.png']), /imgur\.com/);
});
