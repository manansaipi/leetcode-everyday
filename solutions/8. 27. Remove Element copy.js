// URL : https://leetcode.com/problems/remove-element/description/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	// loop thorough the array
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		// if currnet element is equal to the value to be removed, then remove the element from the array 
		if (element == val) {
			// remove element from the array
			nums.splice(index, 1)
			// after remove, back
			index--
		}
	}
	// return the length of the current array
	return nums.length
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
