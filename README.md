

Tinyloader
------------
###### Version 1.0.0
**A tiny script loader (~3KB) using async and ES6 Promises**



### Installation
    npm install --save tinyloader


### Script tag
```html   
<script src="node_modules/tinyloader/dist/tinyloader.min.js"></script>
```

### or ES6 import in your project
```javascript
import tinyloader from 'node_modules/dist/tinyloader.min.js';
```

### Use Tinyloader
```javascript
tinyloader.load(url, mode, callback);
```
* url: **String** or **Array**
* mode: **String** *'async'* or *'defer'* (default: *'async'*)
* callback: (*optional*)

### Example (see example/example.js for more info)
```javascript
tinyloader.load('https://code.jquery.com/jquery-3.0.0.min.js', 'async', function(){
    console.log('jQuery is loaded !', $);
};
```

With an array
```javascript
let myScripts = [
    'https://code.jquery.com/jquery-3.0.0.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r58/three.js'
];

tinyloader.load(myScripts, 'async', function(){
    console.log('All of my scripts are loaded with success !');
};
```

### et voilà ! 


### Development
___
Want to contribute? Great!

Nowtify uses [Webpack](https://webpack.github.io/docs/) for fast developing.
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
