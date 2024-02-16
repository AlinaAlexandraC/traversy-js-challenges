function removeDuplicates(array) {
    let noDuplicatesArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!noDuplicatesArray.includes(array[i])) {
            noDuplicatesArray.push(array[i]);
        }  
    }

    return noDuplicatesArray;
}

module.exports = removeDuplicates;
