// URL : https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		const current = nums[i];
		for (let y = i + 1; y < nums.length; y++) {
			const addItem = nums[y];
			if (current + addItem == target) {
				result.push(i);
				result.push(y);
				return result;
			}
		}
	}
	return 0;
};
console.log(twoSum([2, 7, 11, 15], 9));
