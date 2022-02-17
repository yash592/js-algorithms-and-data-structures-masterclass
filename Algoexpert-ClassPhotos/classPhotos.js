const classPhotos = (redShirtHeights, blueShirtHeights) => {
    // Write your code here.
    let i = 0;
    const reds = redShirtHeights.sort((a, b) => a - b);
    const blues = blueShirtHeights.sort((a, b) => a - b)

    let inTheBack = blues[blues.length - 1] > reds[reds.length - 1] ? 'blue' : 'red'

    while (i < blues.length) {
        if (inTheBack === 'blue') {
            if (blues[i] <= reds[i]) return false
        } else if (reds[i] <= blues[i]) return false
        i++;
    }
    return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));