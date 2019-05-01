function toLowerCase(str) {
  let res = "";

  for (var i in str) {
    let char = str.charCodeAt(i);
    if (char >= 67 && char <= 90) {
      res += String.fromCharCode(char + 32);
    } else {
      res += str[i];
    }
  }

  return res;
}

console.log(toLowerCase("HELLO"));
console.log(toLowerCase("Hello"));
