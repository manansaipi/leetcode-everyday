// URL : https://leetcode.com/problems/remove-element/description/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let i = 0;
	let length = nums.length;
	while (i < length) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			length--;
		} else {
			i++;
		}
	}
	return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
