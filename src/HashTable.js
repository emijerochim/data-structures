let singleLinkedList = require("./SingleLinkedList");
const md5 = require("md5");

class HashTable {
  constructor() {
    this.data = [];
  }

  _hash(key) {
    return md5(key);
  }

  //O(1)
  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }

    return undefined;
  }

  //O(1)
  set(key, value) {
    const address = this._hash(key);
    this.data[address] = { key, value };

    return this.data;
  }

  keys() {
    const keysArray = [];

    for (let bucket in this.data) {
      keysArray.push(bucket[0]);
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let bucket in this.data) {
      valuesArray.push(bucket[1]);
    }

    return valuesArray;
  }
}

let myHashTable = new HashTable();
myHashTable.set(0, "asd");
myHashTable.set(0, "xdd");
myHashTable.set(1, 2);
myHashTable.set(5, true);

console.log(myHashTable.data);
