class Node {
  constructor(value, next) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //O(n/2)
  traverseTo(index) {
    //checking invalid entries
    if (index < 0 || index >= this.length) {
      throw new Error("invalid index");
    }

    //navigating the list from the nearest end node (head or tail)
    const headToTail = index < this.length / 2;
    let node = headToTail ? this.head : this.tail;

    for (let i = 0; i < index; i++) {
      headToTail ? (node = node.next) : (node = node.prev);
    }

    return node;
  }

  //O(1)
  append(value) {
    let oldTail = this.tail;
    let newTail = new Node(value);

    newTail.prev = oldTail;
    oldTail.next = newTail;
    this.tail = newTail;

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

  //O(n/2)
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
    let rightNode = leftNode.next;
    let newNode = new Node(value);

    newNode.next = rightNode;
    leftNode.next = newNode;

    this.length++;
    return this;
  }

  //O(1)
  pop() {
    if (this.length == 1) {
      throw new Error("list can't be empty");
    }

    //this would be O(1) in a singleLinkedList
    this.tail = this.tail.prev;
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
    this.head.prev = null;

    this.length--;
    return this;
  }

  //O(n/2)
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
    rightNode.prev = leftNode;

    this.length--;
    return this;
  }

  printList() {
    let node = this.head;
    let list = [];

    for (let i = 0; i < this.length; i++) {
      list.push(node.value);
      node = node.next;
    }

    console.log(list);
  }

  printNodes() {
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      console.log("\n▬▬▬▬▬▬▬▬▬▬▬▬▬");
      console.log(`  prev:  ${node.prev ? node.prev.value : "null"}`);
      console.log(`  value: ${node.value}`);
      console.log(`  next:  ${node.next ? node.next.value : "null"}`);
      console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬\n   ▲    ▮\n   ▮    ▮\n   ▮    ▼");

      node = node.next;
    }
  }
}

//tests
let myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 4);
myLinkedList.insert(-2, 9);
myLinkedList.delete(1);
myLinkedList.delete(0);
myLinkedList.pop();
//myLinkedList.delete(1);

myLinkedList.printList(); // [5, 1] expected
myLinkedList.printNodes();

module.exports = DoublyLinkedList;
