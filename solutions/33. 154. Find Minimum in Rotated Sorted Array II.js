// URL : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	// If there's only one element in the array, return it
	if (nums.length == 1) return nums[0];

	// Loop through the array
	for (let index = 0; index < nums.length - 1; index++) {
		// If current element is greater than the next element, it's the pivot point, so return the next element
		if (nums[index] > nums[index + 1]) {
			return nums[index + 1];
		}
	}

	// If the loop completes without finding a pivot point, return the first element (array is not rotated)
	return nums[0];
};

console.log(findMin([1, 3, 5]));

// many solutions are used binary search for this problem <- prob the best approach
