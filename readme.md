# imgur-uploader [![Build Status](https://travis-ci.org/kevva/imgur-uploader.svg?branch=master)](https://travis-ci.org/kevva/imgur-uploader)

> Upload images to [imgur](http://imgur.com)


## Install

```
$ npm install --save imgur-uploader
```


## Usage

```js
var fs = require('fs');
var imgurUploader = require('imgur-uploader');

imgurUploader(fs.readFileSync('cat.jpg'), function (err, res) {
	console.log(res);
	/*
	{
		id: 'OB74hEa',
		link: 'http://i.imgur.com/jbhDywa.png',
		datetime: 1432396824,
		type: 'image/png',
		...
	}
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
