// O(N^3) solution 🤣

function threeNumberSum(array, target) {
    // Write your code here.
    if (!array.length) return null;

    let res = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {

                if (array[i] + array[j] + array[k] === target) {
                    console.log(array[i], array[j], array[k])
                    let sum = [array[i], array[j], array[k]].sort((a, b) => a - b);
                    res.push(sum)
                }
            }
        }
    }
    return res.sort(([a, b], [c, d]) => a - c || b - d);
}

// O(n^2) solution 

function threeNumberSumOptimal(array, target) {
    // Write your code here.
    let sortedArr = array.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < sortedArr.length - 2; i++) {
        let j = i + 1;
        let k = sortedArr.length - 1;
        let leftSum = 0;
        let sum = 0;

        while (j < k) {
            leftSum = sortedArr[i] + sortedArr[j];
            sum = leftSum + sortedArr[k];
            if (sum === target) {
                res.push([sortedArr[i], sortedArr[j], sortedArr[k]]);
                j++;
            }
            sum < target ? j++ : k--;
        }
    };
    return res;
}