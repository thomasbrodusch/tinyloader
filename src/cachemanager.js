
class CacheManager {
  constructor(){
    this.cache = [];
  }

  addToCache(context, key, object){
    this.cache[context] = this.cache[context] || [];
    this.cache[context ][key] = object;
    return object;
  }

  getFromCache(context, key){
    if(this.cache[context] == undefined)
      this.cache[context] = [];
    return this.cache[context][key] == undefined ? false : this.cache[context][key];
  }
};
export default CacheManager;