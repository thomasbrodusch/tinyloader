/**
 * TinyloaderJS
 * author: Thomas Brodusch
 * license: MIT
 * version: 1.1.0
 * ##########################
 * Script loader using async and ES6 Promises 
 * @param  string or Array  url     Can be a string or en array of URLs (of course you can chain your script loading)
 * @param  string           mode    'async' or 'defer'
 * @return Promise    
 */
import CacheManager from './cachemanager';
const Cache = new CacheManager();
const msg_header = 'TinyloadJS | ';

const load = (url, mode = 'async') => {

  if(Array.isArray(url)) {
    let promises = [];
    url.forEach(function(item){
      // Recursivity for an array of URLs
      promises.push(load(item));
    });
    return Promise.all(promises);
  }

  return new Promise((resolve, reject) => {
    //Check if the script is already loaded (present in cache)
    if(Cache.getFromCache('tinyload', url) !== true){
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
          successLoad(url);
          resolve(this)
        }
      };
      
      s.onerror = s.onabort = (e) => {
        reject(failedLoad(url, e));
      };

      t.parentNode.insertBefore(s, t);
    }
    else{
      alreadyLoad(url);  
      resolve(this);
    }
  });
};

const successLoad = (url) => {
  return Cache.addToCache('tinyload', url, true);
};

const alreadyLoad = (url) => {
  console.info(`${msg_header} Script "${url}" is already loaded.`);  
};

const failedLoad = (url, e) => {
  console.error(`${msg_header} An error has occured when trying to load the script: "${url}", please check if the path is correct.`);
  console.error(`${msg_header} Reason: `);
  return {
    script: url, 
    error: e
  };
}

export{
  load
}