/* Write a function called sameFrequency.
Given two positive integers, find out of the two numbers have the sameFrequency
of digits */

function sameFrequency(int1, int2) {

  const obj1 = {};
  const obj2 = {};

  if(int1.toString().length !== int2.toString().length) {
    return false;
  }

  for(let keys of int1.toString()) {
    obj1[keys] = (obj1[keys] || 0) + 1
  }

  // console.log(obj1, obj2);

  for(let vals of int2.toString()) {
    obj2[vals] = (obj2[vals] || 0) + 1
  }
  console.log(obj1, obj2);

  for(let key in obj1) {
    console.log(obj1[key], obj2[key]);
    if(obj1[key] != obj2[key]) return false
  }
  return true
}

console.log(sameFrequency(1822,2812));
// sameFrequency(34,14)
console.log(sameFrequency(34,142));
