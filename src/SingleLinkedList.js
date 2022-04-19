class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //O(n)
  traverseTo(index) {
    //checking invalid entries
    if (index < 0 || index >= this.length) {
      throw new Error("invalid index");
    }

    //navigating the list from head to tail
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  //O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
    return this;
  }

  //O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  //O(n)
  insert(value, index) {
    //implementing separate method that doesn't require traverse
    if (index === 0) {
      return this.prepend(value);
    }
    //implementing separate method that doesn't require traverse
    else if (index >= this.length) {
      return this.append(value);
    }

    let leftNode = this.traverseTo(index - 1); //traverse call
    let newNode = new Node(value);
    let rightNode = leftNode.next;

    newNode.next = rightNode;
    leftNode.next = newNode;

    this.length++;
    return this;
  }

  //O(n)
  pop() {
    //empty list error
    if (this.length === 1) {
      throw new Error("list can't be empty");
    }

    this.tail = this.traverseTo(this.length - 2);
    this.tail.next = null;

    this.length--;
    return this;
  }

  //O(1)
  shift() {
    if (this.length == 1) {
      throw new Error("list can't be empty");
    }

    this.head = this.head.next;

    this.length--;
    return this;
  }

  //O(n)
  delete(index) {
    //calling separate methods that don't require traverse
    if (index <= 0) {
      this.shift();
      return this;
    }
    if (index >= this.length - 1) {
      this.pop();
      return this;
    }

    let leftNode = this.traverseTo(index - 1); //traverse call
    let rightNode = index < this.length ? leftNode.next.next : null;
    leftNode.next = rightNode;

    this.length--;
    return this;
  }

  getList() {
    let list = [];
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      list.push(node.value);
      node = node.next;
    }

    return list;
  }

  print() {
    console.log(`head: ${this.head.value}`);
    console.log(`tail: ${this.tail.value}`);
    console.log(`length: ${this.length}`);
    console.log(this.getList());
  }

  printNodes() {
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      console.log("\n▬▬▬▬▬▬▬▬▬▬▬▬▬");
      console.log(`  value: ${node.value}`);
      console.log(`  next:  ${node.next ? node.next.value : "null"}`);
      console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬\n      ▮\n      ▮\n      ▼");

      node = node.next;
    }
  }

  reverse() {}
}

//tests
let myLinkedList = new SingleLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 4);
myLinkedList.insert(-2, 9);
myLinkedList.delete(1);
myLinkedList.delete(0);
myLinkedList.pop();
myLinkedList.delete(1);

//myLinkedList.print(); // [5, 1] expected
myLinkedList.printNodes();

module.exports = SingleLinkedList;
