// URL : https://leetcode.com/problems/concatenation-of-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getConcatenation = function (nums) {
	// Initialize an empty array to store the concatenated result.
	let result = [];

	// Counter to track the number of iterations.
	let counter = 0;

	// Loop through each element in the original array.
	for (let index = 0; index < nums.length; index++) {
		// Get the current element.
		const element = nums[index];

		// Push the element into the result array.
		result.push(element);

		// Check if it's the last element in the original array and counter is not 1.
		if (index == nums.length - 1 && counter != 1) {
			// Reset the index to start over.
			index = -1;

			// Increment the counter.
			counter++;
		}
	}

	// Return the concatenated array.
	return result;
};
console.log(getConcatenation([1, 2, 1]));

// other
var getConcatenation = function (nums) {
	// Initialize an empty array to store the concatenated result.
	let result = [];

	// Loop twice to concatenate the array with itself.
	for (let i = 0; i < 2; i++) {
		// Loop through each element in the original array.
		for (let j = 0; j < nums.length; j++) {
			// Push each element into the concatenated array.
			result.push(nums[j]);
		}
	}

	// Return the concatenated array.
	return result;
};
console.log(getConcatenation([1, 2, 1]));
