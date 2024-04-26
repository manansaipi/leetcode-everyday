// URL : https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Calculate the length of the array
    const n = nums.length;
    
    // Calculate the expected sum of numbers from 0 to n using Gauss's formula
    let sum = (n * (n + 1)) / 2;

    // Iterate through the array and subtract each number from the expected sum
    for (let i = 0; i < n; i++) {
        sum -= nums[i];
    }

    // The remaining sum is the missing number
    return sum;
};

console.log(missingNumber([3,0,1]));