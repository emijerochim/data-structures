class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = this.last = null;
    this.length = 0;
  }

  //O(1)
  peek() {
    return this.first;
  }

  //O(1)
  enqueue(value) {
    const node = new Node(value);

    if (!this.length) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return this;
  }

  //O(1)
  dequeue() {
    if (!this.length) {
      return null;
    }

    if (this.length == 1) {
      this.last = null;
    }

    this.first = this.first.next; //if length==1, this.first becomes null

    this.length--;
    return this;
  }

  //O(1)
  isEmpty() {
    return this.length == 0;
  }
}

//tests
const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.peek();
myQueue.enqueue(5);

console.log(myQueue);

module.exports = Queue;
