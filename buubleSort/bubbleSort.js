const bubbleSort = arr => {
  let len = arr.length;
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const sort = [9, 8, 1, 2, 5, 17, 4];

console.log(bubbleSort(sort));
