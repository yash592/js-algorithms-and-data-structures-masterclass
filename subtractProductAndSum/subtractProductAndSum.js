const subtractProductAndSum = (num) => {
    if(num <= 0) return 0;
    let sum = 0;
    let product = 1;
    let str = num.toString();
    for(let i = 0; i < str.length; i++) {
        product *= parseInt(str[i]);
        sum += parseInt(str[i]);
    }
    return product-sum;
}

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(0));