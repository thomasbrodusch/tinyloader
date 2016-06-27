/**
 * TinyloaderJS
 * author: Thomas Brodusch
 * license: MIT
 * version: 1.0.0
 * ##########################
 * Script loader using async and ES6 Promises 
 * @param  string or Array  url     Can be a string or en array of URLs (of course you can chain your script loading)
 * @param  string           mode    'async' or 'defer'
 * @return Promise    
 */
import CacheManager from './cachemanager';
const Cache = new CacheManager();
const msg_header = 'TinyloadJS | ';

const load = (url, mode = 'defer', callback = false) => {

  if(Array.isArray(url)) {
    let promises = [];
    url.forEach(function(item){
      // Recursivity for an array of URLs
      promises.push(load(item));
    });
    return Promise.all(promises)
          .then(() => {
            successLoad(url, callback);
          })
          .catch((e) => {
            failedLoad(url, e);
          });
  }

  return new Promise((resolve, reject) => {
    //Check if the script is already loaded (present in cache)
    if(Cache.getFromCache('tinyload', url) != true){
      Cache.addToCache('tinyload', url, 'loading');
      // Load the script.
      let r = false,
          t = document.getElementsByTagName('script')[0],
          s = document.createElement('script');

      s.type = 'text/javascript';
      s.src = url;
      s.async = mode === 'async' ? true : false;
      s.defer = mode === 'defer' ? true: false;
      s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState == 'complete') ) {
          r = true;
          resolve(this)
        }
      };
      s.onerror = s.onabort = reject;
      t.parentNode.insertBefore(s, t);
    }
    else{
      throw 'already_load';
    }
  })
  .then(() => {
    successLoad(url, callback);
  })
  .catch((e) => {
    if(e === 'already_load'){
      alreadyLoad(url, callback);
    } else {
      failedLoad(url, e);
    }
  });
};

const successLoad = (url, callback) => {
  Cache.addToCache('tinyload', url, true);
  return callback ? callback() : true;
};

const alreadyLoad = (url, callback) => {
  console.info(`${msg_header} Script "${url}" is already loaded.`);  
  return callback ? callback() : true;
};

const failedLoad = (url, e) => {
  console.error(`${msg_header} An error has occured when trying to load the script: "${url}", please check if the path is correct.`);
  console.error(`${msg_header} Event error: `);
  return console.error(e);
}

export{
  load
}