const backSpaceStringCompare = (s, t) => {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < s.length; i++) {
        let element = s[i];
        if (element != '#') {
            arr1.push(element)
        }
        else if (arr1.length) {
            arr1.pop()
        }

    }

    for (let i = 0; i < t.length; i++) {
        let element = t[i];
        if (element != '#') {
            arr2.push(element)
        }
        else if (arr2.length) {
            arr2.pop()
        }

    }

    return arr1.join("") === arr2.join("")
};

console.log(backSpaceStringCompare("abc#d", "acc#c"));
