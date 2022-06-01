// Write a function called longestSubString which accepts a string and returns the length of the longest substring with all distinct characters.

const longestSubString = s => {
  let i = 0;
  let j = i;
  let longest = 0;

  while (i < s.length) {
    let map = new Map();
    let currentLength = 0;
    while (j < s.length) {
      const current = s[j];
      if (!map.has(current)) {
        map.set(current, j)
        currentLength++;
        longest = Math.max(longest, currentLength);
        j++;
      } else {
        break;
      }
    }
    i++;
    j = i;
  }
  return longest;
};


// console.log(longestSubString("abcabcbb"));
// console.log(longestSubString("thisisawesome")); //6 awesom
console.log(longestSubString("pwwkew"));
console.log(longestSubString("abcabcbb"));
console.log(longestSubString("bbbbb"));
console.log(longestSubString("au"));

// t  h  i  s  i  s  a  w  e  s  o  m  e

//
