var findDisappearedNumbers = function(nums) {
    
    let set =  [...new Set(nums)].sort();

    console.log(set);
    
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
            missing.push((set[j]-set[i])-1)
            j++;
        }
    }
    return missing;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,2,10]));


// 1 2 3 4 2 1 3

// 