const same = (arr1, arr2) => {
  if(arr1.length != arr2.length) return false;
  for (let i = 0; i  < arr1.length; i++) {
    let currIdx = arr2.indexOf(arr1[i]*arr1[i])
    if(currIdx === -1) {
      return false
    }
    arr2.splice(currIdx, 1)
    
  }
  return true;
}

const sameBetter = (arr1, arr2) => {
  let obj1 = {};
  let obj2 = {};
  for (let keys of arr1) {
    obj1[keys] = (obj1[keys] || 0) + 1;
  }
  for(let keys of arr2) {
    obj2[keys] = ((obj2[keys]) || 0) + 1;
  }

  console.log(obj1, obj2)

  for(let keys in obj1) {
    console.log("ob", obj1[keys])
    console.log("sqrt", Math.sqrt(obj2[keys]))

    if(obj1[keys] != obj2[keys]) {
      return false;
    }

  }  
}

console.log(same([1, 2, 3], [1, 4, 9]));

console.log(sameBetter([1,2,3,3], [1,4,9,9]))