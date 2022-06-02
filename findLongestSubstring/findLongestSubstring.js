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

const longestSubStringOptimal = s => {
  let left = 0;
  let longest = 0;

  let map = new Map();
  for (let right = 0; right < s.length; right++) {
    const element = s[right];

    if (!map.has(element)) {
      longest = Math.max(longest, right - left + 1);
    } else {
      let idx = map.get(element);
      left = idx + 1;
    }
    map.set(element, right)
  }
  return longest;
}


// console.log(longestSubString("abcabcbb"));
// console.log(longestSubString("thisisawesome")); //6 awesom
console.log(longestSubString("pwwkew"));
console.log(longestSubString("abcabcbb"));
console.log(longestSubString("bbbbb"));
console.log(longestSubString("au"));


console.log(longestSubStringOptimal("pwwkew"));
console.log(longestSubStringOptimal("abcabcbb"));
console.log(longestSubStringOptimal("bbbbb"));
console.log(longestSubStringOptimal("tmmzuxt"))

