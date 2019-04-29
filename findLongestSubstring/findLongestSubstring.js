// Write a function called longestSubString which accepts a string and returns the length of the longest substring with all distinct characters.

const longestSubString = str => {
  let obj = {};
  let longest = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(obj[char]);
  }
};

// console.log(longestSubString("rithmschool"));
console.log(longestSubString("thisisawesome")); //6 awesom
console.log(longestSubString("thisishowwedoit"));

// t  h  i  s  i  s  a  w  e  s  o  m  e

//
