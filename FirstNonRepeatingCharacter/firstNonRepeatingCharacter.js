function firstNonRepeatingCharacter(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
        let duplicateFound = false;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) duplicateFound = true
        }
        if (!duplicateFound) return i
    }
    return -1;
}

function firstNonRepeatingCharacterOptimal(string) {
    // Write your code here.
    let hash = new Map();
    for (let i = 0; i < string.length; i++) {
        if (!hash.has(string[i])) {
            hash.set(string[i], count = 1)
        } else {
            hash.set(string[i], count += 1)
        }

    }
    for (let i = 0; i < string.length; i++) {
        if (hash.get(string[i]) === 1) return i
    }
    return -1;
}

console.log(firstNonRepeatingCharacterOptimal("faadabcbbebdf"))