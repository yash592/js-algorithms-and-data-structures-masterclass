/*
Given an array with strings containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
return an array with "Yes" if valid and "No" otherwise
e.g
['{}[]()', '{[}]']

OUTPUT:
["YES", "NO"]
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

*/

const result = str => {
    const bracesArray = [];
    for (const char of str) {
        if (char === "{") {
            bracesArray.push("}")
        }
        else if (char === "[") {
            bracesArray.push("]")
        }
        else if (char === "(") {
            bracesArray.push(")")
        }
        else {
            if (char !== bracesArray.pop()) {
                return false;
            }

        }
    }
    if (bracesArray.length === 0) {
        return true
    }
    return false;
}


const matching = braces => {
    // let resultArr = []
    for (let index = 0; index < braces.length; index++) {
        const element = braces[index];
        let res = result(element);
        !res ? braces[index] = "NO" : braces[index] = "YES"
    }
    return braces;
}

let braces = ['{}[]()', '{[}]']
console.log(matching(braces));