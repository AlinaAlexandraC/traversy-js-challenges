function countVowels(string) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    // for (let i = 0; i < string.length; i++) {
    //     console.log(string.charCodeAt(i));
    //     if(vowels.includes(string[i])) {
    //         count++;
    //     }        
    // }

    string.split("").map((char) => {
        if(vowels.includes(char))
        count++;  
    })

    return count;
}

module.exports = countVowels;
