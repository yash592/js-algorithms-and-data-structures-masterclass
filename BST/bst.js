// Binary Search Tree implementation

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert function

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  //   find function
  find(num) {
    if (!this.root) return null;
    else if (num === this.root.val) {
      console.log("found it");
      return this.root.val;
    }

    let numFound = false;
    let current = this.root;

    while (!numFound && current) {
      if (num > current.val) {
        current = current.right;
      } else if (num < current.val) {
        current = current.left;
      } else {
        numFound = true;
      }
    }
    return current;
  }

  //   breadth first search

  bfs() {
    const data = [];
    queue = [];
    node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  bfs() {
    var visited = [];
    var final = [];
    var node = this.root;
    visited.push(node);

    while (visited.length) {
      node = visited.shift();
      final.push(node.val);
      if (node.left) visited.push(node.left);
      if (node.right) visited.push(node.right);
    }
    return final;
  }

  dfsPreorder() {
    let data = [];

    let traverse = node => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    let data = [];

    let traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };
    traverse(this.root);
    return data;
  }

  dfsInOrder() {
    let data = [];

    let traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }

  // Leetcode problems
  sumRange(l, r) {
    let data = [];

    let traverse = node => {
      if (node.val > l && node.val < r) data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    function sum(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] != null) sum += arr[i];
      }
      return sum;
    }
    return sum(data);
  }
}

var tree = new BinarySearchTree();
//          10
//       6      15
//     3  8       20

tree.insert(10);
tree.insert(6);
tree.insert(14);
tree.insert(3);
tree.insert(7);
tree.insert(11);
tree.insert(15);
tree.insert(1);
tree.insert(4);
tree.insert(8);
tree.insert(9);
tree.insert(12);
