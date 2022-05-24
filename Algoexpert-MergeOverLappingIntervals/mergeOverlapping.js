const mergeOverlappingIntervals = array => {
    let i = 0;
    let j = 1;
    let k = 0;
    let interval = 0;
    let result = [];
    const sortedArray = array.sort((a, b) => a[0] - b[0])
    console.log(sortedArray)

    while (j < sortedArray.length) {
        let leftNum = sortedArray[j][0];
        let rightNum = sortedArray[j][1];
        let leftBound = sortedArray[k][0];
        let rightBound = sortedArray[k][1];

        if (leftNum >= leftBound && leftNum <= rightBound) {
            interval += 1;
            k = j;
            j++;
            if (j === sortedArray.length) result.push([sortedArray[i][0], sortedArray[k][1]]);
        } else {
            if (interval > 0) {
                result.push([sortedArray[i][0], sortedArray[k][1]]);
                i = j;
                k = i;
                if (j === sortedArray.length - 1) result.push(sortedArray[j])
            } else {
                result.push(sortedArray[i])
                if (j === sortedArray.length - 1) result.push(sortedArray[j])
                i++;
                j++;
                k++;
            }
        }
    }
    return result;
}

console.log(mergeOverlappingIntervals([
    [100, 105],
    [1, 104]
]));