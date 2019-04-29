/* Write a function called minSubArrayLen  which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
  */

// [2,3,1,2,4,3]
// set start and end = 0
// minLength = 0

// start summing at start of array and set it maxSum = 2
//

// increase end
// set sum = sum + arr[end]
// if(sum > maxSum) set maxSum = sum
// maxSum = 2;
// maxSum = 5
// maxSum = 6
// maxSum = 8
// if(maxSum > num) { end++ maxSum = maxSum - arr[start] + arr[end]; start++;  minLength-- }
// maxSum = 10
// (maxSum > num) {end++ maxSum = maxSum -arr[start] + arr[end]; start++}

function minSubArrayLen(arr, num) {
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] > num) {
  //     return 1;
  //   }
  // }

  let sum = 0;
  let start = (end = 0);
  let minLength = Infinity;

  while (start < arr.length) {
    if (sum < num && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= num) {
      minLength = Math.min(minLength, end - start);
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLength;
}

//

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3, 2], 7));
