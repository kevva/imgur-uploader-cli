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
		data: {
			id: 'OB74hEa',
			title: null,
			description: null,
			datetime: 1432396824,
			type: 'image/png',
			...
		}
	}
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
