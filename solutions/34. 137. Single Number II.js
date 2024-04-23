// URL : https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // Iterate through the sorted array in steps of 3
    for (let i = 0; i < nums.length; i += 3) {
        // If the current element is not equal to the next one, it's the single element
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
};

console.log(singleNumber([2,2,3,2]));