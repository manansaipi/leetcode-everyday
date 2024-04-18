// URL : https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
	// Iterate through each element in the array
	for (let i = 0; i < nums.length; i++) {
		// If the current element equals the target, return its index
		if (nums[i] == target) {
			return i;
		}
	}
	// If the target integer is not found in the array, return -1
	return -1;
};

console.log([4, 5, 6, 7, 0, 1, 2], 0);
