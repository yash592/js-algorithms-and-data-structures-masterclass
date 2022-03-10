const spiralTraverse = array => {
    const result = [];
    let startRow = 0;
    let startColumn = 0;
    let endRow = array.length - 1;
    let endColumn = array[0].length - 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        for (let column = startColumn; column <= endColumn; column++) {
            result.push(array[startRow][column])
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endColumn])
        }
        for (let column = endColumn - 1; column >= startColumn; column--) {
            if (startRow === endRow) break;
            result.push((array[endRow][column]));

        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (startColumn === endColumn) break;
            result.push((array[row][startRow]));

        }
        endColumn--;
        endRow--;
        startColumn++;
        startRow++;
    }
    return result;

}

const test = [
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
]

console.log(spiralTraverse(test))