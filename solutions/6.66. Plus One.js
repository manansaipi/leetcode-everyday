// URL : https://leetcode.com/problems/plus-one/ 
/**
 * @param {number[]} digits
 * @return {number[]}
 */

// error when handling large number
var plusOne = function(digits) {
    let inputInt = parseInt(digits.join(''))
    let result = (inputInt+ 1).toString().split('')
    return result;
};

// best approach
var plusOne = function(digits) {
    let n = digits.length;
    
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
        // Case 1: If the current digit is less than 9, simply increment it and return the array
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // Case 2: If the current digit is 9, set it to 0 and continue to the next digit
        digits[i] = 0;
    }
    
    // Case 3: If all digits are 9, add a new digit at the beginning and set it to 1
    digits.unshift(1);
    
    return digits;
};


console.log(plusOne([1,2,3]));