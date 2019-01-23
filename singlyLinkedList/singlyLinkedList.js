// singly linkedlist implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0;
  }

  // push function

  push(val) {
    let newNode = new Node (val)
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

//   pop function
  pop() {
      if(!this.head) return undefined
      var current = this.head;
      var newTail = current;
      while(current.next) {
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
  }

//   shift function
  shift() {
    if(!this.head) return;
    var current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }

//   unshift function
  unshift(val) {
    var newerNode = new Node(val)
    if(!this.head) {
      this.head = newerNode;
      this.tail = this.head;
    } else {
      newerNode.next = this.head;
      this.head = newerNode;
    }
    this.length++;
    return this;
  }

//  get function

  get(index) {
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++
    }
    return current;
  }

// insert function

insert(index, val) {
  if(index < 0 || index > this.length) return false
  if(index === this.length) {
    this.push(val)
  }
  if(index === 0) {
    this.unshift(val)
  }
  var newNode = new Node(val)
  var current = this.get(index-1);
  var temp = current.next
  current.next = newNode;
  newNode.next = temp;
  this.length++
  return true;
}



}

var list = new SinglyLinkedList()
// list.push('Hello')
// console.log(list);
