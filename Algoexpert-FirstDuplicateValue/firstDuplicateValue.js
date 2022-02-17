// O(n^2) solution

const firstDuplicateValue = array => {
    let firstDup = Infinity;
    let temp = array.length;
    for (let i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {

            if (array[i] === array[j] && i != j) {
                temp = j
                firstDup = Math.min(temp, firstDup)
            }
        }

    }
    if (temp === array.length) return -1
    return array[firstDup];
}

// O(n) solution

const firstDuplicateValueOptimal = array => {
    let hashMap = new Map();
    for (let i = 0; i < array.length; i++) {
        if (!hashMap.has(array[i])) {
            hashMap.set(array[i], i)
        } else {
            return array[i]
        }
    }
    return -1
}

console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]))
console.log(firstDuplicateValueOptimal([2, 1, 5, 3, 3, 2, 4]))
