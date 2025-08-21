// https://leetcode.com/problems/number-of-zero-filled-subarrays/?envType=daily-question&envId=2025-08-19
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count++; // increment count for each zero found
      result += count; // add the count of zeroes to the result
    } else {
      count = 0; // reset count if the current number is not zero
    }
  }
  return result;
};
console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));
