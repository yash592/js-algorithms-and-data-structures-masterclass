/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding calue squared in the second array.
The frequency of tvalues must be the same*/

// solution using reduce HOF
function same(arr1, arr2) {
  const sortedArr2 = arr2.sort();
  console.log(sortedArr2);
  return arr1.reduce(function(acc, value, index) {
    if(value*value === sortedArr2[index]) {
      return true;
    } else {
      return false;
    }
  }, 0, {})
}

// second solution.Worse O(n)

function same1(arr1, arr2) {
  let sortedArr = arr2.sort();
  for(i= 0; i < arr1.length; i++) {
    for(j= 0; j < sortedArr.length; j++) {
      console.log(arr1[i]*arr1[i], sortedArr[j]);
      if(arr1[i]*arr1[i] === sortedArr[j]){
        return true
      } else {
        return false
      }
    }
  }
}

console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [1, 9]))

console.log(same1([1,2,3], [4,1,9]))
console.log(same1([1,2,3], [1, 9]))
