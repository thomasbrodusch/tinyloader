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
tinyloader.load(_jQuery,'async')
  .then( function(val){
    // Here the code if the load succeed.
    console.log('jQuery is loaded with success!');
  }, function(reason){
    // HEre the code if the load failed.
    console.log('Load Failed');
    console.log(reason);
  });



  
// Load ThreeJS in defer mode.
tinyloader.load(_threeJS,'defer')
  .then( function(){
    // Here the code if the load succeed.
    console.log('threeJS is loaded with successs!');
    console.log(THREE);
  });


// You can pass an array of url, TinyLoad will do the rest !
tinyloader.load(urlsArray,'async')
  .then( function(){
    // Here the code if the load succeed.
    console.log('All scripts are loaded with success !');
  }, function(fail){
    console.log('At least one script failed, there it is: ', fail.script);
    console.log('Want to see the error: ', fail.error);
  });


// Another try without then()
setTimeout(function(){
  tinyloader.load(_jQuery,'async');
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
