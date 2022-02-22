const isMonononic = array => {
    if (!array.length || array.length === 1) return true;
    let increasing = true;
    if (array[0] > array[array.length - 1]) increasing = false;
    let i = 0;
    while (i < array.length - 1) {
        if (!increasing) {
            if (array[i] >= array[i + 1]) {
                i++;
            } else {
                return false
            }
        }
        else {
            if (array[i] <= array[i + 1]) {
                i++;
            } else {
                return false
            }
        }
    }
    return true;
}

console.log(isMonononic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
console.log(isMonononic([1, 2, 0]));
console.log(isMonononic([1, 2, 3]));
