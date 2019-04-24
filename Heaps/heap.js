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

  swap = (arr, a1, a2) => {
    [arr[a1], arr[a2]] = [arr[a2], arr[a1]];
  };
}

const heap = new Heaps();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
