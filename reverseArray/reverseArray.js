const reverseArray = arr => {
  let mid = Math.floor(arr.length / 2);
  console.log(mid);
  let s = 0;
  let e = arr.length - 1;
  console.log(s, e);

  while (s < mid) {
    swap(arr, s, e);
    s++;
    e--;
    console.log(s, e);
  }
  return arr;
};

const swap = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};

console.log(reverseArray([1, 2, 3, 4, 5]));
