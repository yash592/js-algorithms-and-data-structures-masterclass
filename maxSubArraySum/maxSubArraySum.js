function maxSumArraySum(arr, num) {
  let max = -Infinity;

  for(let i = 0; i < arr.length-num+1; i++) {
    let temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i+j]
    }
    if(temp > max) {
      max = temp;
    }
  }
  return max

}

console.log(maxSumArraySum([1,2,5,2,8,1,5], 2))
console.log(maxSumArraySum([1,2,5,2,8,1,5], 4))
