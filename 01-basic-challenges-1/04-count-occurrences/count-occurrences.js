function countOccurrences(string, char) {
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(char === string[i]){
            count++;
        }
    }
    return count;
}

countOccurrences("Hello", "l");

module.exports = countOccurrences;
