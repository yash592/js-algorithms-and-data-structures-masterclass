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

isNice([2, 10, 9, 3]);
