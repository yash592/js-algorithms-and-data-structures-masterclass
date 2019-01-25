// Binary Search Tree implementation

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // insert function

  insert(val) {
    let newNode = new Node(val);
    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
        var current = this.root
        while(true) {
            if(val === current.val) return undefined
            if(val < current.val) {
                if(!current.left) {
                    current.left = newNode
                } else {
                  current = current.left;
                }

            } else if (val > current.val) {
              if(!current.right) {
                current.right = newNode;
                return this
              } else {
                current = current.right
              }
            }

        }
    }
  }

//   find function
  find(num) {
    if(!this.root) return null;
    else if(num === this.root.val) {
      console.log('found it');
      return this.root.val
    }

    let numFound = false;
    let current = this.root;


    while(!numFound && current) {
      if(num > current.val) {
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
    const data = []
          queue = [];
          node = this.root
    queue.push(node)

    while(queue.length) {
      node = queue.shift()
      data.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data;

  }


}

var tree = new BinarySearchTree();
//          10
//       6      15
//     3  8       20


tree.insert(10)
tree.insert(6)
tree.insert(14)
tree.insert(3)
tree.insert(7)
tree.insert(11)
tree.insert(15)
tree.insert(1)
tree.insert(4)
tree.insert(8)
tree.insert(9)
tree.insert(12)
