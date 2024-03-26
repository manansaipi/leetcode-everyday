// URL : https://leetcode.com/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	var result = 0;
	var count = 0;

	for (var i = 0; i < nums.length; i++) {
		if (count === 0) {
			result = nums[i];
			count++;
		} else if (result === nums[i]) {
			count++;
		} else {
			count--;
		}
	}

	return result;
};

console.log(majorityElement([6, 2, 2]));
