const isNice = arr => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] === -1 || arr[i] - arr[j] === 1) {
        counter++;
      }
    }
  }
  console.log(counter);
  if (counter === arr.length) return true;
  else return false;
};

const isNiceOptimized = arr => {
  // loop only once over the array
  // if 2-3 = n-d then the reverse will be true as well i.e 3-2 = 1
  //
};

isNice([2, 10, 9, 3]);
