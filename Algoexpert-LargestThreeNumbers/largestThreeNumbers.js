const largestThreeNumbers = array => {
    let result = new Array(3).fill(null);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > result[2] || result[2] === null) {
            shiftHelper(element, result, 2)
        }
        else if (element > result[1] || result[1] === null) {
            shiftHelper(element, result, 1)
        }
        else if (element > result[0] || result[0] === null) {
            shiftHelper(element, result, 0)
        }
    }
    return result;
}

const shiftHelper = (element, resultArr, index) => {
    for (let i = 0; i <= index; i++) {
        if (i === index) {
            resultArr[i] = element
        } else {
            resultArr[i] = resultArr[i + 1]
        }

    }

}

console.log(largestThreeNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));