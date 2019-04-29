function same(arr1, arr2) {
  return arr1.reduce((acc, curr, index) => {
    if (curr * curr === arr2[index]) {
      return true;
    }
    return false;
  });
}

console.log(same([1, 2, 3], [1, 4, 9]));
