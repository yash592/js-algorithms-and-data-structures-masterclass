function arrayOfProducts(array) {
    // Write your code here.
    let leftProducts = new Array(array.length).fill(1);
    let rightProducts = new Array(array.length).fill(1);
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        leftProducts[i] = product;
        product = product * array[i]
    }

    product = 1;

    for (let j = array.length - 1; j >= 0; j--) {
        rightProducts[j] = product;
        product = product * array[j]
    }

    let res = [];
    let k = 0;

    while (k < array.length) {
        res.push(leftProducts[k] * rightProducts[k])
        k++;
    }
    return res;
}

console.log(arrayOfProducts([5, 1, 4, 2]));