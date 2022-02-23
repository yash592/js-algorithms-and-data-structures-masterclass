const searchInSortedMatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        let length = matrix[0].length;
        for (let j = 0; j < length; j++) {
            if (matrix[i][j] === target) return [i, j]
        }
    }
    return [-1, -1]
}


const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
]

console.log(searchInSortedMatrix(matrix, 1004))