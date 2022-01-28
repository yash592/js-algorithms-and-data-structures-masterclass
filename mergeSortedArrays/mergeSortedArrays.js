const mergeSortedArrays = (arr1, arr2) => {
    if(!arr2) return arr1;
    if(!arr1) return arr2;

    let i = j = 0;
    let sortedArr = [];
    let pointerOne = arr1[j];
    let pointerTwo = arr2[j];

    while (pointerOne || pointerTwo) {

        pointerOne = arr1[i];
        pointerTwo = arr2[j];
        if(!pointerTwo || pointerOne < pointerTwo) {
            sortedArr.push(pointerOne);
            i++
        }
        else {
            sortedArr.push(pointerTwo);
            j++;
        }
        
    }
    return sortedArr;
}





mergeSortedArrays([0,3,4,31], [5,60,30])