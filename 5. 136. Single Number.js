// URL : https://leetcode.com/problems/single-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	var result;
	for (let x = 0; x < nums.length; x++) {
		let counter = 0;
		const currentItem = nums[x];
		for (let y = 0; y < nums.length; y++) {
			const compareItem = nums[y];
			if (currentItem === compareItem) {
				counter++;
			}
		}
		if (counter === 1) {
			return currentItem;
		}
	}
	return -1;
};

console.log(singleNumber([1, 2, 2, 3, 3, 3, 1, 1, 4]));
console.log(singleNumber([4, 1, 2, 1, 2]));

// other soulution that is faster
var singleNumber = function (nums) {
	const countMap = {};
	for (const num of nums) {
		countMap[num] = (countMap[num] || 0) + 1;
	}
	for (const num in countMap) {
		if (countMap[num] === 1) {
			return parseInt(num); // Convert back to number type
		}
	}
	return -1; // If no single number found
};
