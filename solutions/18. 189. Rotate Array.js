// URL : https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// cannot doing this cause -> Do not return anything, modify nums in-place instead.
var rotate = function (nums, k) {
	let result = [];
	let arrayLength = nums.length;
	for (let i = arrayLength - 1 - k; i < arrayLength; i++) {
		const element = nums[i];

		result.push(element);
	}
	for (let j = 0; j < arrayLength - 1 - k; j++) {
		const element = nums[j];

		result.push(element);
	}
	return result;
};

//best approach
var rotate = function (nums, k) {
	// Ensure k is within the range of array length
	k = k % nums.length;

	// Reverse the entire array
	reverse(nums, 0, nums.length - 1);

	// Reverse the first k elements
	reverse(nums, 0, k - 1);

	// Reverse the remaining elements after k
	reverse(nums, k, nums.length - 1);

	// Return the rotated array
	return nums;
};

function reverse(nums, start, end) {
	// Reverse elements until start index is less than end index
	while (start < end) {
		// Swap elements at start and end indices
		const temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;

		// Move start index forward and end index backward
		start++;
		end--;
	}
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
