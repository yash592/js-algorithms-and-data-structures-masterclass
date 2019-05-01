const isSubSequence = (s1, s2) => {
  let i = (j = 0);

  while (j < s2.length) {
    if (s1[i] === s2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  if (i === s1.length) {
    return true;
  }
  return false;
};

console.log(isSubSequence("sing", "sting"));
console.log(isSubSequence("abc", "acb"));
