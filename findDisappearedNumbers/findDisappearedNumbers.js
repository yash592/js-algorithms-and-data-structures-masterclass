const findDisappearedNumbers = (arr) => {
    let set =  [...new Set(arr)].sort();
    
    let i = 0;
    let j = 1;
    
    let missing = [];
    let counter = 1;

    while(j < set.length) {
        
        if(set[j] - set[i] === counter) {
            counter = set[j];
            j++;
        }
        else {
            missing.push((arr[j]-arr[i])-1)
            j++;
        }
    }
    return missing;
}

console.log(findDisappearedNumbers([4,3,2,7,5,2,3,1]));

