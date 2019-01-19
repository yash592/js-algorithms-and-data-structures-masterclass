/*

left = 0; right = arr.length -1
while left < right
middle = left+right/2
if val = num return index
if val < num move left
else move right
if not found return -1

*/

function binarySearch(arr, num) {
  var left = 0
  var right = arr.length-1;
  var middle = Math.floor(left+right/2)
  console.log(middle, arr[middle]);

  while(arr[middle] !== num && left <= right) {
    if(num < arr[middle]) {
      right = middle-1
    } else {
      left = middle+1
    }
    middle = Math.floor((left+right)/2)
    console.log(left,middle,right);
  }
  return arr[middle] === num ? middle : -1


}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 12))
