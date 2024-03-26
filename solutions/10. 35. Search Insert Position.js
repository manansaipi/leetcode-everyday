// URL : https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	result = 0;
	for (let i = 0; i < nums.length; i++) {
		const current = nums[i];
		result = i;
		if (current >= target) {
			return result;
		}
	}
	return result + 1;
};
console.log(searchInsert([1, 3, 5, 6], 5));
