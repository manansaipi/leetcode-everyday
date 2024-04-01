//URL : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	// Initialize an empty array to store the result.
	let result = [];
	// Create a set to store unique values from the input array.
	let uniqueVal = new Set(nums);

	// Iterate over each index from 1 to the length of the input array.
	for (let index = 1; index <= nums.length; index++) {
		// Access the element at the current index.
		const element = nums[index];
		// If the set doesn't contain the current index, it's a disappeared number.
		if (!uniqueVal.has(index)) {
			// Push the disappeared number to the result array.
			result.push(index);
		}
	}

	// Return the array containing the disappeared numbers.
	return result;
};
console.log(findDisappearedNumbers([1, 1]));
