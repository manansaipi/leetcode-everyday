// URL : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */

// using hashset(not the best approach)
// because it said do not extra memmory, and hashset did
var removeDuplicates = function (nums) {
	var storage = new Set()// {}

    // loop through the elemet  in the array
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];

        // check if value already exist
		if (storage.has(element)) {
			// if already exist, remove the element from the array
			nums.splice(index, 1)
			// after remove, back
			index--
		}
		// // add the value if not exist yet
		storage.add(element)
	}
	return nums.length
};

// compare current eleemtn with next (because it is a sorted array). but not best approach
var removeDuplicates = function (nums) {

	for (let index = 0; index < nums.length - 1; index++) {
		const element = nums[index];

		if (element == nums[index+1]) {
			nums.splice(index, 1)
			index--
		}
	}
	return nums.length
};

// using left and right pointer
// explanation : https://www.youtube.com/watch?v=DEJAZBq0FDA
var removeDuplicates = function (nums) {

	// initialize the elft to 0 to as as the first index
	var left = 0;

	// loop thourgh the nums and start at second index
	for (let right = 1; right < nums.length; right++) {
		const element = nums[right];

		// if the first and second index are not the same, then increment left and placa the element at the left index
		if (nums[left] != element) {
			// increment left
			left++
			// placa the element at the left index of the nums
			nums[left] = element
		}
		
	}
	// return total left index plus 1
	return left+1
};


console.log(removeDuplicates([1, 1, 2]));

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
