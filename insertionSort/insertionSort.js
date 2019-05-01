const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let picked = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > picked; j--) {
      console.log("picked", picked, j, arr[j]);
      arr[j + 1] = arr[j];
    }
    console.log(j);
    arr[j + 1] = picked;
  }

  return arr;
};

const sort = [2, 5, 3];

console.log(insertionSort(sort));
