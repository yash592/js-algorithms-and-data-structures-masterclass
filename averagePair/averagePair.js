/* Write a function called averagePair.
 Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 */

function averagePair(arr, num) {
  // console.log(arr.length);
  let i = 0;
  let j = 1;
  while(j < arr.length) {
    if(((arr[i] + arr[j])/2) === num) {
      return [arr[i], arr[j]]
    }
    i++;
    j++;
  }
}



console.log(averagePair([1,2,3], 1.5))
