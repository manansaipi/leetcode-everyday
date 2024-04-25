// URL : https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const encrypt = function(x) {
    // Split the number into an array of digits, sort them in ascending order,
    // and then replace each digit with the largest digit in the number.
    let sortedDigits = String(x).split('').sort((a, b) => a - b);
    let result = [];
    for (let index = 0; index < sortedDigits.length; index++) {
        result.push(sortedDigits[sortedDigits.length - 1]);
    }
    // Join the sorted digits back into a string and convert it to a number.
    return parseInt(result.join(''));
};

console.log(encrypt(10));

var sumOfEncryptedInt = function(nums) {
    // Calculate the sum of encrypted elements
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += encrypt(nums[i]);
    }
    return sum;
};

console.log(sumOfEncryptedInt([10,21,31]));

