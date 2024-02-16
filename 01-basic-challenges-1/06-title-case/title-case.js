function titleCase(string) {
    let words = string.split(" ");
    let capitalizedSentence = [];
    for(let i = 0; i < words.length; i++){
        capitalizedSentence.push(`${words[i][0].toUpperCase()}${words[i].substring(1, words[i].length)}`);
    }
    return capitalizedSentence.join(" ");
}

module.exports = titleCase;
