// Binary Search Tree implementation

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

}

var tree = new BinarySearchTree();
