const smallestLetter = (letters, target) => {
    if (target === "z") return letters[0];

    let closest = Infinity;
    let targetCharcode = target.charCodeAt();


    let j = 0;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() > targetCharcode) {
            if ((letters[i].charCodeAt() - targetCharcode) < closest) {
                closest = letters[i].charCodeAt() - targetCharcode;
                j = i;
            }
        }
    }
    return letters[j];
}

console.log(smallestLetter(["c", "f", "j"], "a"))