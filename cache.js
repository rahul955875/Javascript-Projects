class cache {
  constructor(limit = 3) {
    this.limit = limit;
    this.cache = new Map();
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.limit) {
        const oldKey = this.cache.keys().next().value
        this.cache.delete(oldKey)
    }
    this.cache.set(key, value);
  }
  get(key){
    if(!this.cache.has(key)) return null
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key,value)
    return value

  }
  showCache(){
    console.log(this.cache)
  }
}
const newCache = new cache(3)
newCache.set('user1','rahul')
newCache.set('user2','jignesh')
newCache.set('user3','satyam')

console.log(newCache.get('user1'))
newCache.set('user4','zimil')
newCache.showCache()