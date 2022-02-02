// Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

// Brute Force

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }

        }

    }

}

// Optimal solution

const twoSumOptimal = (arr, target) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        console.log(map);
        if (map.has(target - arr[i])) {
            return [map.get(target - arr[i]), i]
        } else {
            map.set(arr[i], i)
        }
    }
    return null;


}

console.log(twoSum([3, 9, 11, 15, 2, 7], 9))
console.log(twoSumOptimal([3, 9, 11, 15, 2, 7], 9))