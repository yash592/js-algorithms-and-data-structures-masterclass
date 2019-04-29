/* Write a function called averagePair.
 Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 */

function averagePair(arr, num) {
  // console.log(arr.length);
  if (!arr.length) return false;
  let s = 0;
  let e = arr.length - 1;

  while (s < e) {
    let avg = (arr[s] + arr[e]) / 2;
    if (avg === num) return true;
    if (avg < num) s++;
    else e--;
  }
  return false;
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 67));
