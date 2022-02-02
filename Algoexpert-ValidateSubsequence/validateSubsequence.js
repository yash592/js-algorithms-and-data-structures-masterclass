function isValidSubsequence(array, sequence) {
    // Write your code here.
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === sequence[j]) {
            j++;
        }

        if (j === sequence.length) return true
    }
    return false;
}