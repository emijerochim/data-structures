//reverse()

class DinamicArray {
  constructor(length = 0, data = {}) {
    this.length = length;
    this.data = data;

    for (let i = 0; i < length; i++) {
      this.data[i] = null;
    }
  }

  //O(1)
  get(index) {
    return this.data[index];
  }

  //O(n)
  insert(index, item) {
    if (index === 0) {
      this.unshift(item);
      return this.data;
    }
    if (index === this.length) {
      this.push(item);
      return this.data;
    }
  }

  //O(n)
  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;

    return this.data;
  }

  //O(1)
  push(item) {
    this.data[this.length] = item;

    this.length++;
    return this.data;
  }

  //O(n)
  delete(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length];

    this.length--;
    return this.data;
  }

  //O(n)
  shift() {
    return this.delete(0);
  }

  //O(1)
  pop() {
    delete this.data[this.length];

    this.length--;
    return this.data;
  }
}

let array = new MyArray(5);

array.push(1);
array.push(2);
array.push(3);
array.unshift(6);
array.shift();

console.log(array);

module.exports = DinamicArray;
