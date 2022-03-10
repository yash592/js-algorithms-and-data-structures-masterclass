const caesarCipherEncryptor = (string, key) => {
    let str = '';
    for (let i = 0; i < string.length; i++) {
        let letterCode = string[i].charCodeAt();
        let code = letterCode + key;

        (code > 122) ? str += String.fromCharCode(96 + (code % letterCode)) : str += String.fromCharCode(code);
    }
    return str;
}
console.log(caesarCipherEncryptor("xyz", 2))