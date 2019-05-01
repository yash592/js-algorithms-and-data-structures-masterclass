function countSmaller(nums) {
  let i = 0;
  let j = i + 1;
  let count = 0;
  let res = [];

  if (!nums.length) return [];
  if (nums.length === 1) return [0];

  while (i < nums.length - 1) {
    if (nums[j] < nums[i]) {
      count++;
      j++;
    } else {
      j++;
    }
    if (j === nums.length) {
      res.push(count);
      i++;
      j = i + 1;
      count = 0;
    }
  }
  res.push(0);
  return res;
}

console.log(countSmaller([5, 2, 6, 1]));
console.log(countSmaller([5]));
console.log(countSmaller([]));
