// O(n^2) solution

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

function maxSumArraySumBt(arr, num) {
  let max= 0;
  for(let i = 0; i < num; i++) {
     max += arr[i]
  }
  // console.log(max);

  let temp = max;

  for(j = num; j < arr.length; j++) {
    temp = temp - arr[j-num] + arr[j]
    console.log('max', max, 'temp', temp);
    max = Math.max(max, temp)
  }
  return max

}

console.log(maxSumArraySum([1,2,5,3,8,1,5], 2))
console.log(maxSumArraySum([1,2,5,2,8,1,5], 4))
console.log(maxSumArraySumBt([1,2,5,3,8,1,5], 2))
console.log(maxSumArraySumBt([1,2,5,2,8,1,5], 4))
