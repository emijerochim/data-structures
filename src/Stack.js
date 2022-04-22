class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const node = new Node(value);

    if (!this.length) {
      this.bottom = node;
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }

    this.top = this.top.next;

    if (this.length === 1) {
      this.bottom = this.top;
    }

    this.length--;
    return this;
  }
  isEmpty() {
    return this.array.length === 0;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
