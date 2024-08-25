// URL : https://leetcode.com/problems/plus-one/ 
/**
 * @param {number[]} digits
 * @return {number[]}
 */

// error when handling large number
var plusOne = function(digits) {

    for (let index = digits.length - 1; index >= 0; index--) {
        const element = digits[index];

        if (element < 9) {
            digits[index] ++;
            return digits
        }
        digits[index] = 0;
        
    }
    
    digits.unshift(1); // Add 1 to the beginning of the array

    return digits
};


console.log(plusOne([1,2,3]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([8,9,9,9]));
console.log(plusOne([9,9,0]));
console.log(plusOne([9,8,9]));
console.log([2,4,9,3,9]);