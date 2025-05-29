// https://leetcode.com/problems/divide-array-into-equal-pairs/?envType=daily-question&envId=2025-05-29
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    nums.sort()

    for (let i = 0; i < nums.length; i+=2) {
        if (nums[i] != nums[i+1]) return false
    }
    return true
};
console.log(divideArray([1,2,1,2,500,52]))
// Output: false

console.log(divideArray([3,2,3,2,2,2]))
// Output: true
// Explanation: 
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

console.log(divideArray([1,2,3,4]))
// Output: false
// Explanation: 
// There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.
 