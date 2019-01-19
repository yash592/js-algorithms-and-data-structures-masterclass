

function stringSearch(sent, str) {
  let count = 0;

  for(let i = 0; i < sent.length; i++) {
    for(let j = 0; j < str.length; j++) {
      if(str[j] !== sent[i+j]) {
        break;
      }
      if(j === str.length-1) {
        count++
      }
    }
    // console.log( 'broke out');
  }
  return count

}

console.log(stringSearch('zomgwowzaomg', 'omg'))
