

Tinyloader
------------
###### Version 1.1.0
**A tiny script loader (~3KB) using async and ES6 Promises**



### Installation
    npm install --save tinyloader


### Script tag
```html   
<script src="node_modules/tinyloader/dist/tinyloader.min.js"></script>
```

### or import in your project
```javascript
var tinyloader = require('node_modules/tinyloader/dist/tinyloader.min.js');
```

### Use Tinyloader
```javascript
tinyloader.load(url, mode)
	.then( function(){
		// If load success.
	}, function(fail){
		// If load failed.
	});
```
* url: **String** or **Array**
* mode: **String** *'async'* or *'defer'* (default: *'async'*)
* fail: **Object** { script: **String** url_failed, error: **Error Object** e}

### Example (see example/example.js for more info)
```javascript
tinyloader.load('https://code.jquery.com/jquery-3.0.0.min.js','async')
  .then( function(){
    // Here the code if the load succeed.
    console.log('jQuery is loaded with successs!', $);
  }, function(fail){
    // Here the code if the load failed.
    console.log('Load Failed');

    // Want to see the error and the script in error ?
    console.log('Inspect : ', fail);
  });
```

With an array
```javascript
let myScripts = [
    'https://code.jquery.com/jquery-3.0.0.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r58/three.js'
];


tinyloader.load(myScripts,'async')
  .then( function(){
    // Here the code if the load succeed.
    console.log('All scripts are loaded with success !');
  }, function(fail){
    console.log('At least one script failed, there it is: ', fail.script);
    console.log('Want to see the error: ', fail.error);
  });
```

### et voilà ! 


### Development
___
Want to contribute? Great!

TinyLoader uses [Webpack](https://webpack.github.io/docs/) for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

```sh
$ git clone https://github.com/tom4dev/tinyloader tinyloader
$ cd tinyloader
$ npm install
```

Developpment mode watcher (Webpack):

1. Start webpack-dev-server
```sh
$ npm start 
```
2. Start watching js files
```sh
$ npm run watch 
```

... And you're ready to code !


License
----

MIT


**Open source, Hell Yeah.**
