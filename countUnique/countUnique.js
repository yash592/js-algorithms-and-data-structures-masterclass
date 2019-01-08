/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted. */

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let uniqueVals = 0;
  let duplicateVals = 0;
  for(let i = 0; i < arr.length; i++) {
    (arr[i] != arr[i+1]) ? uniqueVals++ : duplicateVals++;
  }
  return [uniqueVals, duplicateVals];
}

function countUniqueValuesBt(arr) {

  let i = 0;

  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i+1
}

countUniqueValues([1,1,1,1,1,2])
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValuesBt([1,2,3,4,4,4,7,7,12,12,13]));
