/* Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema , formed from iceman  */

function validAnagram(str1, str2) {
  let strObj1 = {}
  let strObj2 = {}
  if(str1.length != str2.length) {
    console.log('Strings not an anagram')
  }
  for(var keys of str1) {
    strObj1[keys] = (strObj1[keys] || 0) + 1
  }

  // console.log('str1',strObj1[keys]);

  for(var keys of str2) {
    strObj2[keys] = (strObj2[keys] || 0) + 1
  }


  if(strObj1[keys] === strObj2[keys]) {
    console.log('anagram');

  } else {
    console.log('not anagram');

  }

}

validAnagram('anagram', 'nagaram')
validAnagram('anna', 'nnaa')
validAnagram('yash', 'hyar')
validAnagram('yash', 'hyarr')
