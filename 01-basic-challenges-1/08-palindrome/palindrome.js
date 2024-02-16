function onlyLettersAndNumbers(str) {
    let newStr = str.replace(/[^\w]/g, '');
    return newStr;
}

function isPalindrome(string) {
    let checkPalindrome = onlyLettersAndNumbers(string).toLowerCase();
    let isPalindrome = false;
    if (checkPalindrome.length % 2 === 0) {
        if (checkPalindrome.substring(0, checkPalindrome.length/2) === checkPalindrome.substring(checkPalindrome.length/2, checkPalindrome.length).split("").reverse().join("")) {            
            isPalindrome = true;
        } 
    } else {
        if (checkPalindrome.substring(0, checkPalindrome.length/2) === checkPalindrome.substring((checkPalindrome.length/2)+1, checkPalindrome.length).split("").reverse().join("")) {            
            isPalindrome = true;
        } 
    }

    return isPalindrome;
}

module.exports = isPalindrome;
