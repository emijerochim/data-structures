class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = this.bottom = null;
    this.length = 0;
  }

  //O(1)
  peek() {
    return this.top;
  }

  //O(1)
  push(value) {
    const node = new Node(value);

    if (!this.length) {
      this.bottom = this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }

  //O(1)
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

  //O(1)
  isEmpty() {
    return this.array.length === 0;
  }
}

//tests
const myStack = new Stack();

myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);
