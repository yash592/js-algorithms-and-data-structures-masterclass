const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let currentMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMin]) {
        currentMin = j;
      }
    }
    swap(arr, i, currentMin);
  }
  return arr;
};

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const sort = [9, 8, 1, 2, 5, 17, 4];

console.log(selectionSort(sort));
