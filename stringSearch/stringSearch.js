function stringSearch(sentence, term) {
  let count = 0;
  for(let i=0;i < sentence.length;  i++) {
    for(let j = 0; j < term.length; j++) {
      if(term[j] !== sentence[i+j]) break;
      if(j === term.length-1) count++;
    }
  }
  return count
}

console.log(stringSearch('zomgwowzaomg', 'omg'))


// zomgwowzaomg                 omg
// .                            .
