class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    this.root = new Node(value);
  }

  getRoot() {
    return this.root;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root.value === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    let currentNode = this.root;

    while (currentNode && currentNode.value !== null) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }

    return null;
  }

  remove(value) {
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //Option 1: No right child:
        if (currentNode.right === null) {
          //if the node to remove is the root node
          if (parentNode === null) {
            this.root = currentNode.left;
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.left;
          }

          //Option 2: Right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          //currentNode.right.left = currentNode.left;
          //if the node to remove is the root node
          if (parentNode === null) {
            this.root = currentNode.right;
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.right;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = leftmost;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = leftmost;
          }
        }
        return true;
      }
    }
  }

  printTree(node = this.root) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : this.printTree(node.left);
    tree.right = node.right === null ? null : this.printTree(node.right);
    return tree;
  }
}

//tests
const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.search(15));
console.log(tree.search(7));
console.log(JSON.stringify(tree.printTree()));

module.exports = BinarySearchTree;