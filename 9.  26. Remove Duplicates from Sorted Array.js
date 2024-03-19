// URL : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length === 0) return 0; // If nums is empty, return 0

	let j = 0; // Pointer for the last non-duplicate element

	// Iterate through the array
	for (let i = 1; i < nums.length; i++) {
		// If current element is different from the previous non-duplicate element
		if (nums[i] !== nums[j]) {
			// Increment j
			j++;
			// Copy the current element to the position after the last non-duplicate element
			nums[j] = nums[i];
		}
	}

	// Return the number of unique elements (j + 1)
	return j + 1;
};

console.log(removeDuplicates([1, 1, 2]));
