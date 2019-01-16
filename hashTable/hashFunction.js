class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  // hashing function

  _hash(key) {
    let total = 0;
    let primeNumber = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let val = char.charCodeAt(0) - 96
      total = (total*primeNumber + val) % this.keyMap.length;
    }
    return total;
  }

  // set function

  _set(key, value) {
    let index = this._hash(key)
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap.push([key, value])
  }

  // get function

  _get(key) {
    let index = this._hash(key)
    if(this.keyMap[index]) {
      for(let i = 0; i < keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
}

let ht = new HashTable();
ht._set('orange', 'sweet')
ht._set('red', 'bad color')
ht._set('cyan', 'ok color')
ht._set('brown', 'cool')
