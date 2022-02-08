const moveElement = (array, toMove) => {
    let i = 0;
    let j = 1;

    while (j < array.length) {
        if (((array[i] === toMove) && (array[i] - array[j]) != 0)) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j++
        } else if (array[i] === toMove) {
            j++;
        } else {
            i++;
            j++;
        }
    }
    return array;

}

console.log(moveElement([1, 2, 3, 4, 5], 3));