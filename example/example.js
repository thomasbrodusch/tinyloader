var _jQuery = 'https://code.jquery.com/jquery-3.0.0.min.js';
var _threeJS = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r58/three.js';
var urlsArray = [
  _jQuery,
  _jQuery, 
  _threeJS, 
  'https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js',
  _jQuery
];
// Load jQuery in async mode.
tinyload.load(_jQuery, 'async', function(_CELA){
  console.log(_CELA);
    console.log('jQuery is loaded w/ success ! ', $);
  });

  
// Load ThreeJS in defer mode, load is performed only if not alreaydy loaded on the current page.
tinyload.load(_threeJS, 'defer', function(){
  console.log('threeJS is loaded w/ success ! ', THREE);
});

// You can pass an array of url, TinyLoad will do the rest !
tinyload.load(urlsArray, 'async', function(){
  console.log('All the scripts are loaded w/ success !')
});


// Another try
setTimeout(function(){
  tinyload.load(_jQuery,'defer',function(){
    console.log($);
  })
}, 2000);
    

/*
HINT: When should I use Asyn or Defer ?
######################################

Typically you want to use async where possible, then defer then no attribute. Here are some general rules to follow:

  # If the script is modular and does not rely on any scripts then use async.

  # If the script relies upon or is relied upon by another script then use defer.

  # If the script is small and is relied upon by an async script then use an inline script with no attributes placed above the async scripts.

-> http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html
*/
