// URL : https://leetcode.com/problems/non-decreasing-array/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
	// Initialize a counter to keep track of the number of modifications made
	let counter = 0;

	// Iterate over the elements of the array
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];

		// Check if the current element is greater than the next element
		if (element > nums[i + 1]) {
			// Increment the counter to indicate a modification
			counter++;

			// Check if modifying the previous element would result in a non-decreasing array
			if (nums[i - 1 > nums[i + 1]]) {
				nums[i + 1] = nums[i] + 1; // Modify the next element to be one greater than the current element
			} else {
				nums[i] = nums[i + 1] - 1; // Modify the current element to be one less than the next element
			}
		}

		// Check if more than one modification has been made
		if (counter > 1) {
			return false; // Return false as it's not possible to make the array non-decreasing with more than one modification
		}
	}

	// If the loop completes without encountering more than one modification, return true
	return true;
};
console.log(checkPossibility([3, 4, 2, 3]));
