/*

*/

// frequency counter pattern

function areThereDuplicates() {
  let obj = {};
  console.log("arguments", arguments);
  for (let keys in arguments) {
    obj[arguments[keys]] = (obj[arguments[keys]] || 0) + 1;
  }
  // console.log(obj);
  for (let vals in obj) {
    if (obj[vals] > 1) return true;
  }
  return false;
}

// function areThereDups(...args) {
//   console.log('args', args.sort());
//   let i = 0;
//   let j = 1;
//
//   while (j < args.length) {
//     if(args[i] === args[j]) {
//       return true
//     } else {
//       return false;
//     }
//     i++;
//     j++;
//   }
//
// }

// areThereDups();

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
// console.log(areThereDups(1, 2, 3, 6, 5, 5));
//
