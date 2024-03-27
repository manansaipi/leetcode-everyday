// URL : https://leetcode.com/problems/monotonic-array/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
	// Initialize a counter variable to keep track of the monotonicity
	let counter = 0;

	// Iterate through the array elements except the last one
	for (let index = 0; index < nums.length - 1; index++) {
		// Get the current element from the array
		const element = nums[index];

		// Check if the current element is greater than the next element in the array
		if (element > nums[index + 1]) {
			// If the counter is already set to 1, it means the sequence is not monotonic
			if (counter == 1) {
				// If so, return false indicating that the array is not monotonic
				return false;
			} else {
				// Otherwise, set the counter to -1 indicating a decreasing sequence
				counter = -1;
			}
		}

		// Check if the current element is less than the next element in the array
		if (element < nums[index + 1]) {
			// If the counter is already set to -1, it means the sequence is not monotonic
			if (counter == -1) {
				// If so, return false indicating that the array is not monotonic
				return false;
			} else {
				// Otherwise, set the counter to 1 indicating an increasing sequence
				counter = 1;
			}
		}
	}

	// If the loop completes without returning false, it means the array is monotonic
	return true;
};

console.log(isMonotonic([1, 2, 2, 3]));
