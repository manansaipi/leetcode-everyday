// https://leetcode.com/problems/count-the-number-of-special-characters-i/description

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    // Initialize sets to store lowercase and uppercase characters separately
    const smallSet = new Set();
    const capitalSet = new Set();
    
    // Populate sets with lowercase and uppercase characters
    for (let char of word) {
        if (char >= 'a' && char <= 'z') {
            smallSet.add(char);
        } else {
            capitalSet.add(char);
        }
    }
    
    // Initialize counter to store the count of special characters
    let count = 0;
    
    // Iterate through lowercase characters set and check if corresponding uppercase character exists
    for (let char of smallSet) {
        if (capitalSet.has(char.toUpperCase())) {
            count++;
        }
    }
    
    // Return the count of special characters
    return count;
};
console.log(numberOfSpecialChars("aaAbcBC"));