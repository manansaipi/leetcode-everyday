// URL : https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// good but not implementing O(log n) runtime complexity. instead, 0(n)
// because the instruction was -> "You must write an algorithm with O(log n) runtime complexity."
var searchInsert = function (nums, target) {

	// loop rhtough the value to check where is the target
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		// if the target was found or if the current element wast greater thant the target value then return the current index 
		if (element >= target) {
			// return current index
			return index
		} 
	}
	// return the nums length if the target was not found and no one is greater then the target nu,ber
	return nums.length
};

// implementing binary search O(log n) runtime complexity
// explanation https://www.youtube.com/watch?v=K-RYzDZkzCI
var searchInsert = function (nums, target) {
	// defin left and right pointer
	var left = 0;
	var right  = nums.length-1;

	while (left<= right){
		// define the middle pointer
		var middle = Math.floor((left + right) / 2); 
		// if the current element was eq to target then just simply return the middle
		if (nums[middle] == target){
			// return middle
			return middle
		} else {
			// if current element was greater than the target, then move the right pointer to behind of the middle pointer index (-1)
			if (nums[middle] > target) {
				// move the right pointer to behind of the middle pointer index (-1)
				right = middle - 1
				// otherwise if the current element was less than the target, then move the left pinter to in front of the middle pointer index (+1)  
			} else {
				// move the left pinter to in front of the middle pointer index (+1)  
				left = middle + 1
			}
		}
	}
	// return left. why? because left if the element only [2] then the target is 1, then left will become 0, and if the target was 3 then left will become 1
	// see detail explanation on https://www.youtube.com/watch?v=K-RYzDZkzCI&t=11m17s
	return left

};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1,3], 4));
console.log(searchInsert([1,3,5], 4));
