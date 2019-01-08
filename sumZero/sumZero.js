
/* Write a function sumZero which accepts a sorted array and finds the first pair of numbers adding upto zero */

// O(n^2) solution lmao

function sumZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// O(n) solution

function sumZeroRf(arr) {
  let firstPivot = 0
  let secondPivot = arr.length - 1
  // console.log(firstPivot, secondPivot);

  while(firstPivot < secondPivot) {
    // console.log(arr[firstPivot], arr[secondPivot])
     if((arr[firstPivot] + arr[secondPivot]) > 0) {
       // console.log((arr[firstPivot] + arr[secondPivot]));
       secondPivot--;
     }
     if((arr[firstPivot] + arr[secondPivot]) < 0) {
       // console.log((arr[firstPivot] + arr[secondPivot]));
       firstPivot++;
     }
     if((arr[firstPivot] + arr[secondPivot]) === 0) {
       return [arr[firstPivot], arr[secondPivot]]
     }
  }
}


console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 6]))
console.log(sumZeroRf([-4, -3, -2, -1, 0, 1, 2, 5, 6]))
