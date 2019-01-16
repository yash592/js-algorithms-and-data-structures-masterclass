// Implement a simple hashmap class in Javascript

class Hashmap {
  constructor(size=4) {
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
    this.keyMap[index].push([key, value])
  }

//   get values

  values() {
    let valuesArr=[];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }

//   get keys

  keys() {
    let keysArr=[];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }

}

let hm = new Hashmap();
hm._set('orange', 'sweet')
hm._set('red', 'bad color')
hm._set('cyan', 'ok color')
hm._set('brown', 'cool')
