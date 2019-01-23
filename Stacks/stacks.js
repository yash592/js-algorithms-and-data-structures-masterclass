class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push function

  push(val) {
    let newNode = new Node(val)
    if(!this.first) {
        this.first = newNode
        this.last = this.first;
    } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }
    return ++this.size;
  }

//   pop function

  pop() {
      if(!this.first) return null;
      let temp = this.first;

      if(this.first === this.last) {
          this.last = null;
      }
//       let temp = this.first;
      this.first = this.first.next;
      this.size--;
      return temp.val

  }


}

var stack = new Stack()
