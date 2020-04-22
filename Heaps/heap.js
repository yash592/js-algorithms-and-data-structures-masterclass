class Heaps {
  constructor() {
    this.heaps = [];
  }

  insert(val) {
    this.heaps.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heaps.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.heaps[parentIndex] < this.heaps[index]) {
      this.swap(this.heaps, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      if (index <= 0) break;
    }
    return this;
  }

  swap(arr, a1, a2) {
    [arr[a1], arr[a2]] = [arr[a2], arr[a1]];
  }

  extractMax() {
    let index = this.heaps.length - 1;
    let root = 0;

    this.swap(this.heaps, index, root);
    this.heaps.pop();

    let childtoBeSwapped = 0;
    let childIndex = 0;

    extractMax() {
      let index = this.heaps.length - 1;
     let root = 0;
 
     this.swap(this.heaps, index, root);
     this.heaps.pop();
 
     let childtoBeSwapped = 0;
     let childIndex = 0;
 
 
     do {
       let parent = this.heaps[root];
       let leftChild = this.heaps[2 * root + 1];
       let rightChild = this.heaps[2 * root + 2];
       
       if(leftChild && rightChild) {
          childtoBeSwapped = Math.max(leftChild, rightChild);
          childIndex = this.heaps.indexOf(childtoBeSwapped);
       }
       else if(leftChild) {
         childtoBeSwapped = leftChild;
         let childIndex = this.heaps.indexOf(leftChild);
       }
       else if(rightChild) {
         childtoBeSwapped = rightChild;
         let childIndex = this.heaps.indexOf(rightChild);
       }
 
       
       if (parent < childtoBeSwapped) {
       this.swap(this.heaps, root, childIndex);
       root = childIndex;
     } 
   } while (parent < childtoBeSwapped)
   return this.heaps;
 }
    return this.heaps;
  }
}

const heap = new Heaps();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
